import { createClient } from 'jsr:@supabase/supabase-js@2';

// CORSヘッダーの定義
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Authorization, Content-Type',
};

console.log(`Function "select-from-table-with-auth-rls" up and running!`);

Deno.serve(async (req: Request) => {
  // OPTIONSリクエストの処理 (CORSのため)
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Authorizationヘッダーからトークンを取得
    const token = req.headers.get('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return new Response(
        JSON.stringify({ error: 'Authorization token is missing' }),
        { headers: corsHeaders, status: 401 }
      );
    }

    // Supabaseクライアントを作成
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: `Bearer ${token}` },
        },
      }
    );

    // トークンからユーザー情報を取得
    const {
      data: { user },
      error: userError,
    } = await supabaseClient.auth.getUser(token);

    if (userError) {
      throw new Error(`Failed to fetch user: ${userError.message}`);
    }
    console.log('Authorization Header:', req.headers.get('Authorization'));
    console.log('Decoded Token:', token);

    // テーブル 'Evacuee' からデータを取得
    const { data, error } = await supabaseClient.from('Evacuee').select('*');
    if (error) {
      throw new Error(`Failed to fetch data: ${error.message}`);
    }

    // 成功レスポンスを返却
    return new Response(
      JSON.stringify({ user, data }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Function error:', error); // ログ出力
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }
});

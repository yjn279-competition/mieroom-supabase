// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

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
        JSON.stringify({ error: 'Authorization token is missing or invalid' }),
        { headers: corsHeaders, status: 401 }
      );
    }

    // トークンのデコードと検証
    let decodedToken;
    try {
      decodedToken = JSON.parse(atob(token.split('.')[1]));
      if (!decodedToken.sub) {
        throw new Error('Invalid token: missing sub claim');
      }
    } catch (error) {
      console.error('Token decoding error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to decode token: ' + error.message }),
        { headers: corsHeaders, status: 400 }
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

    // ユーザー情報を取得
    const {
      data: { user },
      error: userError,
    } = await supabaseClient.auth.getUser(token);

    if (userError) {
      console.error('User fetch error:', userError);
      return new Response(
        JSON.stringify({ error: `Failed to fetch user: ${userError.message}` }),
        { headers: corsHeaders, status: 400 }
      );
    }

    // テーブル 'Evacuee' からデータを取得
    const { data, error } = await supabaseClient.from('Evacuee').select('*');
    if (error) {
      console.error('Data fetch error:', error);
      return new Response(
        JSON.stringify({ error: `Failed to fetch data: ${error.message}` }),
        { headers: corsHeaders, status: 400 }
      );
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
    console.error('Function error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});

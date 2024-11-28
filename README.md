# mieroom-backend

## Prerequisites

- [Deno](https://docs.deno.com/runtime/getting_started/installation/)
- [Docker Desktop](https://docs.docker.com/desktop/)

## For Development

### Edge Function

#### Adding an Edge Function

```shell
npx supabase functions new {functionName}
```

#### Local Run

```shell
npx supabase start
npx supabase functions serve --no-verify-jwt
```

```shell
curl --location 'http://127.0.0.1:54321/functions/v1/{functionName}/'
```

#### Deploy

```shell
npx supabase functions deploy {functionName}
```

### DB

#### Migration

```
deno run -A npm:prisma migrate dev --name {migrationName}
deno run -A npm:prisma generate --no-engine
```

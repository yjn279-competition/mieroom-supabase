import { Hono } from 'jsr:@hono/hono'

// change this to your function name
const functionName = 'main'
const app = new Hono().basePath(`/${functionName}`)

app.get('/hello', (c) => c.text('Hello from hono-server!'))

Deno.serve(app.fetch)

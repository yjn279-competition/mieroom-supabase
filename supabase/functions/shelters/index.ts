import { Hono } from 'jsr:@hono/hono'

const functionName = 'shelters'
const app = new Hono().basePath(`/${functionName}`)

app.get('/', async (c) => {
  // const evacueeList = await findAllEvacuee()
  return c.text('ゆーじなかむら')
})

// app.post('/', (c) => {
//   const message = 'Create a evacuee'
//   return c.json({ message })
// })

// app.get('/:id', (c) => {
//   const message = `Find a evacuee ${c.req.param('id')}`
//   return c.json({ message })
// })

// app.put('/:id', (c) => {
//   const message = `Update a evacuee ${c.req.param('id')}`
//   return c.json({ message })
// })

// app.delete('/:id', (c) => {
//   const message = `Delete a evacuee ${c.req.param('id')}`
//   return c.json({ message })
// })

Deno.serve(app.fetch)

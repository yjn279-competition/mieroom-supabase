import { Hono } from 'jsr:@hono/hono'
import {
  createEvacueeService,
  readEvacueeListService,
} from './service.ts'

const functionName = 'evacuees'
const app = new Hono().basePath(`/${functionName}`)

app.get('/', async (c) => {
  const evacueeList = await readEvacueeListService()
  return c.json({ evacueeList })
})

app.post('/', async (c) => {
  // const evacuee = await c.req.json()
  const evacuee = {
    id: "1",
    fullName: "山田 太郎",
    birthDate: new Date("1980-01-01"),
    gender: "男性",
    requiresSupport: false,
    healthCondition: "良好",
    medicalNeeds: "なし",
    allergy: "なし", 
    specialNotes: "",
    publicInfo: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  }

  const createdEvacuee = await createEvacueeService(evacuee)
  return c.json({ createdEvacuee })
})

app.get('/:id', (c) => {
  const message = `Find a evacuee ${c.req.param('id')}`
  return c.json({ message })
})

app.put('/:id', (c) => {
  const message = `Update a evacuee ${c.req.param('id')}`
  return c.json({ message })
})

app.delete('/:id', (c) => {
  const message = `Delete a evacuee ${c.req.param('id')}`
  return c.json({ message })
})

Deno.serve(app.fetch)

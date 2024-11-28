import { Evacuee } from './type.ts'
import { PrismaClient } from '../_shared/generated/client/deno/edge.ts'

const prisma = new PrismaClient()

export const readEvacueeListRepository = async () => {
  return await prisma.evacuee.findMany()
}

export const createEvacueeRepository = async (evacuee: Evacuee) => {
  return await prisma.evacuee.create({
    data: evacuee
  })
}

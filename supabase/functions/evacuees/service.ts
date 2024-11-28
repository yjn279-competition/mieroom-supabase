import { readEvacueeListRepository, createEvacueeRepository } from './repository.ts'
import { Evacuee } from './type.ts'

export const readEvacueeListService = async () => {
  const evacueeList = await readEvacueeListRepository()
  return evacueeList
}

export const createEvacueeService = async (evacuee: Evacuee) => {
  const createdEvacuee = await createEvacueeRepository(evacuee)
  return createdEvacuee
}

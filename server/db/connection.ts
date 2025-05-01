import knex from 'knex'
import config from './knexfile.js'
import { Rooms } from '../../models/rooms.js'
// import { Schedule } from '../../models/schedule.js'
import { Pets, PetsData } from '../../models/pets.js'

type Environment = 'development' | 'production' | 'test'
const env = (process.env.NODE_ENV as Environment) || 'development'

const connection = knex(config[env])
export default connection

export async function getAllRooms(): Promise<Rooms[]> {
  const rooms = await connection('rooms').select('*')
  console.log(rooms)
  return rooms
}

export async function getPetsByRoomId(roomId: number): Promise<Pets[]> {
  const pets = await connection('pets').where('room_id', roomId).select('*')
  return pets
}

export async function getAllPets(): Promise<Pets[]> {
  const pets = await connection('pets').select('*')
  return pets
}

export async function getAllSchedule() {
  const schedule = await connection('schedule').select('*')
  return schedule
}

export async function getAllBookingsByRoomId(roomId: number) {
  const schedule = await connection('bookings')
    .where('room_id', roomId)
    .select('schedule_id as scheduleId')
  return schedule
}

export async function getSchedulesWithAvailabilityByRoom(roomId: number) {
  const schedule = await getAllSchedule()
  const bookings = await getAllBookingsByRoomId(roomId)
  const scheduleWithAvailability = schedule.map((item) => {
    const availability = !bookings.includes(item.id)
    return { id: item.id, timeSlot: item.time_slot, availability }
  })
  return scheduleWithAvailability
}

export async function updatePets(updatedPet: PetsData, id: number) {
  await connection('pets').where('id', id).update(updatedPet).first()
}

export async function deletePet(id: number) {
  await connection('pets').where('id', id).delete()
}

export async function addNewPet(pet: PetsData) {
  const {
    name,
    species,
    breed,
    age,
    food,
    funFact: fun_fact,
    roomId: room_id,
    image,
  } = pet
  console.log('Inserting a new pet: ', pet)
  const newPet = await connection('pets').insert({
    name,
    species,
    breed,
    age,
    food,
    fun_fact,
    room_id,
    image,
  })
  return newPet
}

import { Router } from 'express'

import * as db from '../db/connection.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    console.log('hiii')
    const rooms = await db.getAllRooms()
    res.json({ rooms })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// router.get('/schedule', async (req, res) => {
//   try {
//     const schedule = await db.getAllSchedule()
//     res.json({ schedule })
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: 'Something went wrong' })
//   }
// })

router.post('/pets', async (req, res, next) => {
  try {
    console.log('HELLO')
    const { name, species, breed, age, food, funFact, roomId, image } = req.body
    console.log(req.body)
    const id = await db.addNewPet({
      name,
      species,
      breed,
      age,
      food,
      funFact,
      roomId,
      image,
    })
    const url = `/api/v1/pets/${id}`
    res.setHeader('Pets', url)
    res.status(201).json({ location: url })
  } catch (e) {
    next(e)
  }
})

router.delete('/pets/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    // TODO: DELETE the pet with this matching ID
    await db.deletePet(id)
    res.sendStatus(204)
  } catch (e) {
    next(e)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const roomId = +req.params.id
    const pets = await db.getPetsByRoomId(roomId)
    const scheduleWithAvailability =
      await db.getSchedulesWithAvailabilityByRoom(roomId)
    res.json({ pets, scheduleWithAvailability })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router

router.get('/', async (req, res, next) => {
  try {
    // TODO: Replace this with all of the locations in the database
    const pets = await db.getAllPets()

    res.json({ pets })
    // APIs don't return, just respond ^
  } catch (e) {
    next(e)
  }
})

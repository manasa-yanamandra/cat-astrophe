import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import request from 'supertest'

import connection from '../connection.ts'
import server from '../../server.ts'

beforeAll(async () => {
  await connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

afterAll(async () => {
  await connection.destroy()
})

describe('Getting an Event', () => {
  it('serves events', async () => {
    const res = await request(server).get('/api/v1/rooms/pets')
    console.log(res.body)
    const { pets } = res.body

    expect(pets).toStrictEqual({
      pets: [],
      scheduleWithAvailability: [
        {
          availability: true,
          id: 1,
        },
        {
          availability: true,
          id: 2,
        },
        {
          availability: true,
          id: 3,
        },
        {
          availability: true,
          id: 4,
        },
        {
          availability: true,
          id: 5,
        },
        {
          availability: true,
          id: 6,
        },
        {
          availability: true,
          id: 7,
        },
        {
          availability: true,
          id: 8,
        },
        {
          availability: true,
          id: 9,
        },
        {
          availability: true,
          id: 10,
        },
      ],
    })
  })
})

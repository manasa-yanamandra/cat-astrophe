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
    const res = await request(server).get('/api/v1/rooms')
    console.log(res.body)
    const { rooms }  = res.body

    expect(rooms).toStrictEqual([
      {
        availability: 1,
        id: 1,
        name: 'Room-1',
      },
      {
        availability: 1,
        id: 2,
        name: 'Room-2',
      },
      {
        availability: 1,
        id: 3,
        name: 'Room-3',
      },
    ])
  })
})

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
    const res = await request(server).get('/api/v1/rooms/1')
    console.log(res.body)
    const { pets } = res.body

    expect(pets).toStrictEqual([
      {
        id: 1,
        name: 'Monaka',
        species: 'cat',
        breed: 'Scottish Fold',
        age: 3,
        food: 'tuna',
        fun_fact: 'Monaka is a handsome prince',
        room_id: 1,
        image:
          'https://media.discordapp.net/attachments/1352128205179453470/1352410824353910784/1742510221288.jpg?ex=67ddea3b&is=67dc98bb&hm=04a3243fd9a0c3947445f8d7b6d15a1c16c5d50caa42d3a7e76a26ea6a09e24b&=&format=webp&width=597&height=746',
      },
      {
        id: 2,
        name: 'Kokomi',
        species: 'cat',
        breed: 'Tonkinese',
        age: 5,
        food: 'salmon',
        fun_fact: 'Her favourite past-time is pwning noobs.',
        room_id: 1,
        image:
          'https://media.discordapp.net/attachments/1352128205179453470/1352410823301140560/1742510194822.jpg?ex=67ddea3a&is=67dc98ba&hm=70ec0dd988286ce46c16021100e409213f833868d61e0030182a4bc290a645c1&=&format=webp&width=559&height=746',
      },
      {
        id: 3,
        name: 'Guts',
        species: 'cat',
        breed: 'Russian Blue',
        age: 5,
        food: 'bikkies',
        fun_fact: 'After you trim his claws, they are sharp again the same day',
        room_id: 1,
        image:
          'https://media.discordapp.net/attachments/1352128205179453470/1352399133813506130/image.jpg?ex=67dddf57&is=67dc8dd7&hm=778597dd007ddc2cf1c74153939d15759131329c3d0c9ba3eb57c4e0c62695e5&=&format=webp&width=637&height=849',
      },
      {
        id: 4,
        name: 'Bobby',
        species: 'cat',
        breed: 'Bob cat',
        age: 4,
        food: 'raw meat',
        fun_fact: "I don't think this cat should be in a cat cafe",
        room_id: 1,
        image:
          'https://www.reconnectwithnature.org/getmedia/67fd5873-9c1b-4f73-b87c-ee0fb0482992/Bobcat-3-Predator-bobcat.jpg?width=1500&height=1000&ext=.jpg',
      },
    ])
  })
})

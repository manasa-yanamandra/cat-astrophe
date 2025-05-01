import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Rooms } from '../../models/rooms'
import { Pets } from '../../models/pets'

// export function getFruits(): Promise<string[]> {
//   return request.get(rootUrl + '/fruits').then((res) => {
//     return res.body.fruits
//   })
// }

export function useRooms() {
  return useQuery({
    queryKey: ['rooms'],
    queryFn: async () => {
      const res = await request.get('/api/v1/rooms')
      if (res.ok) {
        console.log(res.body)
        console.log('hello')
        return res.body as { rooms: Rooms[] }
      }

      throw new Error(res.text)
    },
  })
}
export function useRoomsById(id: number) {
  return useQuery({
    queryKey: ['rooms', id],
    queryFn: async () => {
      const res = await request.get(`/api/v1/rooms/${id}`)
      console.log('byid', res)
      return res.body as {
        pets: Pets[]
        scheduleWithAvailability: {
          id: number
          timeSlot: string
          availability: boolean
        }[]
      }
    },
  })
}

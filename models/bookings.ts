export interface BookingsData {
  date: string
  petsId: number
  customerId: number
  roomId: number
  scheduleId: number
}

export interface Bookings extends BookingsData {
  id: number
}

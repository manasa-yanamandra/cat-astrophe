export async function seed(knex) {
  // Deletes ALL existing entries
  // await knex('bookings').del()
  await knex('bookings').insert([
    {
      id: 1,
      date: 'Monday',
      pets_id: 1,
      customer_id: 1,
      room_id: 1,
      schedule_id: 1,
    },
    {
      id: 2,
      date: 'Tuesday',
      pets_id: 3,
      customer_id: 5,
      room_id: 2,
      schedule_id: 2,
    },
    {
      id: 3,
      date: 'Monday',
      pets_id: 2,
      customer_id: 6,
      room_id: 3,
      schedule_id: 5,
    },
    {
      id: 4,
      date: 'Wednesday',
      pets_id: 6,
      customer_id: 4,
      room_id: 1,
      schedule_id: 4,
    },
    {
      id: 5,
      date: 'Tuesday',
      pets_id: 9,
      customer_id: 7,
      room_id: 3,
      schedule_id: 2,
    },
  ])
}

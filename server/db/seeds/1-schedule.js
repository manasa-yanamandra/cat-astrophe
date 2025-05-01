/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('schedule').del()
  await knex('schedule').insert([
    { id: 1, time_slot: '8:00' },
    { id: 2, time_slot: '9:00' },
    { id: 3, time_slot: '10:00' },
    { id: 4, time_slot: '11:00' },
    { id: 5, time_slot: '12:00' },
    { id: 6, time_slot: '13:00' },
    { id: 7, time_slot: '14:00' },
    { id: 8, time_slot: '15:00' },
    { id: 9, time_slot: '16:00' },
    { id: 10, time_slot: '17:00' },
  ])
}

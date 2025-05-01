export async function seed(knex) {
  // Deletes ALL existing entries
  // await knex('rooms').del()
  await knex('rooms').insert([
    { id: 1, name: 'Room-1', availability: true },
    { id: 2, name: 'Room-2', availability: true },
    { id: 3, name: 'Room-3', availability: true },
  ])
}

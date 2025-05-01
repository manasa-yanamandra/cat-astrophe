export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('customers').del()
  await knex('customers').insert([
    {
      id: 1,
      name: 'Daph',
      email: 'daph@gmail.com',
      phone: '0211111111',
    },
    {
      id: 2,
      name: 'Jared',
      email: 'jared@gmail.com',
      phone: '0221112156',
    },
    {
      id: 3,
      name: 'Pheonix',
      email: 'pheonix@gmail.com',
      phone: '0231112167',
    },
    {
      id: 4,
      name: 'Manasa',
      email: 'manasa@gmail.com',
      phone: '0241112178',
    },
    {
      id: 5,
      name: 'Calum',
      email: 'calum@gmail.com',
      phone: '0251112145',
    },
    {
      id: 6,
      name: 'Mariya',
      email: 'mariya@gmail.com',
      phone: '0261112134',
    },
    {
      id: 7,
      name: 'Gerry',
      email: 'gerry@gmail.com',
      phone: '02711121823',
    },
    {
      id: 8,
      name: 'Taine',
      email: 'taine@gmail.com',
      phone: '0281212112',
    },
    {
      id: 9,
      name: 'Daisy',
      email: 'daisy@gmail.com',
      phone: '0291312114',
    },
    {
      id: 10,
      name: 'Hannah',
      email: 'hannah@gmail.com',
      phone: '0215112167',
    },
  ])
}

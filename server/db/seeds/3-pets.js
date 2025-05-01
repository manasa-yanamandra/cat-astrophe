export async function seed(knex) {
  // Deletes ALL existing entries
  // await knex('pets').del()
  await knex('pets').insert([
    {
      id: 1,
      name: 'Monaka',
      species: 'cat',
      breed: 'Scottish Fold',
      age: '3',
      food: 'tuna',
      fun_fact: 'Monaka is a handsome prince',
      room_id: 1,
      image: 'https://media.discordapp.net/attachments/1352128205179453470/1352410824353910784/1742510221288.jpg?ex=67ddea3b&is=67dc98bb&hm=04a3243fd9a0c3947445f8d7b6d15a1c16c5d50caa42d3a7e76a26ea6a09e24b&=&format=webp&width=597&height=746'
    },
    {
      id: 2,
      name: 'Kokomi',
      species: 'cat',
      breed: 'Tonkinese',
      age: '5',
      food: 'salmon',
      fun_fact: 'Her favourite past-time is pwning noobs.',
      room_id: 1,
      image: 'https://media.discordapp.net/attachments/1352128205179453470/1352410823301140560/1742510194822.jpg?ex=67ddea3a&is=67dc98ba&hm=70ec0dd988286ce46c16021100e409213f833868d61e0030182a4bc290a645c1&=&format=webp&width=559&height=746'
    },
    {
      id: 3,
      name: 'Guts',
      species: 'cat',
      breed: 'Russian Blue',
      age: '5',
      food: 'bikkies',
      fun_fact: 'After you trim his claws, they are sharp again the same day',
      room_id: 1,
      image: 'https://media.discordapp.net/attachments/1352128205179453470/1352399133813506130/image.jpg?ex=67dddf57&is=67dc8dd7&hm=778597dd007ddc2cf1c74153939d15759131329c3d0c9ba3eb57c4e0c62695e5&=&format=webp&width=637&height=849'
    },
    {
      id: 4,
      name: 'Bobby',
      species: 'cat',
      breed: 'Bob cat',
      age: '4',
      food: 'raw meat',
      fun_fact: `I don't think this cat should be in a cat cafe`,
      room_id: 1,
      image: 'https://www.reconnectwithnature.org/getmedia/67fd5873-9c1b-4f73-b87c-ee0fb0482992/Bobcat-3-Predator-bobcat.jpg?width=1500&height=1000&ext=.jpg'
    },
    {
      id: 5,
      name: 'Summer',
      species: 'dog',
      breed: 'Border Collie',
      age: '3',
      food: 'canned fish',
      fun_fact:
        'Her favourite past-time is playing tug of war. And she thinks she is human and we are her pets.',
      room_id: 3,
      image: 'https://image.petmd.com/files/styles/978x550/public/2024-03/border-collie-2.jpg'
    },
    {
      id: 6,
      name: 'Coco',
      species: 'cat',
      breed: 'Ragdoll',
      age: '3',
      food: 'fancy feast',
      fun_fact: 'Coco thinks she is a princess and acts accordingly',
      room_id: 2,
      image: 'https://moderncat.com/wp-content/uploads/2013/09/Ragdoll-Header_bigstock-408978611_Rawlik-940x640.jpg'
    },
    {
      id: 7,
      name: 'Biscuit',
      species: 'cat',
      breed: 'Maine coon',
      age: '8',
      food: 'purina biscuits',
      fun_fact: 'Biscuit is the same size if not bigger than some of the dogs in the cafe',
      room_id: 2,
      image: 'https://sustainablecats.com/wp-content/uploads/2024/05/MAine-Coon-Giant.jpg'
    },
    {
      id: 8,
      name: 'Tommy',
      species: 'dog',
      breed: 'Dachshund',
      age: '2',
      food: 'any wet food',
      fun_fact: 'Tommy loves belly rubs and he has a whole lot of belly to rub',
      room_id: 3,
      image: 'https://cdn.britannica.com/13/234213-050-45F47984/dachshund-dog.jpg'
    },
    {
      id: 9,
      name: 'Indie',
      species: 'dog',
      breed: 'French Bulldog',
      age: '9',
      food: 'Hills prescription diet',
      fun_fact: 'She has gone through extensive training and is indeed, a good girl',
      room_id: 3,
      image: 'https://media.discordapp.net/attachments/1352128205179453470/1352400791432073328/image.jpg?ex=67dde0e3&is=67dc8f63&hm=118f5b6ac7245495e48d04f704fbd4e0a78307d47fa7fc2d4e15e206c5066b13&=&format=webp&width=1133&height=850'
    },
    {
      id: 10,
      name: 'Ziggy',
      species: 'cat',
      breed: 'Abyssinian',
      age: '4',
      food: 'anything, not fussy',
      fun_fact: 'Ziggy has two left feet and no co-ordination',
      room_id: 2,
      image: 'https://clinicalaveterinaria.it/wp-content/uploads/2024/12/Il-gatto-Abissino.jpg'
    },
    {
      id: 11,
      name: 'Pepper',
      species: 'cat',
      breed: 'British Shorthair',
      age: '5',
      food: 'chicken',
      fun_fact: 'Pepper only eats chicken and it HAS to be hand fed',
      room_id: 2,
      image: 'https://www.thesprucepets.com/thmb/2HF5pGwbA1_74qlubXRyEM_xxlk=/2121x0/filters:no_upscale():strip_icc()/GettyImages-1319774380-c3da91f9259a47e0966007f8e10690ba.jpg'
    },
    {
      id: 12,
      name: 'Teifi',
      species: 'dog',
      breed: 'Corgi',
      age: '6',
      food: 'canned chicken',
      fun_fact: 'Teifi is a thicc boi',
      room_id: 3,
      image: 'https://cdn.shopify.com/s/files/1/0035/1984/0325/files/Welchcorgipembroke_1024x1024.jpg?v=1655987017'
    },
  ])
}

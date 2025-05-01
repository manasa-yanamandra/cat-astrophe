export interface PetsData {
  name: string
  species: string
  breed: string
  age: number
  food: string
  funFact: string
  roomId: number
  image: string
}

export interface Pets extends PetsData {
  id: number
}

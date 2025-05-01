export interface CustomerData {
  name: string,
  email: string,
  phone: string
}

export interface Customer extends CustomerData {
  id: number,
}
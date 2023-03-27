export type Restaurant = {
  id: number
  name: string
  cuisine: string
  address: string
  // eslint-disable-next-line @typescript-eslint/naming-convention
  image_url: string
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const MOCK_RESTAURANTS: Restaurant[] = [
  {
    id: 1,
    name: 'La Taqueria',
    cuisine: 'Mexican',
    address: '123 Main St, Anytown USA',
    image_url: 'https://source.unsplash.com/random/250x250/?restaurant',
  },
  {
    id: 2,
    name: 'Sushi Bar',
    cuisine: 'Japanese',
    address: '456 Elm St, Anytown USA',
    image_url: 'https://source.unsplash.com/random/350x350/?restaurant',
  },
  {
    id: 3,
    name: "Mama Mia's Italian Restaurant",
    cuisine: 'Italian',
    address: '789 Oak St, Anytown USA',
    image_url: 'https://source.unsplash.com/random/450x450/?restaurant',
  },
  {
    id: 4,
    name: 'The Green Garden',
    cuisine: 'Vegetarian',
    address: '111 Pine St, Anytown USA',
    image_url: 'https://source.unsplash.com/random/550x550/?restaurant',
  },
  {
    id: 5,
    name: 'Burgers & Fries',
    cuisine: 'American',
    address: '555 Cherry Ave, Anytown USA',
    image_url: 'https://source.unsplash.com/random/650x650/?restaurant',
  },
  {
    id: 6,
    name: 'Curry House',
    cuisine: 'Indian',
    address: '222 Maple St, Anytown USA',
    image_url: 'https://source.unsplash.com/random/750x750/?restaurant',
  },
  {
    id: 7,
    name: 'Pizza Place',
    cuisine: 'Italian',
    address: '777 Walnut St, Anytown USA',
    image_url: 'https://source.unsplash.com/random/850x850/?restaurant',
  },
]

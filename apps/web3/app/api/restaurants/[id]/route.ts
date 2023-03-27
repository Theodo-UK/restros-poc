import { NextResponse } from 'next/server'
import { MOCK_RESTAURANTS } from '../../data'
import type { Restaurant } from '../../data'

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const restaurantId = params?.id

  const getRestaurantById = (id: number) => {
    return MOCK_RESTAURANTS.find((restaurant: Restaurant) => restaurant.id === id)
  }

  const foundRestaurant = getRestaurantById(parseInt(restaurantId))

  if (!foundRestaurant) {
    return NextResponse.json({ message: 'restaurant not found' })
  }

  return NextResponse.json(foundRestaurant)
}

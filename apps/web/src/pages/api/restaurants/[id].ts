import type { NextApiRequest, NextApiResponse } from 'next'
import { MOCK_RESTAURANTS } from '@/utils/restaurants'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id: restaurantId } = req.query

  const getRestaurantById = (id: number) => {
    return MOCK_RESTAURANTS.find(restaurant => restaurant.id === id)
  }

  if (restaurantId) {
    const foundRestaurant = getRestaurantById(parseInt(restaurantId as string))
    res.status(200).json(foundRestaurant)
  } else {
    res.status(400).json({ message: 'Restaurant ID invalid' })
  }
}

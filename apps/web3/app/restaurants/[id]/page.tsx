import axios from 'axios'
import React from 'react'
import { Restaurant } from '../../api/data'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

const getRestaurantDetails = async (restaurantId: string) => {
  try {
    const { data: restaurant } = await axios.get(
      `http://localhost:3002/api/restaurants/${restaurantId}`
    )
    return restaurant
  } catch (error) {
    console.log(error)
  }
}

export default async function DetailsPage({ params }: { params: { id: string } }) {
  const restaurant: Restaurant = await getRestaurantDetails(params?.id as string)

  if (!restaurant) {
    return null
  }

  return (
    <div className="flex justify-center gap-5 p-16">
      <div className="flex w-1/3 flex-col gap-5">
        <h1 className="text-3xl">{restaurant.name}</h1>
        <p>Cuisine: {restaurant.cuisine}</p>
        <p>Address: {restaurant.address}</p>
        <p>
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem
        </p>
      </div>
      <div className="overflow-hidden rounded-lg">
        <Image src={restaurant.image_url} alt={'candles'} width={500} height={500} />
      </div>
    </div>
  )
}

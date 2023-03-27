import axios from 'axios'
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import React from 'react'
import { DetailsPage } from '@/features/home/pages'
import type { Restaurant } from '@/utils/restaurants'

export default function DemoRoute(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return <DetailsPage restaurant={props.data} />
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const restaurantId = params?.id
  const { data } = await axios.get(`http://localhost:3003/api/restaurants/${restaurantId}`)

  return { props: { data }, revalidate: 10 }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: restaurants } = await axios.get(`http://localhost:3003/api/restaurants`)
  const topFiveRestaurants = restaurants.slice(0, 5)

  const paths = topFiveRestaurants.map((restaurant: Restaurant) => ({
    params: {
      id: restaurant.id.toString(),
    },
  }))

  return { paths, fallback: 'blocking' }
}

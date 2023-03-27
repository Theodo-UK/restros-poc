import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import React from 'react'
import { DetailsPage } from '@/features/home/pages'
import type { Restaurant } from '@/utils/restaurants'
import { MOCK_RESTAURANTS } from '@/utils/restaurants'

export default function DemoRoute(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return <DetailsPage restaurant={props.data} />
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const restaurantId = params?.id

  // Normally would write an asynchronous API request, but since there is no live DB and web server, a fake DB query is written for demonstration purposes
  const data: Restaurant | undefined = MOCK_RESTAURANTS.find(restaurant => {
    return restaurant.id === parseInt(restaurantId as string)
  })

  return { props: { data }, revalidate: 10 }
}

export const getStaticPaths: GetStaticPaths = () => {
  const topFiveRestaurants = MOCK_RESTAURANTS.slice(0, 5)

  const paths = topFiveRestaurants.map((restaurant: Restaurant) => ({
    params: {
      id: restaurant.id.toString(),
    },
  }))

  return { paths, fallback: 'blocking' }
}

import axios from 'axios'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React from 'react'
import { DetailsPage } from '@/features/home/pages'

export default function DemoRoute(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <DetailsPage restaurant={props.data} />
}

export const getServerSideProps: GetServerSideProps = async context => {
  const restaurantId = context.params?.id
  const { data } = await axios.get(`http://localhost:3000/api/restaurants/${restaurantId}`)

  return { props: { data } }
}

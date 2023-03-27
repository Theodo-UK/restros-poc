import axios from 'axios'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import React from 'react'
import { HomePage } from '@/features/home/pages'

export default function DemoRoute(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return <HomePage restaurant={props.data} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(`http://localhost:3003/api/restaurants`)

  return { props: { data }, revalidate: 10 }
}

import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import React from 'react'
import { HomePage } from '@/features/home/pages'
import { MOCK_RESTAURANTS } from '@/utils/restaurants'

export default function DemoRoute(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return <HomePage restaurant={props.data} />
}

export const getStaticProps: GetStaticProps = async () => {
  // Normally would write an asynchronous API request, but since there is no live DB and web server, a fake DB query is written for demonstration purposes
  const data = MOCK_RESTAURANTS

  return { props: { data }, revalidate: 10 }
}

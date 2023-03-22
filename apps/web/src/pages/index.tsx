import axios from 'axios'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { HomePage } from '@/features/home/pages'

export default function DemoRoute(_props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <HomePage {..._props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api/restaurants')

  return { props: { data } }
}

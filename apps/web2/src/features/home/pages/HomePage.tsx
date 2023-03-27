import { useRouter } from 'next/router'
import axios from 'axios'
import { NextSeo } from 'next-seo'
import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { Card } from '@/components/Card'
import { MainLayout } from '@/components/layout/MainLayout'
import type { Restaurant } from '@/pages/api/restaurants/data'

export const HomePage: FC = () => {
  const router = useRouter()
  const [restaurants, setRestaurants] = useState<Restaurant[]>()

  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get('http://localhost:3001/api/restaurants')

      setRestaurants(data)
    })()
  }, [])

  return (
    <>
      <NextSeo
        title="Restros"
        description="Web-app nextjs monorepo example, https://github.com/wayofdev/nextjs-monorepo-example"
      />
      <MainLayout>
        <h1 className="my-6 mx-auto text-center text-2xl font-bold">Restros US</h1>
        {restaurants?.map(restaurant => (
          <Card
            key={restaurant.name}
            title={restaurant.name}
            imageSrc={restaurant.image_url}
            desc={restaurant.address}
            onClick={() => router.push(`/restaurant/${restaurant.id}`)}
          />
        ))}
      </MainLayout>
    </>
  )
}

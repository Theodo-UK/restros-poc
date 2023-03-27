import type { InferGetServerSidePropsType } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import React from 'react'
import { Card } from '@/components/Card'
import { MainLayout } from '@/components/layout/MainLayout'
import type { getServerSideProps } from '@/pages/index'
import type { Restaurant } from '@/utils/restaurants'

export const HomePage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter()

  return (
    <>
      <NextSeo
        title="Restros"
        description="Web-app nextjs monorepo example, https://github.com/wayofdev/nextjs-monorepo-example"
      />
      <MainLayout>
        <h1 className="my-6 mx-auto text-center text-2xl font-bold">Restros UK</h1>
        {props.data.map((restaurant: Restaurant) => (
          <Card
            key={restaurant.name}
            title={restaurant.name}
            imageSrc={restaurant.image_url}
            desc={restaurant.address}
            onClick={() => {
              router.push(`restaurants/${restaurant.id}`)
            }}
            testId={restaurant.name}
          />
        ))}
      </MainLayout>
    </>
  )
}

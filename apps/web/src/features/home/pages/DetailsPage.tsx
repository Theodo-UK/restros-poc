import Image from 'next/image'
import { NextSeo } from 'next-seo'
import type { FC } from 'react'
import React from 'react'
import { MainLayout } from '@/components/layout/MainLayout'
import type { Restaurant } from '@/utils/restaurants'

type DetailsPageProps = {
  restaurant: Restaurant
}

export const DetailsPage: FC<DetailsPageProps> = ({ restaurant }) => {
  return (
    <>
      <NextSeo
        title="Restros"
        description="Web-app nextjs monorepo example, https://github.com/wayofdev/nextjs-monorepo-example"
      />
      <MainLayout>
        <div className="flex justify-center gap-5 p-16">
          <div className="flex w-1/3 flex-col gap-5">
            <h1 className="text-3xl">{restaurant.name}</h1>
            <p>Cuisine: {restaurant.cuisine}</p>
            <p>Address: {restaurant.address}</p>
            <p>
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem
            </p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image src={restaurant.image_url} alt={'candles'} width={500} height={500} />
          </div>
        </div>
      </MainLayout>
    </>
  )
}

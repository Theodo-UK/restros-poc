import { event } from '@wayofdev/facebook-pixel/src/lib/fpixel'
import { Banner } from '@wayofdev/ui/src/base/banner/Banner'
import { useTranslation } from 'next-i18next'
import { NextSeo } from 'next-seo'
import type { FC } from 'react'
import { homeConfig } from '../home.config'
import restaurants from './data.json'
import { Card } from '@/components/Card'
import { MainLayout } from '@/components/layout/MainLayout'
import { MainNav } from '@/components/nav/MainNav'

export const HomePage: FC = () => {
  const { t } = useTranslation(homeConfig.i18nNamespaces)
  const handleClick = () => {
    event('Purchase', { value: 10, currency: 'USD', test_event_code: 'TEST24819' })
  }

  return (
    <>
      <NextSeo
        title={t('demo:page.title')}
        description="Web-app nextjs monorepo example, https://github.com/wayofdev/nextjs-monorepo-example"
      />
      <MainLayout>
        <Banner message="Something big will happen soon!" />
        <MainNav />
        <h1 className="my-6 mx-auto text-center text-2xl font-bold">Restros US</h1>
        {restaurants.map(restaurant => (
          <Card
            key={restaurant.name}
            title={restaurant.name}
            imageSrc={restaurant.image_url}
            desc={restaurant.address}
            onClick={() => {}}
          />
        ))}
      </MainLayout>
    </>
  )
}

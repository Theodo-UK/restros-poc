import { Banner } from '@wayofdev/ui/src/base/banner/Banner'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { NextSeo } from 'next-seo'
import type { FC } from 'react'
import { homeConfig } from '../home.config'
import { MainLayout } from '@/components/layout/MainLayout'
import { MainNav } from '@/components/nav/MainNav'

export const DetailsPage: FC = () => {
  const { t } = useTranslation(homeConfig.i18nNamespaces)

  return (
    <>
      <NextSeo
        title={t('demo:page.title')}
        description="Web-app nextjs monorepo example, https://github.com/wayofdev/nextjs-monorepo-example"
      />
      <MainLayout>
        <Banner message="Something big will happen soon!" />
        <MainNav />
        <div className="flex flex-col items-center justify-center gap-5 p-16">
          <div className="flex w-1/2 flex-col gap-5">
            <h1 className="text-3xl">Restaurant with Swans</h1>
            <p>
              Description Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard the leap into electronic typesetting,
              remaining essentially unchanged. Description Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the industry's standard the
              leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem. Description Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's standard
              the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="mt-5 h-1/2 w-1/2 overflow-hidden rounded-lg">
            <Image src="/images/swan.jpg" alt={'candles'} width={900} height={900} />
          </div>
        </div>
      </MainLayout>
    </>
  )
}

import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { NotFoundPage } from '@/features/system/pages'

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { locale = 'en' } = context

  return {
    props: {
      locale: locale,
    },
  }
}

export default function Custom404(_props: InferGetStaticPropsType<typeof getStaticProps>) {
  return <NotFoundPage />
}

import Head from 'next/head'
import type { FC } from 'react'

type Properties = {
  title?: string
  children?: never
}

export const NotFoundPage: FC<Properties> = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-white">
        <h1 data-testid="not-found-title" className="text-5xl text-black md:text-4xl lg:text-5xl">
          Not Found
        </h1>
        <p className="mt-5 text-center text-xl no-underline hover:underline">
          <a href={'/'}>Back home</a>
        </p>
      </div>
    </>
  )
}

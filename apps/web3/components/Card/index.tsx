import Image from 'next/image'
import type { FC } from 'react'
import { CardButton } from './CardButton'

interface Props {
  id: number
  title: string
  imageSrc: string
  desc: string
}

export const Card: FC<Props> = ({ id, title, imageSrc, desc }) => {
  return (
    <div className="m-3 mx-auto w-6/12 rounded-md border border-gray-800 bg-white px-4 py-3">
      <div className="flex items-center">
        <Image
          src={imageSrc}
          alt={title}
          height={200}
          width={200}
          className="h-32 w-32 object-cover"
        />
        <div className="ml-4">
          <h4 className="mb-2 text-lg">{title}</h4>
          <p className="mb-2 text-base">{desc}</p>
          <CardButton restaurantId={id} />
        </div>
      </div>
    </div>
  )
}

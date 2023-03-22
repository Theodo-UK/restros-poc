import { Button } from '@wayofdev/ui/src/base/button/Button'
import Image from 'next/image'
import type { FC } from 'react'

interface Props {
  title: string
  imageSrc: string
  desc: string
  onClick: () => void
}

export const Card: FC<Props> = ({ title, imageSrc, desc, onClick }) => {
  return (
    <div className="m-3 mx-auto w-6/12 rounded-md border border-gray-800 bg-white px-4 py-3">
      <div className="flex flex-col items-center">
        <div className="ml-4 mb-4 flex flex-col items-center">
          <h4 className="mb-2 text-lg">{title}</h4>
          <p className="mb-2 text-base">{desc}</p>
          <Button onClick={onClick} label="Details">
            Details
          </Button>
        </div>
        <Image
          src={imageSrc}
          alt={title}
          height={350}
          width={350}
          className="h-36 w-36 object-cover"
        />
      </div>
    </div>
  )
}

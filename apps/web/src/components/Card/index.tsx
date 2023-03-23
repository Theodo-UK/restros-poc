import { Button } from '@wayofdev/ui/src/base/button/Button'
import Image from 'next/image'
import type { FC } from 'react'

interface Props {
  title: string
  imageSrc: string
  desc: string
  onClick: () => void
  testId?: string
}

export const Card: FC<Props> = ({ title, imageSrc, desc, onClick, testId }) => {
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
          <Button testId={testId} onClick={onClick} label="Details">
            Details
          </Button>
        </div>
      </div>
    </div>
  )
}

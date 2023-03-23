'use client'
import { useRouter } from 'next/navigation'

interface Props {
  restaurantId: number
}

export const CardButton = ({ restaurantId }: Props) => {
  const router = useRouter()

  return (
    <button
      className="inline-flex items-center border focus:outline-none font-medium shadow-sm border-transparent bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md px-4 py-2 text-sm"
      onClick={() => router.push(`/restaurants/${restaurantId}`)}
    >
      Details
    </button>
  )
}

import type { NextApiRequest, NextApiResponse } from 'next'

import type { Restaurant } from '@/utils/restaurants'
import { MOCK_RESTAURANTS } from '@/utils/restaurants'

export default function handler(_req: NextApiRequest, res: NextApiResponse<Restaurant[]>) {
  // Get data from your database
  res.status(200).json(MOCK_RESTAURANTS)
}

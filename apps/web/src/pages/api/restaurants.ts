import type { NextApiRequest, NextApiResponse } from 'next'

import type { Restaurant } from './data'
import { MOCK_RESTAURANTS as restaurants } from './data'

export default function handler(_req: NextApiRequest, res: NextApiResponse<Restaurant[]>) {
  // Get data from your database
  res.status(200).json(restaurants)
}

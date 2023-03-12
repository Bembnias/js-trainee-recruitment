import type { NextApiRequest, NextApiResponse } from 'next'
import { animals } from '../../../../animals'
import { TAnimals } from '@/types/animals.type'

export default function handler(req: NextApiRequest, res: NextApiResponse<TAnimals>) {
  res.status(200).json(animals)
}

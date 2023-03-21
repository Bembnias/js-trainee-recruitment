import type { NextApiRequest, NextApiResponse } from 'next'
import { animals } from '../../../../animals'
import { TAnimal } from '@/types/animals.type'

export default function handler(req: NextApiRequest, res: NextApiResponse<TAnimal[]>) {
  res.status(200).json(animals)
}

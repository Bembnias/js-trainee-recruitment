import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <p className={inter.className}>Here we go</p>
    </div>
  )
}

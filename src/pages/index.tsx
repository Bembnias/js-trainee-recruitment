import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import styles from '@/styles/Home.module.scss'
import Head from 'next/head'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { server } from '@/config'
import { TAnimal } from '@/types/animals.type'

import Sidebar from '@/components/Sidebar/Sidebar'
import Sections from '@/components/Sections/Sections'

export default function Home({ animals }: InferGetStaticPropsType<typeof getStaticProps>) {
  const animalNames = animals.map((animal) => animal.name)

  return (
    <div className={`${styles.homepageWrapper} ${inter.className}`}>
      <Head>
        <title>Trainee recruitment</title>
      </Head>

      <Sidebar animalNames={animalNames} />
      <Sections animals={animals} />
    </div>
  )
}

export const getStaticProps: GetStaticProps<{ animals: TAnimal[] }> = async (context) => {
  const res = await fetch(`${server}/api/animals`)
  const animals = await res.json()

  return {
    props: {
      animals,
    },
  }
}

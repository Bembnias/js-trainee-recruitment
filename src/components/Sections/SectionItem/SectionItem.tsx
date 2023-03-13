import { TAnimal } from '@/types/animals.type'
import Image from 'next/image'
import styles from './SectionItem.module.scss'

interface ISectionItemProps {
  animal: TAnimal
}

const SectionItem = ({ animal }: ISectionItemProps) => {
  const slowoIndex = animal.description.indexOf(animal.highlightedWord)
  const przedSlowem = animal.description.substring(0, slowoIndex)
  const poSlowie = animal.description.substring(slowoIndex + animal.highlightedWord.length)

  return (
    <article>
      <h5 className={styles.name}>{animal.name}</h5>
      <p className={styles.description}>
        {przedSlowem}
        <span className={`${styles.description} ${styles.descriptionHighlighted}`}>
          {animal.highlightedWord}
        </span>
        {poSlowie}
      </p>
      <Image
        className={styles.image}
        src={animal.imgUrl}
        alt={animal.description}
        width={817}
        height={431}
      />
    </article>
  )
}

export default SectionItem

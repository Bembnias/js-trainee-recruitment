import { TAnimal } from '@/types/animals.type'
import Image from 'next/image'
import styles from './SectionItem.module.scss'

interface ISectionItemProps {
  animal: TAnimal
}

const SectionItem = ({ animal }: ISectionItemProps) => {
  const highlightedWordIndex = animal.description.indexOf(animal.highlightedWord)
  const beforeHighlightedWord = animal.description.substring(0, highlightedWordIndex)
  const afterHighlightedWord = animal.description.substring(
    highlightedWordIndex + animal.highlightedWord.length
  )

  return (
    <article id={animal.id} className={styles.sectionItem}>
      <h5 className={styles.name}>{animal.name}</h5>
      <p className={styles.description}>
        {beforeHighlightedWord}
        <span className={`${styles.description} ${styles.descriptionHighlighted}`}>
          {animal.highlightedWord}
        </span>
        {afterHighlightedWord}
      </p>
      <Image
        className={styles.image}
        src={animal.imgUrl}
        alt={`${animal.name} - ${animal.description}`}
        width={817}
        height={431}
      />
    </article>
  )
}

export default SectionItem

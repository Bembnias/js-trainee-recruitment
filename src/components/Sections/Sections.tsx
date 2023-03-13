import { TAnimal } from '@/types/animals.type'
import SectionItem from './SectionItem/SectionItem'
import styles from './Sections.module.scss'

interface ISectionsProps {
  animals: TAnimal[]
}

const Sections = ({ animals }: ISectionsProps) => {
  return (
    <section className={styles.sectionsWrapper}>
      {animals.map((animal) => (
        <SectionItem key={animal.id} animal={animal} />
      ))}
    </section>
  )
}

export default Sections

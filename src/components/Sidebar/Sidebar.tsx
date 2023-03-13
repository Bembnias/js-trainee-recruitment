import styles from './Sidebar.module.scss'
import { TAnimal } from '@/types/animals.type'
// UUID Just to make sure that IDs are unique
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-scroll'

interface ISectionsProps {
  animals: TAnimal[]
}

const Sidebar = ({ animals }: ISectionsProps) => {
  return (
    <nav className={styles.sideBar}>
      <h3 className={styles.header}>Your new gang</h3>
      <ul className={styles.menuList}>
        {animals.map((animal) => (
          <Link
            key={`${animal.id}${uuidv4()}`}
            className={styles.menuListItem}
            activeClass={styles.menuListItemActive}
            smooth
            spy
            offset={-85}
            duration={350}
            delay={150}
            to={animal.id}
            isDynamic={true}
            as={'li'}
          >
            {animal.name}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar

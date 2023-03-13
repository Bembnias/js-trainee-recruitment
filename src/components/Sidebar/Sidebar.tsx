import styles from './Sidebar.module.scss'

interface ISidebarProps {
  animalNames: string[]
}

const Sidebar = ({ animalNames }: ISidebarProps) => {
  return (
    <nav className={styles.sideBar}>
      <h3 className={styles.header}>Your new gang</h3>
      <ul className={styles.menuList}>
        {animalNames.map((name) =>
          name === 'Polar Bear' ? (
            <li className={`${styles.menuListItem} ${styles.menuListItemActive}`}>{name}</li>
          ) : (
            <li className={styles.menuListItem}>{name}</li>
          )
        )}
      </ul>
    </nav>
  )
}

export default Sidebar

import Link from 'next/link'
import styles from './mainmenu.module.scss'

export const MainMenu = ({ items }) => {
  return (
    <div className={`${styles.navigation} z-10`}>
      <div className={`${styles.inner_navigation} z-10`}>
        {(items || []).map((item) => {
          return (
            <Link
              className={styles.href}
              href={
                item.url ? `${item.url}` : `${item.page}`
              }
            >
              {item.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

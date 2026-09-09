import styles from './NavBar.module.css'
import logo from '../../assets/doses-logo.svg'
import { useLocation, useNavigate } from 'react-router'

export function NavBar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const switchPage = (path) => {
    navigate(path)
  }

  return (
    <>
      <nav className={styles.navbar}>
        <img src={logo} className={styles.logo}/>
        <ul className={styles.navLinks}>
          <li 
            className={pathname === '/' ? styles.active : ''} 
            onClick={() => switchPage('/')}>
            Home
          </li>
          <li 
            className={pathname === '/about' ? styles.active : ''} 
            onClick={() => switchPage('/about')}>
            About
          </li>
        </ul>
      </nav>
    </>
  )
}
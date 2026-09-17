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
        <img src={logo} className={styles.logo} onClick={() => switchPage('/')}/>
        <ul className={styles.navLinks}>
          <li 
            className={pathname === '/' ? styles.active : ''} 
            onClick={() => switchPage('/')}>
            Home
          </li>
          <li 
            className={pathname === '/resources' ? styles.active : ''} 
            onClick={() => switchPage('/resources')}>
            Recursos
          </li>
          <li 
            className={pathname === '/about' ? styles.active : ''} 
            onClick={() => switchPage('/about')}>
            Sobre
          </li>
        </ul>
      </nav>
    </>
  )
}
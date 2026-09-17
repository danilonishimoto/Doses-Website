import { NavBar } from "../components/NavBar/NavBar"
import { Outlet } from "react-router"
import { Footer } from "../components/Footer/Footer"
import styles from './AppLayout.module.css'

export function AppLayout() {
    return (
        <div className={styles.layout}>
            <NavBar/>
            <div className={styles.content}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}
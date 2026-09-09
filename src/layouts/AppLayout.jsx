import { NavBar } from "../components/NavBar/NavBar"
import { Outlet } from "react-router"

export function AppLayout() {
    return (
        <div>
            <NavBar/>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <NavLink className={styles.link} exact="true" to='/'>Home page</NavLink>
            <NavLink className={styles.link} to='/movies'>Movies</NavLink>
        </nav>
    )
}
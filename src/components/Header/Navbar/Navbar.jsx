import {Link} from "react-router-dom";
import React from "react";
import styles from './Navbar.module.scss'

const Navbar = () => {
    return (

        <nav className={styles.row}>

            <Link to="/">Старт</Link>
            <Link to="/playgroundslist">Площадки</Link>
            <Link to="/coacheslist">Тренеры</Link>
            <Link to="/tournaments">Турниры</Link>
            <Link to="/test">Test</Link>

        </nav>

    )
}

export default Navbar

import {Link} from "react-router-dom";
import React from "react";
import styles from './Navbar.module.scss'

const Navbar = () => {
    return (

        <div className={styles.row}>
            <Link to="/">Старт</Link>
            <Link to="/playgroundslist">Площадки</Link>
            <Link to="/coaches">Тренеры</Link>
            <Link to="/tournaments">Турниры</Link>
            <Link to="/login">Логин</Link>
        </div>

    )
}

export default Navbar

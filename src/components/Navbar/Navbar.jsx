import {Link} from "react-router-dom";
import React from "react";
import s from './Navbar.module.css'

const Navbar = () => {
    return (

        <div className={s.row}>
            <Link to="">MainPage</Link>
            <Link to="/start">Start</Link>
            <Link to="/playgrounds">Playgrounds</Link>
            <Link to="/trainers">Trainers</Link>
            <Link to="/tournaments">Tournaments</Link>
        </div>

    )
}

export default Navbar

import {Link} from "react-router-dom";
import React from "react";
import s from './Navbar.module.css'

const Navbar = () => {
    return (

        <div className={s.row}>
            <Link to="/start">Start</Link>
            <Link to="/playgroundslist">Playgrounds</Link>
            <Link to="/coaches">Coaches</Link>
            <Link to="/tournaments">Tournaments</Link>
            <Link to="/login">Login</Link>
        </div>

    )
}

export default Navbar

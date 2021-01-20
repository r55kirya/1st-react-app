import s from "./Test.module.scss"
import {Link} from "react-router-dom";
import React from "react"

const Test = () => {

    return (
        <>
            <div className={s.row}>
                <Link to="/registration">Регистрация</Link>
                <Link to="/login">Логин</Link>
                <Link to="/recoverypassword">Восстановления пароля</Link>
                <Link to="/personalforpg">Личный кабинет площадки</Link>
                <Link to="/personalforcoach">Личный кабинет тренера</Link>
                <Link to="/personalforuser">Личный кабинет пользователя</Link>
            </div>

        </>
    );
}

export default Test

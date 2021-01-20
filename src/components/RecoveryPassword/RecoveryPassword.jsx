import React from 'react'
import {Link} from "react-router-dom";
import styles from "./RecoveryPassword.module.scss"
import {useForm} from "react-hook-form";


const RecoveryPasswordForm = (props) => {
    const {register, handleSubmit} = useForm()

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div>
                <input placeholder="Логин" name='login' type='text' ref={register}/>
            </div>
            <div>
                <input placeholder="Емайл или телефон" name='email' type='text' ref={register}/>
            </div>
            <div>
                <input placeholder="Пароль" name='password' type='password' ref={register}/>
            </div>
            <div>
                <button>Восстановить</button>
            </div>

        </form>
    )
}

const RecoveryPassword = () => {
    return (
        <div>
            <RecoveryPasswordForm/>
            <div className={styles.link}><Link to="/privacy">Политика конфиденциальности</Link></div>
        </div>
    )
}

export default RecoveryPassword








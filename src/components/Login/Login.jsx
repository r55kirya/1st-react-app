import React from 'react'
import {Link} from "react-router-dom";
import styles from "./Login.module.scss"
import {useForm} from "react-hook-form";
import {createRegistrationInput} from "../common/CreateField/CreateField";
import FormButton from "../common/FormButton/FormButton";

const LoginForm = () => {
    const {register, errors, handleSubmit} = useForm()

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {createRegistrationInput('username', 'Логин емайл или телефон', 'text', errors, register({
                required: 'nado vasya nado',
                maxLength: {value: 10, message: 'dohuya bukov'}
            }))}
            {createRegistrationInput('password', 'Пароль', 'password', errors, register({required: 'zapolni padla'}))}
            <FormButton text="Вход"/>
        </form>
    )
}

const Login = () => {

    return (
        <div className={styles.body}>
            <div className={styles.title}>Логин</div>
            <LoginForm/>
            <div className={styles.link}><Link to="/recoverypassword">Забыли пароль?</Link></div>
            <div className={styles.link}><Link to="/registration">Создать аккаунт</Link></div>
        </div>
    )
}

export default Login

import {useForm} from "react-hook-form";
import React, {useEffect, useState} from "react";
import {jsonPlaceHolderAPI} from "../../api/api";
import {createPersonalInput, createPersonalTextarea} from "../common/CreateField/CreateField";
import styles from "./PersonalForCoach.module.scss"
import {createFieldInput} from "../common/CreateFileInput/CreateFileInput";

const PersonalForCoachForm = () => {

    const {register, errors, handleSubmit, watch} = useForm()

    const onSubmit = (formData) => {
        console.log(formData)
    }

    const [name, setName] = useState([])
    const [ava, setAva] = useState(null)

    useEffect(() => {
        jsonPlaceHolderAPI.getUsers()
            .then(response => {
                setName(response)
            })
    }, [setName])

    useEffect(() => {
        if (watch('avatar').length) {
            setAva(URL.createObjectURL(watch('avatar')[0]))
        }
    }, [watch('avatar')])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {createFieldInput("avatar", "Выбрать аватар", ava, errors, register({required: 'zapolni padla'}))}
            {createPersonalInput("text", "firstname", "Имя:", name.length ? name[0].name : null, errors, register({required: 'zapolni padla'}))}
            {createPersonalInput("text", "secondname", "Фамилия:", name.length ? name[0].username : null, errors, register({required: 'zapolni padla'}))}
            {createPersonalTextarea("cost", "Цены:", errors, register({required: 'zapolni padla'}))}
            {createPersonalInput("text", "phone", "Телефон:", name.length ? name[0].phone : null, errors, register({required: 'zapolni padla'}))}
            {createPersonalInput("text", "studentAge", "Возраст учеников:", name.length ? name[0].id : null, errors, register({required: 'zapolni padla'}))}
            {createPersonalInput("text", "rackets", "Ракетки для учеников:", null, errors, register)}
            {createPersonalInput("text", "vk", "Вконтакте:", null, errors, register)}
            {createPersonalInput("text", "instagram", "Instagram:", null, errors, register)}
            {createPersonalTextarea("about", "О себе:", errors, register({required: 'zapolni padla'}))}
            <button className={styles.btn}>Сохранить</button>
        </form>
    )
}

const PersonalForCoach = () => {
    return (
        <div>
            <div className={styles.title}>ЛК тренера</div>
            <PersonalForCoachForm/>
        </div>
    )
}

export default PersonalForCoach

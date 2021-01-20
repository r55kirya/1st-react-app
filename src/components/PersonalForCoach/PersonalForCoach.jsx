import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {jsonPlaceHolderAPI} from "../../api/api";
import {CreatePersonalInput, CreatePersonalTextarea} from "../common/CreateField/CreateField";

const PersonalForCoachForm = () => {

    const {register, errors, handleSubmit} = useForm()

    const onSubmit = (formData) => {
        console.log(formData)
    }

    const [name, setName] = useState([])

    useEffect(() => {
        jsonPlaceHolderAPI.getUsers()
            .then(response => {
                console.log(response)
                setName(response)
            })
    }, [setName])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>Аватар</div><input name="avatar" type="file" ref={register}/>
            {CreatePersonalInput("text", "firstname", "Имя:", name.length ? name[0].name : null, errors, register({required: 'zapolni padla'}))}
            {CreatePersonalInput("text", "secondname", "Фамилия:", name.length ? name[0].username : null, errors, register({required: 'zapolni padla'}))}
            {CreatePersonalTextarea("cost", "Цены:", errors, register({required: 'zapolni padla'}))}
            {CreatePersonalInput("text", "phone", "Телефон:", name.length ? name[0].phone : null, errors, register({required: 'zapolni padla'}))}
            {CreatePersonalInput("text", "studentAge", "Возраст учеников:", name.length ? name[0].id : null, errors, register({required: 'zapolni padla'}))}
            {CreatePersonalInput("checkbox", "rackets", " Ракетки для учеников:", null, errors, register)}
            {CreatePersonalTextarea("about", "О себе:", errors, register({required: 'zapolni padla'}))}
            <button>тест</button>
        </form>
    )
}

const PersonalForCoach = () => {
    return (
        <div>ЛК тренера
            <PersonalForCoachForm/>
            <div>имя</div>
            <div>фамилия</div>
            <div>фотка</div>
            <div>телефон</div>
            <div>соцсети</div>
            <div>цена</div>
            <div>возраст учеников</div>
            <div>ракетки для учеников</div>
            <div>площадки</div>
            <div>о себе</div>

        </div>
    )
}

export default PersonalForCoach

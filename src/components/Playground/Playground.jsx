import React from 'react'
import styles from "./Playground.module.scss"
import ava from "../../assets/images/playground_ava.png";

const Playground = ({name, adress, phone, about, cost, workingTime, social, website}) => {

    return (
        <div className={styles.body}>
            <div>
                <div className={styles.avatar}><div className={styles.avatarImg} style={ {background: `url(${ava}) 0 0/cover no-repeat`} }></div></div>
            </div>
            <div className={styles.info}>
                <div className={styles.name}>{name}</div>
                <div><span>Телефон: </span>{phone}</div>
                <div><span>Адрес: </span>{adress}</div>
                <div><span>Стоимость: </span>{cost}</div>
                <div>
                    <span>{social.vk}</span>
                    <span>{social.facebook}</span>
                    <span>{social.instagram}</span>
                </div>
                <div><span>Время работы: </span>{workingTime}</div>
                <div><span>Информация: </span>{about}</div>
                <div><span>Сайт: </span>{website}</div>
                <div><span>Тренера: </span>{website}</div>
            </div>
        </div>
    )

}

export default Playground

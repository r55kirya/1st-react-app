import styles from "./Coach.module.scss"
import coach from "../../assets/images/coach_man.png"

const Coach = ({name, phone, aboutMe, social, cost}) => {

    return (
        <div className={styles.body}>
            <div>
                <div className={styles.avatar}><div className={styles.avatarImg} style={ {background: `url(${coach}) center/cover no-repeat`} }></div></div>
            </div>
            <div className={styles.info}>
                <div className={styles.name}>{name}</div>
                <div><span>Телефон: </span>{phone}</div>
                <div><span>Стоимость: </span>{cost}</div>
                <div>
                    <span>{social.vk}</span>
                    <span>{social.facebook}</span>
                    <span>{social.instagram}</span>
                </div>
                <div><span>О себе: </span>{aboutMe}</div>
                <div><span>Площадки: </span>{aboutMe}</div>
            </div>
        </div>
    )

}
export default Coach

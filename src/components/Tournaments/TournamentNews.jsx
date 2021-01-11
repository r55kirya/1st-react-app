import styles from "./TournamentNews.module.scss"
import photo from "../../assets/images/anons_photo.png"
import MoreDetailsButton from "../common/MoreDetailsButton/MoreDetailsButton";

const TournamentNews = ({ eventType, title, date, text, img}) => {
    return (
        <div className={styles.card}>
            <div className={styles.body}>
                <div className={styles.img}>
                    <img src={img || photo} alt=""/>
                </div>
                <div className={styles.info}>
                    <div className={styles.titles}>
                        <span className={styles.eventType}>{eventType}: </span>
                        <span className={styles.title}>{title}</span>
                    </div>
                    <div className={styles.date}><span>Дата:</span> {date}</div>
                    <div className={styles.text}><span>Информация:</span> {text}</div>
                    <MoreDetailsButton />
                </div>

            </div>
        </div>
    )
}

export default TournamentNews

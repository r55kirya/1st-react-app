import styles from "./PersonalForUser.module.scss"
import {Link} from "react-router-dom";

const PersonalForUser = () => {
    return (
        <div className={styles.main}>
            <div><Link to="/personalforpg">Зарегистрировать площадку</Link></div>
            <div><Link to="/personalforcoach">Зарегистроваться как тренер</Link></div>
        </div>
    )
}

export default PersonalForUser

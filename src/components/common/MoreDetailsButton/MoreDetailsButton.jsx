import {Link} from "react-router-dom";
import styles from "./MoreDetailsButton.module.scss"

const MoreDetailsButton = ({id, rootPath}) => {
    return (
        <Link className={styles.btn} to={rootPath + id} >Подробнее</Link>
    )
}
export default MoreDetailsButton

import styles from "./Title.module.scss";

const Title = ({number, title}) => {
    return (
        <div className={styles.block}>
            <div className={styles.number}>{number}</div>
            <div className={styles.title}>{title}</div>
        </div>
    )
}

export default Title

import styles from "./PagesWrapper.module.scss";

const PagesWrapper = ({bg1, bg2, children}) => {
    return (
        <div>
            {/*<img className={styles.img} src={bg1} alt=""/>*/}
            <div className={styles.img} style={ { background: `url( ${bg1} ) center/cover no-repeat` } }></div>
            <div className={styles.wrapper}>
                {children}
            </div>
            <div className={styles.img} style={ { background: `url( ${bg2} ) center/cover no-repeat` } }></div>
            {/*<img className={styles.img} src={bg2} alt=""/>*/}
        </div>
    )
}

export default PagesWrapper

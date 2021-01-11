import styles from "./Poster.module.scss"
import girlMain from "../../assets/images/girlMain.png";

const Poster = () => {
    return (
        <section>
            <div className={styles.body}>
                <div className={styles.text}>
                    <h1 className={styles.title}>БОЛЬШОЙ ТЕННИС ДЛЯ ВСЕХ ЖЕЛАЮЩИХ</h1>
                    <div className={styles.subtitle}>Любительский турнир состоится</div>
                    <div className={styles.subtitleAdd}>16-17 января 2021</div>
                </div>
                <div className={styles.bg} style={{background: `url( ${girlMain} ) no-repeat`}}></div>
            </div>
        </section>
    )
}

export default Poster

import Title from "../common/Title/Title";
import TournamentNews from "./TournamentNews";
import styles from "./Tournaments.module.css"

const Tournaments = () => {

    return (
        <div className={styles.body}>
            <Title number="04" title="ТУРНИРЫ"/>
            <TournamentNews eventType="РЕЗУЛЬТАТЫ" title="Игровой день новичка" date="26.10.2020"
                            text="Красиво покатали"/>
            <TournamentNews eventType="АНОНС" title="Игровой день новичка" date="26.10.2020"
                            text="Приходи и всех выйграй"/>

        </div>
    )

}

export default Tournaments

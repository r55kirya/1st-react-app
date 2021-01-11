import styles from "./AboutTennis.module.scss";
import {Link} from "react-router-dom";
import racket from "../../assets/images/racket.png"
import Title from "../common/Title/Title";

const AboutTennis = () => {
    return (
        <section className={styles.sec}>
                <div className={styles.body}>

                    <Title title="НЕМНОГО О ТЕННИСЕ"/>

                    <div className={styles.text}>Большой теннис - это игра которая приносит как физическое, так и
                        моралное удавлетворение. На тренировах и во время игры в теннис, активно работают все группы
                        мышц, тренируется дыхательная и сердечно-сосудистые сестемы, развивается скорость и реакция.
                        Игра в теннис - снимает психологическое напряжение и положительно влияет на нервную систему.
                        Если вы хотите укрепить своё здоровье и улучшить физическую форму, приходите заниматься с <Link
                            to="/coacheslist">ТРЕНЕРОМ</Link> или просто поиграть в большой теннис на наших <Link
                            to="/playgroundslist">ПЛОЩАДКАХ</Link> Ну или если вы хотите принять
                        участие в любительском <Link to="/tournaments">ТУРНИРЕ</Link> Тогда вам тоже к нам
                    </div>

                    <img src={racket} className={styles.racketL} alt=""></img>
                    <img src={racket} className={styles.racketR} alt=""></img>
                </div>
        </section>
    )
}

export default AboutTennis

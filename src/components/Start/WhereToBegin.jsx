import styles from "./WhereToBegin.module.scss"
import Title from "../common/Title/Title";

const WhereToBegin = () => {
    return (
        <section>
                <div className={styles.body}>

                    <Title number="01 " title="С ЧЕГО НАЧАТЬ" />

                    <div className={styles.text}>Никогда не играли в большой теннис? Но хотите научится?
                        Боялись начать потому что думали, что это дорогое вложение?
                        Или просто не знаете чем занять своё свободное время.
                        Тогда, добро пожаловать в наш клуб большого теннеса.
                        У нас вы можете попробовать себя в этом виде спорта, без какого
                        либо вложения на инвентарь- мы предоставляем его бесплатно.
                        Выбрать тренера и Принять участие в любительсих турнирах .
                        Мы Приглашаем вас окунутся в мир большого тенися вместе с нами!
                    </div>

                </div>
        </section>
    )
}

export default WhereToBegin
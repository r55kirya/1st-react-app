import Navbar from "./Navbar/Navbar";
import styles from "./Header.module.scss"
import ball from "../../assets/images/ball-mimi.png"

const Header = () => {

    return (
        <header>

            <div className="container">

                <div className={styles.row}>
                    <div className={styles.logo} style={ { background: `url( ${ball} ) right no-repeat` } }>YELLOW BALL</div>

                    <Navbar className={styles.navbar}/>

                    <div className={styles.info}>yellow-ball@gmail.com</div>
                </div>

            </div>

        </header>
    )

}

export default Header

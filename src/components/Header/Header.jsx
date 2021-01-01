import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css"

const Header = () => {

    return (
        <header>
            <div className="container">
                <div className={styles.row}>
                    <div className={styles.logo}>YELLOW BALL</div>
                    <Navbar className={styles.navbar}/>
                    <div className={styles.info}>yellow-ball@gmail.com</div>
                </div>
            </div>
        </header>
    )

}

export default Header

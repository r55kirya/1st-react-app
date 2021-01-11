import search from "../../../assets/images/search.png"
import styles from "./Search.module.scss"

const Search = () => {
    return (
        <div className={styles.search}>

            <input className={styles.input} type="text"/>
            <button className={styles.btn} style={ { background: `url( ${search} )  50% 50% no-repeat` } }></button>

        </div>
    )
}

export default Search

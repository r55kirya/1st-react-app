import styles from "./CardsList.module.scss";
import cardPhoto from "../../../assets/images/playgroundCardPhoto.png";
import MoreDetailsButton from "../MoreDetailsButton/MoreDetailsButton";

const CardsList = ({list, rootPath}) => {

    return (
        <div className="container">

            <div className={styles.row}>

                {
                    list.map(item =>

                        <div className={styles.card} key={item.id}>

                            <div className={styles.img}><img src={cardPhoto} alt=""/></div>
                            <div className={styles.name}>{item.name}</div>
                            {/*<div className={styles.adress}>{item.adress}</div>*/}

                            <MoreDetailsButton id={item.id} rootPath={rootPath}/>



                        </div>
                    )
                }

            </div>

        </div>
    )

}

export default CardsList

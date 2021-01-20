import styles from "./FormButton.module.scss"

const FormButton = ({text}) => {
    return (
        <div className={styles.btn}>
            <button>{text}</button>
        </div>
    )
}

export default FormButton

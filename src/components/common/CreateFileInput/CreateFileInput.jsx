import stylesForFileInput from "../CreateField/CreateField.module.scss";
import styles from "./CreateFileInput.module.scss";
import cn from "classnames";
import {ErrorMessage} from "@hookform/error-message";

export const createFieldInput = (name, text, src, errors, ref) => {
    return (
        <div>
            <div className={stylesForFileInput.title}>{text}</div>
            <input className={styles.inputFile} name={name} type="file" id="ava" ref={ref}/>
            <div className={cn({[stylesForFileInput.error]: errors[name]})}>
                <label className={styles.inputFileLabel} htmlFor="ava">Выбрать файл</label>
            </div>
            <ErrorMessage
                errors={errors}
                name="avatar"
                render={({ message }) => <div className={stylesForFileInput.errorMessage}>{message}</div>}
            />
            <div className={styles.avatar}><img src={src} alt=""/></div>
        </div>
    )
}

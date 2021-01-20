import React from "react";
import {ErrorMessage} from "@hookform/error-message";
import cn from "classnames";
import styles from "./CreateField.module.scss";


const FormControl = ({view, errors, name, children}) => {
    return (
        <div className={cn({
            [styles.reg]: view === "reg",
            [styles.per]: view === "per",
            [styles.error]: errors[name]
        })}>
            {children}
            <ErrorMessage errors={errors} name={name}/>
        </div>
    )
}

export const CreateRegistrationInput = (name, placeholder, type, errors = {}, ref) => {
    return (
        <FormControl errors={errors} name={name} view="reg">
          <input name={name} placeholder={placeholder} type={type} ref={ref}/>
        </FormControl>
    )
}

export const CreatePersonalInput = (type, name, text, defaultValue, errors = {}, ref) => {
    return (
        <FormControl errors={errors} name={name} view="per">
            <div className={styles.title}>{text}</div><input name={name} type={type} ref={ref} defaultValue={defaultValue}/>
        </FormControl>
    )
}

export const CreatePersonalTextarea = (name, text, errors = {}, ref) => {
    return (
        <FormControl errors={errors} name={name} view="per">
            <div className={styles.title}>{text}</div><textarea name={name} ref={ref}/>
        </FormControl>
    )
}

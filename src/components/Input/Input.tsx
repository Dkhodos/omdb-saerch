import React from "react";
import {TextField, TextFieldProps} from "@material-ui/core";
import clsx from "clsx";
import styles from "./styles.module.scss"

const Input: React.FC<TextFieldProps> = ({inputProps,...rest}) => {
    return <TextField inputProps={{
        ...inputProps,
        className: clsx(styles.input, inputProps?.className),
    }} color={"primary"} {...rest}/>
}

export default Input;
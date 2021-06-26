import {Button as MuButton, ButtonProps} from "@material-ui/core"
import React from "react";
import clsx from "clsx";
import styles from "./styles.module.scss"

interface Props extends ButtonProps{

}

const Button:React.FC<Props> = ({className,children,...rest}) => {
    return (
        <MuButton {...rest} classes={{root: clsx(styles.button, className)}} variant="contained" color="primary">
            {children}
        </MuButton>
    )
}

export default Button
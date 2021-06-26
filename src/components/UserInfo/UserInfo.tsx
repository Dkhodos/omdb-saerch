import {Avatar, ListItemAvatar, ListItemText, Tooltip} from "@material-ui/core";
import React from "react";
import styles from "./style.module.scss"
import {Person} from "@material-ui/icons";
import Button from "../Button";
import clsx from "clsx";

interface Props {
    name: string
    onLogout?: VoidFunction
    className?: string
}

const UserInfo: React.FC<Props> = ({name, onLogout,className}) => {
    return (
        <div className={clsx(styles.user)}>
            <ListItemAvatar>
                <Avatar>
                    <Person/>
                </Avatar>
            </ListItemAvatar>
            <div className={styles.info}>
                <span className={styles.title}>{`Welcome ${name}!`}</span>
                {onLogout ? <small className={styles.delete} onClick={onLogout}>Logout</small> : null}
            </div>
        </div>
    )
}

export default UserInfo;
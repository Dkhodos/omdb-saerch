import useSessionStorage from "../../hooks/useSessionStorage";
import {USERNAME_LS_KEY} from "../../consts";
import React, {useEffect, useState} from "react";
import Modal from "../../components/Modal";
import styles from "./styles.module.scss"
import {TextField} from "@material-ui/core";
import useBackground from "../../hooks/useBackground";
import loginBackground from "../../../public/images/login_background.jpg"
import Button from "../../components/Button";
import {useHistory} from "react-router-dom";

const Login = () => {
    const {value, setStorage} = useSessionStorage(USERNAME_LS_KEY);
    const {setBackground} = useBackground()
    const [username, setUsername] = useState("");
    const history = useHistory()

    useEffect(() => {
        if (value) {
            history.push("/");
        }
    }, [])

    const [open, setOpen] = useState(false);
    useEffect(() => {
        setOpen(true);
        setBackground(loginBackground);

        return () => {
            setBackground("");
        }
    }, []);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onProceed();
    }

    const onProceed = () => {
        setStorage(username.trim());
        history.push("/");
    }

    return (
        <Modal open={open} disableBackdropClick hideBackdrop>
            <div className={styles.login}>
                <h2 className={styles.title}>Welcome to OMDb Client :)</h2>
                <form onSubmit={event => onSubmit(event)}>
                    <div>
                        <TextField type={"username"} value={username} placeholder={"What should everyone call you?"}
                                   onChange={event => setUsername(event.target.value)} label={"Username"} className={styles.input}/>
                    </div>
                    <Button onClick={onProceed} disabled={!username} type={"submit"}>Continue</Button>
                    <small>This tool is powered by <a href={'https://www.omdbapi.com/'} target={"_blank"}>OMDB API</a></small>
                </form>
            </div>
        </Modal>
    )

}

export default Login;
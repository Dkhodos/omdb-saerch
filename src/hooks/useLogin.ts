import useSessionStorage from "./useSessionStorage";
import {FAVORITES_LS_KEY, USERNAME_LS_KEY} from "../consts";
import {useHistory} from "react-router-dom"
import {useEffect} from "react";

export default function useLogin() {
    const {value} = useSessionStorage(USERNAME_LS_KEY);
    const history = useHistory()

    useEffect(() => {
        if (!value) {
            history.push("/login");
            localStorage.removeItem(FAVORITES_LS_KEY);
        }
    }, [history, value])

}
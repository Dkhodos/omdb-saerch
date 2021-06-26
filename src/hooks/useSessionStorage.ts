import {useEffect, useState} from "react";

const stringifyValue = (value: any): string => {
    if (typeof value === "string") {
        return value;
    }

    if (typeof value === "number") {
        return String(value)
    }

    return JSON.stringify(value);
}

export default function useSessionStorage(key: string) {
    const [value, setValue] = useState<string>(getValueFromSessionStorage());
    useEffect(() => {
        window.addEventListener("login-update", onStorage);

        return () => {
            window.removeEventListener("login-update", onStorage)
        }
    }, [])

    const onStorage = () => {
        setValue(getValueFromSessionStorage());
    }

    function getValueFromSessionStorage(): string {
        return sessionStorage.getItem(key) ?? "";
    }

    function saveValueToSessionStorage(key: string, value: string | null) {
        const event = new Event("login-update");
        sessionStorage.setItem(key, value ?? "");
        window.dispatchEvent(event);
    }

    function setStorage(newValue: string) {
        setValue(newValue ?? "");
        saveValueToSessionStorage(key, newValue);
    }

    function clearStorage() {
        setStorage("");
        sessionStorage.removeItem(key);
    }

    return {
        value,
        setStorage,
        clearStorage
    };
}
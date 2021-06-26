import {useEffect, useState} from "react";
import {FAVORITES_LS_KEY} from "../consts";
import newObject from "../utils/newObject";

type name = string

export interface Favorites {
    [id: string]: name
}

export default function useFavorites() {
    const getFavorites = () => FAVORITES_LS_KEY in localStorage ? JSON.parse(localStorage.getItem(FAVORITES_LS_KEY) as string) as Favorites : {};

    const [favorites, setFavorites] = useState<Favorites>(getFavorites());

    const setStorage = (favorites: Favorites) => {
        const event = new Event('updated-favorites')
        localStorage.setItem(FAVORITES_LS_KEY, JSON.stringify(favorites));
        window.dispatchEvent(event);
    }

    useEffect(() => {
        window.addEventListener("updated-favorites", onStorage)

        return () => {
            window.removeEventListener("updated-favorites", onStorage);
        }
    }, [])

    const onStorage = () => {
        console.log("storage");
        setFavorites(getFavorites());
    }

    const updateFavorites = (id: string, title: string) => {
        let results: Favorites = {};

        if (id in favorites) {
            results = newObject({
                ...favorites,
                [id]: undefined
            })
        } else {
            results = newObject({
                [id]: title,
                ...favorites
            });
        }

        setFavorites(results);
        setStorage(results);
    }

    return {favorites, updateFavorites}
}
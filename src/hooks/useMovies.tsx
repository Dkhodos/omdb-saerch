import {useEffect, useState} from "react";
import {Omdb, omdbVideo, SearchProps} from "../services/omdb";

interface Movies {
    items: omdbVideo[]
    isLoading: boolean
    results: number
    isError: boolean
}

export default function useMovies(props: SearchProps) {
    const [movies, setMovies] = useState<Movies>({isLoading: false, results: 0, items: [], isError: false});

    useEffect(() => {
        setMovies({
            items: [],
            isLoading: Boolean(props.search),
            results: 0,
            isError: false
        });

        if(!props.search){
            return;
        }

        Omdb.searchMovies({...props}).then(r => {
            if("Error" in r){
                throw r.Error;
            }

            setMovies({
                items: r.Search,
                isLoading: false,
                results: parseInt(r.totalResults),
                isError: false
            })
        }).catch(reason => {
            console.error(reason);
            setMovies({
                items: [],
                isLoading: false,
                results: 0,
                isError: true
            })
        });

    }, [props.search, props.type, props.releaseYear, props.type]);

    return movies;
}
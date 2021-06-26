import {GetMovieIDProps, Omdb, omdbVideo} from "../services/omdb";
import {useEffect, useState} from "react";

interface Movie {
    data: omdbVideo | null
    isLoading: boolean
    isError: boolean
}

export default function useMovie(props: GetMovieIDProps) {
    const [movie, setMovie] = useState<Movie>({data: null, isError: false, isLoading: false});

    useEffect(() => {
        setMovie({
            isLoading: Boolean(props.imdbID),
            isError: false,
            data: null
        });

        if (!props.imdbID) {
            return;
        }

        Omdb.getMovie({...props}).then(r => {
            setMovie({
                data: r,
                isError: false,
                isLoading: false
            })
        }).catch(reason => {
            console.error(reason);
            setMovie({
                data: null,
                isLoading: false,
                isError: true,
            })
        })
    }, [props.imdbID, props.plot])

    return movie
}
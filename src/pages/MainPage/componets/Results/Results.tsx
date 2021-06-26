import React, {useState} from "react";
import {SearchProps} from "../../../../services/omdb";
import useMovies from "../../../../hooks/useMovies";
import SearchBox from "../../../../components/SearchBox";
import styles from "./styles.module.scss"
import Movie from "../../../../components/Movie";
import useFavorites from "../../../../hooks/useFavorites";
import MoviesLoader from "../../../../components/MoviesLoader";
import clsx from "clsx";
import {Alert} from "@material-ui/lab";
import useParams from "../../../../hooks/useParams";

interface Props {
    onClick: (id: string) => void
}

const Results: React.FC<Props> = ({onClick}) => {
    const {params, setSearch} = useParams()
    const {favorites, updateFavorites} = useFavorites();
    const movies = useMovies({...params})

    const onSearch = (query: string) => {
        setSearch(query)
    }

    return (
        <div className={clsx(styles.results, {[styles.noSearch]: !params.search})}>
            <header>
                <SearchBox query={params.search} onChange={onSearch}/>
            </header>
            <div className={styles.grid}>
                {movies.isLoading ? <MoviesLoader/> : null}
                {movies.results > 0 ? (
                    movies.items.map((movie, i) => {
                        return (
                            <Movie id={movie.imdbID} title={movie.Title} image={movie.Poster} year={movie.Year}
                                   onFavorite={() => updateFavorites(movie.imdbID, movie.Title)}
                                   isFavorite={movie.imdbID in favorites}
                                   key={`${movie.imdbID}-${i}`} onClick={() => onClick(movie.imdbID)}/>
                        )
                    })
                ) : null}
            </div>
            {movies.isError ? (
                <Alert variant="filled" severity="error" className={styles.error}>
                    Could not find a match for this query, we suggest the following:
                    <ul>
                        <li>Make sure that what you types matches a movie tile</li>
                        {params.search.length < 3 ? <li>Query is probably to short, type more letters :)</li> : null}
                    </ul>
                </Alert>
            ) : null}
        </div>
    )
}

export default Results;
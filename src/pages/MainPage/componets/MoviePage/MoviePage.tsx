import React, {useEffect, useState} from "react";
import Modal from "../../../../components/Modal";
import useMovie from "../../../../hooks/useMovie";
import noImage from "../../../../../public/images/no_picture_available.png"
import styles from "./styles.module.scss"
import {Rating} from "@material-ui/lab";
import {MovieDetails} from "./componets/MovieDetails";
import {MoviePlot} from "../../../../services/omdb";

interface Props {
    id: string
    onClose: VoidFunction
}

const MoviePage: React.FC<Props> = ({id, onClose}) => {
    const [plot, setPlot] = useState<MoviePlot | undefined>();

    const movie = useMovie({imdbID: id});
    const plotMovie = useMovie({imdbID: plot ? id : "", plot})

    const handleClose = () => {
        setPlot(undefined);
        onClose();
    }

    return (
        <Modal open={Boolean(id)} onClose={handleClose} className={styles.modal}>
            <div className={styles.movie}>
                {movie.data ? <main>
                    <div className={styles.imageWrapper}>
                        <img alt={movie.data.Title} src={movie.data.Poster === "N/A" ? noImage : movie.data.Poster}/>
                    </div>
                    <div className={styles.info}>
                        <label>{movie.data.Title}</label>
                        <small>{movie.data.Year}</small>
                        <Rating readOnly defaultValue={parseFloat(movie.data.imdbRating) / 2}/>
                        <MovieDetails description={plotMovie.data ? plotMovie.data.Plot : movie.data.Plot} onClick={() => setPlot("full")}
                                      isExpanded={Boolean(plot)} loading={plotMovie.isLoading}/>
                    </div>
                </main> : null}
            </div>
        </Modal>
    )
}

export default MoviePage;
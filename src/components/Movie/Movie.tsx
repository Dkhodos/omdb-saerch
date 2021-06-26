import {Card} from "@material-ui/core";
import React from "react";
import styles from "./styles.module.scss"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from '@material-ui/icons/Favorite';
import noImage from "../../../public/images/no_picture_available.png"

interface Props {
    id: string
    title: string
    image: string
    year: string

    onFavorite: VoidFunction
    isFavorite: boolean
    onClick: VoidFunction
}

const Movie: React.FC<Props> = ({title, image, isFavorite, onFavorite, year,id,onClick}) => {
    const getIcon = () => !isFavorite ? <FavoriteBorderIcon color={"primary"}/> : <FavoriteIcon color={"primary"}/>
    const getText = () => isFavorite ? "Remove" : "Add";

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        onFavorite();
    }

    return (
        <Card className={styles.root} data-id={id} onClick={onClick}>
            <div className={styles.imageWrapper}>
                <div onClick={handleClick} className={styles.favorite}>
                    {getIcon()}
                    <span>{getText()}</span>
                </div>
                <img className={styles.image} src={image === "N/A" ? noImage : image} alt={title}/>
            </div>
            <div className={styles.info}>
                <label>{title}</label>
                <small>{year}</small>
            </div>
        </Card>
    )
}

export default Movie;
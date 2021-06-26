import useFavorites from "../../../../hooks/useFavorites";
import React, {useMemo} from "react";
import Menu, {MenuOption} from "../../../../components/Menu/Menu";
import {Badge} from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import styles from "./styles.module.scss"

interface Props {
    onClick: (id: string) => void
}

const Icon = ({count}: { count: number }) => {
    if (count) {
        return (
            <Badge color="secondary" badgeContent={count} className={styles.badge}>
                <FavoriteBorderIcon/>
            </Badge>
        )
    }

    return <FavoriteBorderIcon/>
}

export const Favorites: React.FC<Props> = ({onClick}) => {
    const {favorites} = useFavorites();

    const formattedItems = useMemo((): MenuOption[] => {
        return Object.entries(favorites).map(([id, name]) => {
            return {
                value: id,
                label: name
            }
        })
    }, [favorites])

    const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, value: string) => {
        onClick(value);
    }

    return <Menu name={<Icon count={formattedItems.length}/>} items={formattedItems} onClick={handleClick}/>
}
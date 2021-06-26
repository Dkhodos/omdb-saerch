import {Button, Menu as MuMenu, MenuItem} from "@material-ui/core";
import React from "react";
import styles from "./styles.module.scss"

export interface MenuOption {
    value: string,
    label: React.ReactNode
}

interface Props {
    name: React.ReactNode
    items: MenuOption[]
    onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>, value: string) => void
}

const Menu: React.FC<Props> = ({name, items, onClick}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleSelect = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, value: string) => {
        onClick(event, value);
        setAnchorEl(null);
    };

    return (
        <div >
            <Button onClick={event =>  items.length > 0 && setAnchorEl(event.target as HTMLElement)}>
                <span className={styles.name}>{name}</span>
            </Button>
            <MuMenu
                className={styles.menu}
                keepMounted
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                {
                    items.map(item => {
                        return <MenuItem onClick={event => handleSelect(event, item.value)} key={item.value}>{item.label}</MenuItem>
                    })
                }
            </MuMenu>
        </div>
    )
}

export default Menu;
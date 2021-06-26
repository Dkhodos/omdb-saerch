import React from "react";
import {Fade, Modal as MuModal} from "@material-ui/core"
import {ModalProps} from "@material-ui/core/Modal/Modal";
import styles from "./styles.module.scss"
import clsx from "clsx";
import Backdrop from '@material-ui/core/Backdrop';

interface Props extends ModalProps {

}

const Modal: React.FC<Props> = ({children, className, ...rest}) => {
    return (
        <MuModal closeAfterTransition {...rest}
                 className={styles.modal}>
            <Fade in={rest.open} timeout={300}>
                <div className={clsx(styles.paper, className)}>
                    {children}
                </div>
            </Fade>
        </MuModal>
    )
}

export default Modal;
import Skeleton from "react-loading-skeleton";
import React from "react";
import styles from "./styles.module.scss"


const MoviesLoader = () => {

    return (
        <>
            {
                Array(20).fill(0).map((value, index) => {
                    return (
                        <div className={styles.loader} key={`loader-${index}`}>
                            <Skeleton height={"300px"}/>
                            <Skeleton height={"20px"} width={"90%"}/>
                            <Skeleton height={"10px"} width={"60%"}/>
                        </div>
                    )
                })
            }
        </>
    )
};

export default MoviesLoader;
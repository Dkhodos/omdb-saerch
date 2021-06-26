import React from "react";
import clsx from "clsx";
import styles from "./style.module.scss"

interface Props {
    percentage: number
    color: string
    id: number | string,
    className?: string
}

const ReviewStar: React.FC<Props> = ({color, percentage, id, className}) => {
    return (
        <div className={clsx(styles.star, className)} data-fill={percentage}>
            <svg viewBox="0 0 51 48" className={styles.svg}>
                <defs>
                    <linearGradient id={`widgetGrad-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset={"0%"} className={styles.filled}/>
                        <stop offset={`${percentage}%`} className={styles.filled} style={{stopColor: color}}/>
                        <stop offset={`${percentage}%`} className={styles.empty}/>
                        <stop offset={'100%'} className={styles.empty}/>
                    </linearGradient>
                </defs>
                <path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" style={{fill: `url(#widgetGrad-${id})`}}/>
            </svg>
        </div>
    )
}

export default ReviewStar;
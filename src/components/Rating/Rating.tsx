import React from "react";
import ReviewStar from "../ReviewStar";

interface RatingCustomClasses {
    wrapper?: string
    star?: string
    count?: string
}

interface Props {
    score: number
    maxScore?: number
    title?: string
    color?: string
    id: string
    reviewCount?: number
    customClasses?: RatingCustomClasses
}

export const Rating: React.FC<Props> = ({
                                            maxScore = 10, score, title, color = "#ffb400",
                                            id, customClasses
                                        }) => {

    return (
        <div title={title ?? `${score} out of ${maxScore}`} className={customClasses?.wrapper}>
            {
                Array(5).fill(0).map((_, i) => {
                    const starScore = (score / maxScore) - (0.2 * i);

                    return <ReviewStar percentage={Math.min(1, starScore / 0.2) * 100} color={color} id={`${id}-${i + 1}`} key={`${id}-${i + 1}`}
                                       className={customClasses?.star}/>
                })
            }
        </div>
    )
}
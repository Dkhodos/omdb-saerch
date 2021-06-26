import React from "react";
import Button from "../../../../../components/Button";

interface Props {
    description: string
    onClick: VoidFunction
    isExpanded: boolean
    loading: boolean
}

export const MovieDetails: React.FC<Props> = ({onClick, isExpanded, description,loading}) => {
    return (
        <div>
            <article>
                {loading ? "Loading..." : description}
            </article>
            {!isExpanded ? <Button onClick={onClick}>Show More...</Button> : null}
        </div>
    )
}
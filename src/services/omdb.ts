import {Client} from "../utils/Client";
import {API_KEY} from "../consts";

const API_URL = "https://www.omdbapi.com/"

interface SearchResponse {
    Response: "True" | "False"
    Search: omdbVideo[]
    totalResults: string
    Error?: string
}

export interface omdbVideo {
    "Title": string,
    "Year": string,
    "Rated": string,
    "Released": string,
    "Runtime": string,
    "Genre": string,
    "Director": string,
    "Writer": string,
    "Actors": string,
    "Plot": string,
    "Language": string,
    "Country": string,
    "Awards": string,
    "Poster": string,
    "Ratings": { "Source": string, "Value": string }[],
    "Metascore": string,
    "imdbRating": string,
    "imdbVotes": string,
    "imdbID": string,
    "Type": string,
    "DVD": string,
    "BoxOffice": string,
    "Production": string,
    "Website": string,
}

export type MovieType = "movie" | "series" | "episode"
export type MoviePlot = "short" | "full"

interface GetMovieProps {
    type?: MovieType
    releaseYear?: string
    plot?: MoviePlot
}

export interface GetMovieIDProps extends GetMovieProps {
    imdbID: string
    title?: never
}

export interface GetMovieTitleProps extends GetMovieProps {
    title: string
    imdbID?: never
}

export interface SearchProps {
    search: string
    type?: MovieType
    releaseYear?: string
    page?: number
}

export const Omdb = {
    getMovie: ({title, imdbID, plot, releaseYear, type}: GetMovieIDProps | GetMovieTitleProps) => {
        return Client.get<omdbVideo>({
            url: API_URL,
            params: {
                apiKey: API_KEY,
                r: "json",
                i: imdbID,
                t: title,
                type,
                y: releaseYear,
                plot
            }
        })
    },

    searchMovies: ({search, page, releaseYear, type}: SearchProps) => {
        return Client.get<SearchResponse>({
            url: API_URL,
            params: {
                apiKey: API_KEY,
                r: "json",
                s: search,
                type,
                y: releaseYear,
                page
            }
        })
    }
}
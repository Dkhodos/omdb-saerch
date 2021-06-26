import React, {useState} from "react";
import Results from "./componets/Results";
import useSessionStorage from "../../hooks/useSessionStorage";
import {USERNAME_LS_KEY} from "../../consts";
import UserInfo from "../../components/UserInfo"
import styles from "./styles.module.scss"
import {Favorites} from "./componets/Favorites/Favorites";
import MoviePage from "./componets/MoviePage";

const MainPage: React.FC = () => {
    const {value, clearStorage} = useSessionStorage(USERNAME_LS_KEY)
    const [selectedMovie, setSelectedMovie] = useState<string>("");

    return (
        <>
            <main className={styles.main}>
                <header className={styles.header}>
                    <h1>Super Cool Movie Search Tool</h1>
                    <div className={styles.buttons}>
                        <Favorites onClick={id => setSelectedMovie(id)}/>
                        <UserInfo name={value as string} onLogout={clearStorage}/>
                    </div>
                </header>
                <div className={styles.results}>
                    <Results onClick={setSelectedMovie}/>
                    <MoviePage id={selectedMovie} onClose={() => setSelectedMovie("")}/>
                </div>
            </main>
            <footer>

            </footer>
        </>

    )
}

export default MainPage;
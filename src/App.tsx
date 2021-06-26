import React from 'react'
import {Route, Switch} from "react-router-dom"
import Login from "./pages/Login";
import useLogin from "./hooks/useLogin";
import MainPage from './pages/MainPage';

function App() {
    useLogin();

    return (
        <Switch>
            <Route path={"/login"}>
                <Login/>
            </Route>
            <Route path={"/"}>
                <MainPage/>
            </Route>
        </Switch>
    )
}

export default App

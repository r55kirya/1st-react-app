import './App.scss';
import Start from "./components/Start/Start";
import PlaygroundsList from "./components/PlaygroundsList/PlaygroundsList";
import Coaches from "./components/CoachesList/Coaches";
import Tournaments from "./components/Tournaments/Tournaments";
import {Route, Switch} from "react-router-dom";
import React from "react";
import PlaygroundContainer from "./components/Playground/PlaygroundContainer";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";

const App = () => {

    return (

        <div className="App">

            <Header/>

            <Switch>
                <Route path="/playgroundslist">
                    <PlaygroundsList/>
                </Route>
                <Route path="/coaches">
                    <Coaches/>
                </Route>
                <Route path="/tournaments">
                    <Tournaments/>
                </Route>
                <Route path="/playground/:userId?">
                    <PlaygroundContainer/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/">
                    <Start/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;

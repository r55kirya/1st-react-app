import './App.css';
import Start from "./components/Start/Start";
import PlaygroundsList from "./components/PlaygroundsList/PlaygroundsList";
import Coaches from "./components/CoachesList/Coaches";
import Tournaments from "./components/Tournaments/Tournaments";
import {Route} from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import PlaygroundContainer from "./components/Playground/PlaygroundContainer";
import Login from "./components/Login/Login";

const App = () => {

    return (

        <div className="App">

            <Navbar/>

            <Route path="/start">
                <Start/>
            </Route>
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
                <Login />
            </Route>

        </div>
    );
}

export default App;

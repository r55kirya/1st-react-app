import './App.css';
import Start from "./components/Start/Start";
import Playgrounds from "./components/Playgrounds/Playgrounds";
import Trainers from "./components/Trainers/Trainers";
import Tournaments from "./components/Tournaments/Tournaments";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import React from "react";

const App = () => {

    return (
        <BrowserRouter >
            <div className="App">

                <h1>main page</h1>

                <div className="row">
                    <Link to="/start">Start</Link>
                    <Link to="/playgrounds">Playgrounds</Link>
                    <Link to="/trainers">Trainers</Link>
                    <Link to="/tournaments">Tournaments</Link>
                </div>

                <Switch>
                    <Route path="/start">
                        <Start/>
                    </Route>
                    <Route path="/playgrounds">
                        <Playgrounds/>
                    </Route>
                    <Route path="/trainers">
                        <Trainers/>
                    </Route>
                    <Route path="/tournaments">
                        <Tournaments/>
                    </Route>
                </Switch>

            </div>
        </BrowserRouter >
    );

}

export default App;

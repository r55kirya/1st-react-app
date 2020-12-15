import './App.css';
import Start from "./components/Start/Start";
import Playgrounds from "./components/Playgrounds/Playgrounds";
import Trainers from "./components/Trainers/Trainers";
import Tournaments from "./components/Tournaments/Tournaments";
import {Route} from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar/Navbar";

const App = () => {

    return (

            <div className="App">

                <Navbar />

                    <Route exact path="/">
                        <h1>main page</h1>
                    </Route>
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

            </div>
    );
}

export default App;

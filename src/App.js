import './App.scss';
import Start from "./components/Start/Start";
import PlaygroundsList from "./components/PlaygroundsList/PlaygroundsList";
import CoachesList from "./components/CoachesList/CoachesList";
import Tournaments from "./components/Tournaments/Tournaments";
import {Route, Switch} from "react-router-dom";
import React from "react";
import PlaygroundContainer from "./components/Playground/PlaygroundContainer";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Test from "./components/Test/Test";
import coachesBG1 from "./assets/images/coaches_bg1.png"
import coachesBG2 from "./assets/images/coaches_bg2.png"
import playgroundsBG1 from "./assets/images/playgrounds_bg1.png"
import tournamentsBG1 from "./assets/images/tournaments_bg1.png"
import tournamentsBG2 from "./assets/images/tournaments_bg2.png"
import PagesWrapper from "./components/common/PagesWrapper/PagesWrapper";
import CoachContainer from "./components/Coach/CoachContainer";

const App = () => {

    return (

        <div className="container">

            <Header/>

            <Switch>

                <Route path="/playgroundslist">
                    <PagesWrapper bg1={playgroundsBG1} bg2={playgroundsBG1}><PlaygroundsList/></PagesWrapper>
                </Route>

                <Route path="/playground/:playgroundId?">
                    <PagesWrapper bg1={playgroundsBG1} bg2={playgroundsBG1}><PlaygroundContainer/></PagesWrapper>
                </Route>

                <Route path="/coacheslist">
                    <PagesWrapper bg1={coachesBG1} bg2={coachesBG2}><CoachesList/></PagesWrapper>
                </Route>

                <Route path="/coach/:coachId?">
                    <PagesWrapper bg1={coachesBG1} bg2={coachesBG2}><CoachContainer/></PagesWrapper>
                </Route>

                <Route path="/tournaments">
                    <PagesWrapper bg1={tournamentsBG1} bg2={tournamentsBG1}><Tournaments/></PagesWrapper>
                </Route>

                <Route path="/login">
                    <Login/>
                </Route>

                <Route path="/test">
                    <Test />
                </Route>

                <Route path="/">
                    <Start/>
                </Route>

            </Switch>
        </div>
    );
}

export default App;

import './App.scss';
import Start from "./components/Start/Start";
import {Route, Switch} from "react-router-dom";
import React from "react";
import {Suspense} from "react";

import coachesBG1 from "./assets/images/coaches_bg1.png"
import coachesBG2 from "./assets/images/coaches_bg2.png"
import playgroundsBG1 from "./assets/images/playgrounds_bg1.png"
import tournamentsBG1 from "./assets/images/tournaments_bg1.png"
// import tournamentsBG2 from "./assets/images/tournaments_bg2.png"

import PagesWrapper from "./components/common/PagesWrapper/PagesWrapper";
import Test from "./components/Test/Test";
import Header from "./components/Header/Header";

const Tournaments = React.lazy(() => import('./components/Tournaments/Tournaments'));
const CoachContainer = React.lazy(() => import('./components/Coach/CoachContainer'));
const Registration = React.lazy(() => import('./components/Registration/Registration'));
const RecoveryPassword = React.lazy(() => import('./components/RecoveryPassword/RecoveryPassword'));
const PersonalForPG = React.lazy(() => import('./components/PersonalForPG/PersonalForPG'));
const PersonalForCoach = React.lazy(() => import('./components/PersonalForCoach/PersonalForCoach'));
const PlaygroundsList = React.lazy(() => import('./components/PlaygroundsList/PlaygroundsList'));
const CoachesList = React.lazy(() => import('./components/CoachesList/CoachesList'));
const PlaygroundContainer = React.lazy(() => import('./components/Playground/PlaygroundContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));
const PersonalForUser = React.lazy(() => import('./components/PersonalForUser/PersonalForUser'));

const App = () => {

    return (

        <div className="container">

            <Header/>

            <Switch>

                <Route path="/playgroundslist">
                    <PagesWrapper bg1={playgroundsBG1} bg2={playgroundsBG1}><Suspense fallback="hay hay"><PlaygroundsList/></Suspense></PagesWrapper>
                </Route>

                <Route path="/playground/:playgroundId?">
                    <PagesWrapper bg1={playgroundsBG1} bg2={playgroundsBG1}><Suspense fallback="hay hay"><PlaygroundContainer/></Suspense></PagesWrapper>
                </Route>

                <Route path="/coacheslist">
                    <PagesWrapper bg1={coachesBG1} bg2={coachesBG2}><Suspense fallback="hay hay"><CoachesList/></Suspense></PagesWrapper>
                </Route>

                <Route path="/coach/:coachId?">
                    <PagesWrapper bg1={coachesBG1} bg2={coachesBG2}><Suspense fallback="hay hay"><CoachContainer/></Suspense></PagesWrapper>
                </Route>

                <Route path="/tournaments">
                        <PagesWrapper bg1={tournamentsBG1} bg2={tournamentsBG1}><Suspense fallback="hay hay"><Tournaments/></Suspense></PagesWrapper>
                </Route>

                <Route path="/login">
                    <Suspense fallback="hay hay"><Login/></Suspense>
                </Route>

                <Route path="/registration">
                    <Suspense fallback="hay hay"><Registration/></Suspense>
                </Route>

                <Route path="/recoverypassword">
                    <Suspense fallback="hay hay"><RecoveryPassword/></Suspense>
                </Route>

                <Route path="/personalforpg">
                    <Suspense fallback="hay hay"><PersonalForPG/></Suspense>
                </Route>

                <Route path="/personalforcoach">
                    <Suspense fallback="hay hay"><PersonalForCoach/></Suspense>
                </Route>

                <Route path="/personalforuser">
                    <Suspense fallback="hay hay"><PersonalForUser/></Suspense>
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

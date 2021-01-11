import {applyMiddleware, combineReducers, createStore} from "redux"
import playgroundsListReducer from "./playgroundsList-reducer";
import playgroundReducer from "./playground-reducer";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import coachesListReducer from "./coaches-reducer";


let reducers = combineReducers({
    playgroundsListPage: playgroundsListReducer,
    playgroundPage: playgroundReducer,
    coachesListPage: coachesListReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store

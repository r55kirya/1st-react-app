import {combineReducers, createStore} from "redux"
import playgroundsReducer from "./playgrounds-reducer";

let reducers = combineReducers({
    playgrounds: playgroundsReducer
})

let store = createStore(reducers)

export default store

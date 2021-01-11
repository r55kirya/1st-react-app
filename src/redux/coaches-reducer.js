import {jsonPlaceHolderAPI} from "../api/api";

const SET_COACHES = 'SET_COACHES'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    coachesList: [],
    isFetching: false
}

const coachesListReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_COACHES : {
            let stateCopy = {...state, coachesList: action.arr}

            return stateCopy
        }

        case TOGGLE_IS_FETCHING : {
            let stateCopy = {...state, isFetching: action.isFetching}

            return stateCopy
        }

        default:
            return state
    }

};

const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}

const setCoachesList = (arr) => {
    return {type: SET_COACHES, arr}
}

export const getCoachesThunkCreator = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        jsonPlaceHolderAPI.getUsers()
            .then(response => {
                dispatch(toggleIsFetching(false))
                dispatch(setCoachesList(response))
            })
    }
}

export default coachesListReducer

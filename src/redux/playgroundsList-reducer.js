const SET_PLAYGROUNDS = 'SET_PLAYGROUNDS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    playgroundsList: [ ],
    isFetching: false
}

const playgroundsListReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_PLAYGROUNDS : {

             let stateCopy = {...state, playgroundsList: action.arr}

            return stateCopy
        }
        case TOGGLE_IS_FETCHING: {

            let stateCopy = {...state, isFetching: action.isFetching}

            return stateCopy
        }
        default:
            return state
    }

};

export const setPlaygroundsList = (arr) => {
     return {type: SET_PLAYGROUNDS, arr}
}
export const toggleIsFetching = (isFetching) => {
     return {type: TOGGLE_IS_FETCHING, isFetching}
}

export default playgroundsListReducer

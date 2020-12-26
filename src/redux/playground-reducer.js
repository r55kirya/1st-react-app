const SET_PLAYGROUND_INFO = 'SET_PLAYGROUND_INFO'

let initialState = {
    playgroundInfo: [ ]
}

const playgroundReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_PLAYGROUND_INFO : {

            let stateCopy = {...state, playgroundInfo: action.arr}

            return stateCopy
        }
        default:
            return state
    }

};

export const setPlaygroundInfo = (arr) => {
    return {type: SET_PLAYGROUND_INFO, arr}
}

export default playgroundReducer

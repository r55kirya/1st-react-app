import * as axios from "axios";

const SET_PLAYGROUNDS = 'SET_PLAYGROUNDS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    playgroundsList: [],
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

const setPlaygroundsList = (arr) => {
    return {type: SET_PLAYGROUNDS, arr}
}
const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}

let items = [
    {
        "id": 1,
        "name": 'OOO Green Isle',
        "adress": 'Старозагородная Роща, 10',
        "phone": '8-966-555-83-69',
        "photos ": []
    },
    {
        "id": 2,
        "name": 'OOO Sfera',
        "adress": '​Омская, 225/3',
        "phone": '8-966-555-74-55',
        "photos ": []
    },
    {
        "id": 3,
        "name": 'OOO Shar',
        "adress": '​Омская, 01/3',
        "phone": '8-966-777-74-55',
        "photos ": []
    },
    {
        "id": 4,
        "name": 'BigBabyTennis',
        "adress": 'Gusarova 27',
        "phone": '8-966-111-74-22',
        "photos ": []
    },
    {
        "id": 5,
        "name": 'OOO Sfera',
        "adress": '​Омская, 225/3',
        "phone": '8-966-555-74-55',
        "photos ": []
    },
    {
        "id": 6,
        "name": 'OOO Sfera',
        "adress": '​Омская, 225/3',
        "phone": '8-966-555-74-55',
        "photos ": []
    },
    {
        "id": 7,
        "name": 'OOO Sfera',
        "adress": '​Омская, 225/3',
        "phone": '8-966-555-74-55',
        "photos ": []
    },
    {
        "id": 8,
        "name": 'OOO Sfera',
        "adress": '​Омская, 225/3',
        "phone": '8-966-555-74-55',
        "photos ": []
    }
] // временно пока нет сервера

export const getUsersThunkCreator = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                dispatch(toggleIsFetching(false))
                // props.setPlaygroundsList(response.data.items)
                dispatch(setPlaygroundsList(items))
            })
    }
}

export default playgroundsListReducer

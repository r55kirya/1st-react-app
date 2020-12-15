const SET_PG = 'SET_PG'

let initialState = {
    playgrounds: [
        {
            name: 'ООО 1Зелёный остров',
            adress: 'Старозагородная Роща, 10',
            link: 'www.green-isle.com',
            price: '600рублей в час',
            photo: 'фотки zo',
            trainers: 'Ксения, Янис, Рома, Рузана'
        },
        {
            name: 'сфера',
            adress: 'адрес2',
            link: 'www.green222.com',
            price: '700рублей в час',
            photo: 'фотки zo22',
            trainers: 'Янис, Рома, Рузана, 22'
        },
        {
            name: 'сфера3333',
            adress: 'адрес333',
            link: 'www.green333.com',
            price: '333рублей в час',
            photo: 'фотки zo3332',
            trainers: 'Янис, Рома, Рузана, 33'
        }
    ],
    ggg: [ ]
}

const playgroundsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PG : {

            let stateCopy = {...state, ggg: action.arr}

            return stateCopy
        }
        default:
            return state
    }

};

export const setPgAC = (arr) => {
     return {type: SET_PG, arr}
}

export default playgroundsReducer

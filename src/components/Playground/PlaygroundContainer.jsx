import React from 'react'
import Playground from "./Playground";

const PlaygroundContainer = () => {

    const playground1 = {
        name: 'Сфера',
        adress: 'Зелёный остров 13 кв 12',
        phone: '655-366',
        about: 'Крутейшие корты, у нас занимаются лучшие из лучших',
        cost: '600р в час',
        workingTime: 'с 8-00 до 23-00',
        social: {vk: 'vk.com', instagram: 'instagram.com', facebook: 'facebook.com'},
        website: 'www.sfera.ru'
    }

    return (
        <Playground {...playground1}/>
    )
}

export default PlaygroundContainer

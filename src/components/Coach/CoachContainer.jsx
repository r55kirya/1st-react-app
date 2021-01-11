import Coach from "./Coach";

const CoachContainer = () => {

    const coach1 = {
        name: 'Балан Олег Сергеевич',
        phone: '8-999-999-99-99',
        aboutMe: 'Я самый лучший тренер на свете бери не пожалеешь брат',
        cost: '800р в час',
        social: {vk: 'vk.com', facebook: 'facebook.com'},
    }

    return (
        <Coach  {...coach1}  />
    )
}

export default CoachContainer

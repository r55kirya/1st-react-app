import s from './Tournaments.module.css'
import anons1 from '../../assets/images/anons1.jpg'
import anons2 from '../../assets/images/anons2.jpg'

const Tournaments = () => {

    return (
        <div className={s.heading}>
            <img src={anons1} />
            <img src={anons2} />
        </div>
    )

}

export default Tournaments

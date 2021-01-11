import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import preloader from '../../assets/images/preloader.gif'
import CardsList from "../common/CardsList/CardsList";
import {getCoachesThunkCreator} from "../../redux/coaches-reducer";

const CoachesCardsContainer = () => {

    const coaches = useSelector(state => state.coachesListPage.coachesList)
    const isFetching = useSelector(state => state.coachesListPage.isFetching)

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getCoachesThunkCreator())
    }, [])

    return (
        <>
            {isFetching
                ? <img src={preloader} alt=""/>
                : <CardsList list={coaches} rootPath="/coach/"/>
            }
        </>
    )
}

export default CoachesCardsContainer

import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getUsersThunkCreator} from "../../redux/playgroundsList-reducer";
import preloader from '../../assets/images/preloader.gif'
import CardsList from "../common/CardsList/CardsList";

const PlaygroundCardsContainer = (props) => {

    let list = useSelector(state => state.playgroundsListPage.playgroundsList)
    let isFetching = useSelector(state => state.playgroundsListPage.isFetching)

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getUsersThunkCreator())
    },[dispatch])

    return (
        <>
            {isFetching
                ? <img src={preloader} alt=""/>
                : <CardsList list={list} rootPath="/playground/"/>
            }
        </>
    )
}


export default PlaygroundCardsContainer

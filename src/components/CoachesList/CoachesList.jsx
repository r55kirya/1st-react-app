import Title from "../common/Title/Title";
import Search from "../common/Search/Search";
import React from "react";
import CoachesCardsContainer from "./CoahesCardsContainer";
// import styles from "./CoachesList.module.scss"


const CoachesList = () => {

    return (
        <div>

                <Title number="03" title="НАШИ ТРЕНЕРА"/>
                <Search/>
                <CoachesCardsContainer/>

        </div>
    )

}

export default CoachesList

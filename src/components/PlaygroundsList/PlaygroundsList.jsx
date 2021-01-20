import PlaygroundCardsContainer from "./PlaygroundCardsContainer";
import Search from "../common/Search/Search";
import Title from "../common/Title/Title";
import React from "react";
// import styles from "./PlaygroundsList.module.scss";

const PlaygroundsList = () => {

    return (

        <div>

                <Title number="02" title="ПЛОЩАДКИ ОМСКА"/>

                <Search/>

                <PlaygroundCardsContainer/>

        </div>

    )

}

export default PlaygroundsList

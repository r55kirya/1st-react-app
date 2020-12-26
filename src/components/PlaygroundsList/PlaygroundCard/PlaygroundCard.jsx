import s from "./PlaygroundCard.module.css";
import React from "react";
import {Link} from "react-router-dom";


const PlaygroundCard = (props) => {

    return <div className={s.row}>
        {
            props.playgrounds.map(playground =>

                <Link to={"/playground/" + playground.id} key={playground.id}>
                        <div>{playground.id} </div>
                        <div>{playground.name} </div>
                </Link>
            )

        }
    </div>
}

export default PlaygroundCard

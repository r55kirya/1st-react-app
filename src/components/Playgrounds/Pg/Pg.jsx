import s from "./Pg.module.css";
import React from "react";


const Pg = (props) => {

    return <div className={s.row}>
        {
            props.playgrounds.map(pg => <div key={pg.id}>
                <div>{pg.id} </div>
                <div>{pg.name} </div>
            </div>)
        }
    </div>

}

export default Pg


// {
//     props.playgrounds.ggg.map(t => {
//         return (
//             <div className={s.column}>
//                 <div>{t.name}</div>
//                 <div>{t.adress}</div>
//                 <div className={s.map}>КАРТА</div>
//                 <a href={t.link}>{t.link}</a>
//                 <div>{t.price}</div>
//                 <div>{t.photo}</div>
//                 <div>{t.trainers}</div>
//             </div>
//         )
//     })
// }

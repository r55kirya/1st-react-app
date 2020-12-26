import React from 'react'

const Playground = (props) => {

    return <div>{props.playgroundNumber}</div>

    // return (
    //     <>
    //         {
    //             props.playgroundInfo.map((info) =>
    //                 <div key={info.userId}>
    //                     <div>{info.userId}</div>
    //                     <div>{info.fullName}</div>
    //                 </div>
    //             )
    //
    //         }
    //     </>
    // )
}

export default Playground

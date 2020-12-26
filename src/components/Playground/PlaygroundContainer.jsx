import React from 'react'
import {connect} from "react-redux";
import Playground from "./Playground";
import {withRouter} from "react-router-dom";
import * as axios from "axios";
import {setPlaygroundInfo} from "../../redux/playground-reducer";

class PlaygroundContainer extends React.Component{

    items = [
        {
            "userId": 1,
            "fullName": 'petya'
        },
        {
            "userId": 2,
            "fullName": 'vasya'
        },
        {
            "userId": 4,
            "fullName": 'ivan'
        }
    ]

    componentDidMount() {
        this.props.setPlaygroundInfo(this.items)

        // let userId = this.props.match.params.userId
        // if (!userId) {
        //     userId = 2
        // }
        //
        // axios.get('https://social-network.samuraijs.com/api/1.0/profile/status/' + userId)
        //     .then(response => {
        //         // this.props.setPlaygroundsList(response.data.items)
        //     })
    }

    render() {
        return <Playground playgroundInfo={this.props.playgroundInfo} playgroundNumber={Number(this.props.match.params.userId)}/>
    }

}

let mapStateToProps = (state) => {
    return {
        playgroundInfo: state.playgroundPage.playgroundInfo
    }
}

let WithUrlDataContainerComponent = withRouter(PlaygroundContainer)

export default connect(mapStateToProps, {setPlaygroundInfo})(WithUrlDataContainerComponent)

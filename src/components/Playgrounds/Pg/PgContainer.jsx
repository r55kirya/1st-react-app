import React from 'react'
import {connect} from "react-redux";
import Pg from "./Pg";
import * as axios from "axios";
import {setPgAC} from "../../../redux/playgrounds-reducer";

class PgContainer extends React.Component {

    obj = {
        items: [
            {
                "name": "testering",
                "id": 13337
            },
            {
                "name": "NataliaKomarova",
                "id": 13336
            }
        ]
    }

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                // this.props.setPg(response.data.items)
                this.props.setPg(this.obj.items)
            })
    }

    render() {
        return <Pg playgrounds={this.props.playgrounds} />
    }
}

let mapStateToProps = (state) => {

    return {
        playgrounds: state.playgrounds.ggg
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setPg: (arr) => {
            dispatch(setPgAC(arr))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PgContainer)

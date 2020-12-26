import React from 'react'
import {connect} from "react-redux";
import PlaygroundCard from "./PlaygroundCard";
import * as axios from "axios";
import {toggleIsFetching, setPlaygroundsList} from "../../../redux/playgroundsList-reducer";
import preloader from '../../../assets/images/preloader.gif'

class PlaygroundCardContainer extends React.Component {

    items = [
        {
            "id": 1,
            "name": 'OOO Green Isle',
            "adress": 'Старозагородная Роща, 10',
            "phone": '8-966-555-83-69',
            "photos ": []
        },
        {
            "id": 2,
            "name": 'OOO Sfera',
            "adress": '​Омская, 225/3',
            "phone": '8-966-555-74-55',
            "photos ": []
        },
        {
            "id": 3,
            "name": 'OOO Shar',
            "adress": '​Омская, 01/3',
            "phone": '8-966-777-74-55',
            "photos ": []
        },
        {
            "id": 4,
            "name": 'BigBabyTennis',
            "adress": 'Gusarova 27',
            "phone": '8-966-111-74-22',
            "photos ": []
        },
    ]


    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.toggleIsFetching(false)
                // this.props.setPlaygroundsList(response.data.items)
                this.props.setPlaygroundsList(this.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching
                ? <img src={ preloader } alt=""/>
                : <PlaygroundCard playgrounds={this.props.playgrounds}/>
            }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        playgrounds: state.playgroundsListPage.playgroundsList,
        isFetching: state.playgroundsListPage.isFetching
    }
}

export default connect(mapStateToProps, {setPlaygroundsList, toggleIsFetching})(PlaygroundCardContainer)

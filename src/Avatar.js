import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Avatar.css';
import AvatarList from './AvatarList';
class Avatar extends Component {

    constructor() {
        super();
        this.state = {
            name: " Welcome to Avatar World"
        }
    }
    nameChange() {
        this.setState ({
            name: "Subcribe  to My Channel"
        })
    }
    render() {


        const avatarArrayList = [
            {
                id: 1,
                name: "Sayali",
                work: "web developer"
            },
            {
                id: 2,
                name: "Sanchit",
                work: "Backend"
            },
            {
                id: 3,
                name: "Yuraj",
                work: "Frontend"
            },
            {
                id: 4,
                name: "Diyu",
                work: "Full Stack"
            }]
        const arrayAvatarCard = avatarArrayList.map((avatarCard, i) => {
            return <AvatarList key={i} id={avatarArrayList[i].id}
                name={avatarArrayList[i].name}
                work={avatarArrayList[i].work} />
        })

        return <div className="mainDivStyle"> 
            <h1> {this.state.name}</h1>
            {arrayAvatarCard}
            <button onClick={() => this.nameChange()}>Subcribe</button>
        </div>

    }
}

export default Avatar;
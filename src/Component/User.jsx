import React, { Component } from 'react';
import '../Css/User.css';
import { getAllUser } from '../Services/UserServices';
import {Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userListArray: []
        }
        this.userList = this.userList.bind(this)
    }
    componentDidMount(){
        this.userList();
    }
    userList(){
        var userToken = localStorage.getItem('token');

        getAllUser(userToken).then(response => {
            console.log(response.data);
            console.log(response.data.message);
            this.setState({
                userListArray: response.data.message
            })

        })

        console.log("hello" + this.state.userListArray);

    }

   

    render() {
        const arrayList = this.state.userListArray;
        return <div className="container">
            <h2> User List</h2>
            <div>
                <table className="table" >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                                arrayList.map(user =>
                                <tr key={user.userId}>
                                    <td>{user.userId}</td>
                                    <td>{user.fName} {user.mName} {user.lName}</td>
                                    <td><Link to={`/headerBar/user/${this.props.name}/${user.userId}`}>{user.userEmail}</Link></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    }
}

const mapStateToProps = state =>{
    console.log(state.name);
    return{
        name : state.name,
      }
}
export default connect(mapStateToProps)(User);
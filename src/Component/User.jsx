import React, { Component } from "react";
import "../Css/User.css";
import { getAllUser } from "../Services/UserServices";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchNewUser } from "../ReduxConnection/action.jsx";
class User extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     userListArray: []
    // }
    this.userList = this.userList.bind(this);
  }
  componentDidMount() {
    this.userList();
  }
  userList() {
    var userToken = localStorage.getItem("token");
    console.log(userToken);
    getAllUser(userToken).then((response) => {
      console.log("hiii", response.data);
      console.log(response.data.message);
      this.props.fetch(response.data.data);
      //  console.log("redux",this.props.users);
      // this.setState({
      //     userListArray: response.data.message
      // })
    });
  }

  render() {
    const arrayList = this.props.users;
    return (
      <div className="container">
        <h2> User List</h2>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {arrayList.map((add, i) => (
                <tr key={i}>
                  <td>{add.userId}</td>
                  <td>
                    {add.fName} {add.mName} {add.lName}
                  </td>
                  <td>
                    <Link to={`/headerbar/user/${add.userId}`}>
                      {add.userEmail}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userdata.users,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetch: (users) => dispatch(fetchNewUser(users)),
});
export default connect(mapStateToProps, mapDispatchToProps)(User);

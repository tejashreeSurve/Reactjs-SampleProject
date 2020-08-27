import React, { Component, useEffect } from "react";
import "../Css/User.css";
import { getAllUser, deleteUser } from "../Services/UserServices";
import { Button, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
  const reduxResult = useSelector((state) => state);
  console.log("Hello", reduxResult);
  const { userListData, userDetails } = reduxResult;
  console.log("list of user ", reduxResult);
  const reduxDispatch = useDispatch();

  useEffect(() => {
    userList();
  }, []);
  const userList = () => {
    var userToken = localStorage.getItem("token");
    console.log(userToken);
    getAllUser(userToken).then((response) => {
      console.log("hiii", response.data);
      console.log(response.data.message);
      reduxDispatch({
        type: "SET_USERSLIST",
        payload: response.data.data,
      });
    });
  };

  const deleteUserFunc = (userId) => {
    let performDelete = window.confirm(
      "Are you sure you want to delete this record ?"
    );
    if (performDelete) {
      console.log("Hello user", userId);
      var userToken = localStorage.getItem("token");
      deleteUser(userId, userToken).then((response) => {
        console.log("Delete Response", response.data);
        console.log(response.data.message);
        userList();
      });
    }
  };

  const arrayList = userListData;
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
              <th>Delete</th>
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
                <td>
                  <Button
                    startIcon={<DeleteIcon />}
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteUserFunc(add.userId)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default User;

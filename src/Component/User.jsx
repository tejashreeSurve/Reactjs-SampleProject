import React, { Component, useEffect } from "react";
import "../Css/User.css";
import { Button, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserData, deleteUserData } from "../Action/UserAction.jsx";

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
    const userToken = localStorage.getItem("token");
    console.log(userToken);
    reduxDispatch(getAllUserData(userToken));
  };

  const deleteUserFunc = (userId) => {
    let performDelete = window.confirm(
      "Are you sure you want to delete this record ?"
    );
    if (performDelete) {
      console.log("Hello user", userId);
      const userToken = localStorage.getItem("token");
      let deleteVariables = {};

      deleteVariables.userId = userId;
      deleteVariables.userToken = userToken;
      reduxDispatch(deleteUserData(deleteVariables));
      userList();
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

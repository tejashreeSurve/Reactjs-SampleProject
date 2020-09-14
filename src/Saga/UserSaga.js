import { takeLatest, call, put, all } from "redux-saga/effects";
import { deleteUser, loginUser } from "../Services/UserServices";
import { addUser, getAllUser } from "../Services/UserServices";
import {
  setFname,
  setIsverified,
  setLname,
  setMname,
  setPassword,
  setUserEmail,
} from "../Action/EditAction.jsx";
import { getUser, update } from "../Services/UserServices";
import React, { useEffect, useReducer } from "react";
import EditReducer, { initialState } from "../ReduxConnection/EditReducer.jsx";

function* loginSaga(action) {
  try {
    console.log(action);
    const response = yield call(loginUser, action.payload);
    console.log(response);
    console.log("data", response.data.data);
    yield put({
      type: "SET_USERDETAILS",
      payload: response.data.data,
    });
    yield localStorage.setItem("token", response.data.message);
    yield;
    yield alert(`Login Successfully`);
    yield console.log(localStorage.token);
  } catch (error) {
    console.log(error);
    yield alert(`Login Failed`);
  }
}

function* signForm(action) {
  try {
    console.log(action);
    const response = yield call(addUser, action.payload);
    console.log(response, "User Registered successfully!!");
    yield alert(`User Registered successfully`);
  } catch (error) {
    console.log(error);
    console.log("Error", error.response);
    console.log(error.response.data.message, "User Registration failed");
    yield alert(error.response.data.message);
  }
}
function* getAll(action) {
  try {
    console.log("action", action);
    const response = yield call(getAllUser, action.payload);
    console.log("hiii", response.data);
    console.log(response.data.message);
    yield put({
      type: "SET_USERSLIST",
      payload: response.data.data,
    });
  } catch (error) {
    console.log(error);
  }
}
function* deleteUserSaga(action) {
  try {
    console.log(action.payload);
    const response = yield call(
      deleteUser,
      action.payload.userId,
      action.payload.userToken
    );
    console.log("Delete Response", response.data);
    console.log(response.data.message);
    const deleteResponse = yield call(getAllUser, action.payload.userToken);
    console.log("hiii", deleteResponse.data);
    console.log(deleteResponse.data.message);
    yield put({
      type: "SET_USERSLIST",
      payload: deleteResponse.data.data,
    });
  } catch (error) {
    console.log(error);
  }
}

function* getUserSaga(action) {
  try {
    console.log(action.payload);
    const response = yield call(
      getUser,
      action.payload.userId,
      action.payload.userToken
    );
    console.log(response.data.data.fName);
    yield action.payload.dispatch(setFname(response.data.data.fName));
    yield action.payload.dispatch(setMname(response.data.data.mName));
    yield action.payload.dispatch(setLname(response.data.data.lName));
    yield action.payload.dispatch(setUserEmail(response.data.data.userEmail));
    yield action.payload.dispatch(setPassword(response.data.data.password));
    yield action.payload.dispatch(setIsverified(response.data.data.isVerified));
  } catch (error) {
    console.log(error);
  }
}
export default function* UserSaga() {
  yield all([
    takeLatest("LOGIN_ACTION", loginSaga),
    takeLatest("SIGN_UP_FORM", signForm),
    takeLatest("GET_ALL_USER", getAll),
    takeLatest("DELETE_USER", deleteUserSaga),
    takeLatest("GET_USER_BY_ID", getUserSaga),
  ]);
}

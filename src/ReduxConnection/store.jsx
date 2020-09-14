import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ReduxReducer from "./ReduxReducer.jsx";
import createSagaMiddleware from "redux-saga";
import UserSaga from "../Saga/UserSaga.js";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  ReduxReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(UserSaga);
export default store;

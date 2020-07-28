import {createStore} from 'redux';
import userDataReducer from '../ReduxConnection/reducer.jsx';



const store= createStore(userDataReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;

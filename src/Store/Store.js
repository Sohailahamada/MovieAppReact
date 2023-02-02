import {createStore ,applyMiddleware} from "redux"
// import Reducer from "./Reducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import CompineReducers from "./reducers/CompineReducers";
import thunk from "redux-thunk";


const store = createStore(CompineReducers, composeWithDevTools(applyMiddleware(thunk)))


export default store;
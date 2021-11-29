import { combineReducers } from "redux";
import TodoReducer from "./TodoReducer";
const rootreducer=combineReducers({
    todo:TodoReducer
})
export default rootreducer
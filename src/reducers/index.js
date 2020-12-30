import { combineReducers } from 'redux';
import userReducer from "./userReducer";
import ordersReducer from "./ordersReducer";

export default combineReducers({
  userReducer,
  ordersReducer
});

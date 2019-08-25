//combineReducer needed to combine all reducers
import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  //key: reducer
  user: userReducer,
  cart: cartReducer
});

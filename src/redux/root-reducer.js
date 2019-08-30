//combineReducer needed to combine all reducers
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
//local storage redux-persist/lib/storage
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  //only reducer we want to persist is the cart, insert as string
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  //key: reducer
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);

import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger"; // ✅ Import Redux Logger
import registerReducer from "./reducers/register";
import authReducer from "./reducers/auth";
import profileReducer from "./reducers/profile";
import TransactionReducer from "./reducers/transaction";
import topupReducer from "./reducers/topup";
import balanceReducer from "./reducers/balance";
import serviceReducer from "./reducers/service";

const appReducer = combineReducers({
    register: registerReducer, 
    login: authReducer,
    profile: profileReducer,
    transaction:  TransactionReducer,
    topup: topupReducer,
    balance: balanceReducer,
    service: serviceReducer
});

const rootReducer = (state, action) => {
    if (action.type === "auth/logout") {
      state = null; // Reset state ke awal saat logout
    }
    return appReducer(state, action);
  };
  
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
export default store;
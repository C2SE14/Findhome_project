import authReducer from "./authReducer";
import useReducer from "./userReducer";
import postRealEstateReducer from "./postRealEstateReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";

const commonConfig = {
  storage,
  stateReconciler: autoMergeLevel2,
};

const authConfig = {
  ...commonConfig,
  key: "auth",
  whitelist: ["isLoggedIn", "token"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  user: useReducer,
  postRealEstate: postRealEstateReducer,
});

export default rootReducer;

// whitelist để chọn ra những state nào của reducer được lưu ở localstorage
// blacklist thì chọn ra những state nào của reducer không lưu ở localstorage.
// Nếu trong config không để whitelist or blacklist thì mặc định nó sẽ lưu hết state của reducer đó dưới localstorage luôn
// reducer nào muốn persist thì bọc nó trong hàm persistReducer cùng với config, không thì khỏi

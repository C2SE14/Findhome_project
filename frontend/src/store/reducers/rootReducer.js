import authReducer from "./authReducer";
import userReducer from "./userReducer";
import postRealEstateReducer from "./postRealEstateReducer";
import auctionReducer from "./auctionReducer";
import favoritesReducer from "./favoritesReducer";
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
  whitelist: ["isLoggedIn", "token", "userId"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  user: userReducer,
  postRealEstate: postRealEstateReducer,
  favoritesReducer: favoritesReducer,
  auctionReducer: auctionReducer,
});

export default rootReducer;

// whitelist để chọn ra những state nào của reducer được lưu ở localstorage
// blacklist thì chọn ra những state nào của reducer không lưu ở localstorage.
// Nếu trong config không để whitelist or blacklist thì mặc định nó sẽ lưu hết state của reducer đó dưới localstorage luôn
// reducer nào muốn persist thì bọc nó trong hàm persistReducer cùng với config, không thì khỏi

import actionTypes from "../actions/actionTypes";

const initState = {
  auctions: [],
  msg: "",
  loading: false,
};

const auctionReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_AUCTION:
      return {
        ...state,
        posts: action.auctions || [],
        msg: action.msg || "",
      };
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default auctionReducer;

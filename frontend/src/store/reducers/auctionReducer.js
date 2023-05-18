import actionTypes from "../actions/actionTypes";

const initState = {
  auctions: [],
  msg: "",
  loading: false,
  auction: {},
  registrationSuccess: false,
  registrationError: "",
};

const auctionReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_AUCTION:
      return {
        ...state,
        auctions: action.auctions || [],
        msg: action.msg || "",
      };

    case actionTypes.GET_AUCTION_BY_ID:
      return {
        ...state,
        auction: action.auction || {},
        msg: action.msg || "",
      };
    case actionTypes.REGISTER_AUCTION_SUCCESS:
      return {
        ...state,
        registrationSuccess: true,
        registrationError: "",
      };

    case actionTypes.REGISTER_AUCTION_FAILURE:
      return {
        ...state,
        registrationSuccess: false,
        registrationError: action.error || "",
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

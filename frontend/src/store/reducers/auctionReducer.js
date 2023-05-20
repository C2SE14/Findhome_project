import actionTypes from "../actions/actionTypes";

const initState = {
  auctions: [],
  msg: "",
  loading: false,
  auction: {},
  registrationSuccess: false,
  registrationError: "",
  listBargain: [],
};

const auctionReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_AUCTION:
      return {
        ...state,
        auctions: action.auctions || [],
        msg: action.msg || "",
      };
    case actionTypes.GET_BARGAINAUCTION_BY_ID:
      return {
        ...state,
        listBargain: action.listBargain || [],
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
    case actionTypes.POST_BARGAIN_AUCTION_SUCCESS:
      return {
        ...state,
        // Cập nhật trạng thái sau khi trả giá thành công
      };

    case actionTypes.POST_BARGAIN_AUCTION_FAILER:
      return {
        ...state,
        // Cập nhật trạng thái khi trả giá thất bại
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

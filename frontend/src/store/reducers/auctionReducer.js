import actionTypes from "../actions/actionTypes";

const initState = {
  auctions: [],
  msg: "",
  loading: false,
  auction: {},
  registrationSuccess: false,
  registrationError: "",
  listBargain: [],
  allRegisterAuction: [],
  auctionResult: [],
};

const auctionReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_AUCTION:
      return {
        ...state,
        auctions: action.auctions || [],
        msg: action.msg || "",
      };

    case actionTypes.GET_ALL_AUCTION_RESULT:
      return {
        ...state,
        auctionResult: action.auctionResult || [],
        msg: action.msg || "",
      };

    case actionTypes.GET_ALL_REGISTER_AUCTION:
      return {
        ...state,
        allRegisterAuction: action.allRegisterAuction || [],
        msg: action.msg || "",
      };

    case actionTypes.DELETE_APPROVAL_AUCTION_SUCCESS:
      return {
        ...state,
        auctions: state.auctions.filter((i) => i.id !== action.id),
        msg: "",
      };
    case actionTypes.DELETE_APPROVAL_AUCTION_FAILER:
      return {
        ...state,
        msg: action.errorMsg,
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

    case actionTypes.APPROVAL_AUCTION_SUCCESS:
      return {
        ...state,
        auction: action.auction,
        msg: "",
      };

    case actionTypes.APPROVAL_AUCTION_FAILER:
      return {
        ...state,
        msg: action.errorMsg,
      };

    case actionTypes.AUCTION_RESULT_SUCCESS:
      return {
        ...state,
        auctionResult: action.auctionResult,
        msg: "",
      };

    case actionTypes.AUCTION_RESULT_FAILER:
      return {
        ...state,
        msg: action.errorMsg,
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

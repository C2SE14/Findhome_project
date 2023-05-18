import actionTypes from "../actions/actionTypes";

const initState = {
  userData: {},
  listUserPostNew: [],
  listUserPostAuction: [],
  listUserRegisterAuction: [],
  msg: "",
  loading: false,
  users: [],
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_CURRENT:
      return {
        ...state,
        userData: action.userData || {},
        msg: action.msg || "",
      };
    case actionTypes.GET_ALL_USER:
      return {
        ...state,
        users: action.users || [],
        msg: action.msg || "",
      };
    case actionTypes.GET_REAL_ESTATE_BY_USERID:
      return {
        ...state,
        listUserPostNew: action.listUserPostNew || [],
        msg: action.msg || "",
      };
    case actionTypes.GET_AUCTION_REGISTER_OF_USER:
      return {
        ...state,
        listUserRegisterAuction: action.listUserRegisterAuction || [],
        msg: action.msg || "",
      };
    case actionTypes.GET_AUCTION_BY_USERID:
      return {
        ...state,
        listUserPostAuction: action.listUserPostAuction || [],
        msg: action.msg || "",
      };
    case actionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        userData: action.userData,
        msg: "",
      };
    case actionTypes.UPDATE_USER_FAILURE:
      return {
        ...state,
        msg: action.errorMsg,
      };
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case actionTypes.DELETE_REAL_ESTATE_BY_USERID_SUCCESS:
      return {
        ...state,
        listUserPostNew: state.listUserPostNew.filter(
          (post) => post.id !== action.realEstateId
        ),
        msg: "",
      };
    case actionTypes.DELETE_REAL_ESTATE_BY_USERID_FAILURE:
      return {
        ...state,
        msg: action.errorMsg,
      };
    default:
      return state;
  }
};

export default userReducer;

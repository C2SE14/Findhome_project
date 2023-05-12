import actionTypes from "../actions/actionTypes";

const initState = {
  posts: [],
  msg: "",
  post: {},
  loading: false,
  dataByType: [],
  filterDatas: [],
};

const postRealEstateReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_POST_REALESTATE:
      return {
        ...state,
        posts: action.posts || [],
        msg: action.msg || "",
      };
    case actionTypes.GET_POST_REALESTATE_BY_ID:
      return {
        ...state,
        post: action.post || {},
        msg: action.msg || "",
      };
    case actionTypes.GET_REAL_ESTATE_BY_BUSSINESS_TYPE_ID:
      return {
        ...state,
        dataByType: action.dataByType || [],
        msg: action.msg || "",
      };
    case actionTypes.GET_FILTER_REAL_ESTATE_SUCCESS:
      return {
        ...state,
        filterDatas: action.filterDatas,
        msg: "",
      };
    case actionTypes.GET_FILTER_REAL_ESTATE_FAILURE:
      return {
        ...state,
        msg: action.errorMsg,
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

export default postRealEstateReducer;

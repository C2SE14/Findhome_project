import actionTypes from "./actionTypes";
import {
  apiDeleteRealEstateAdmin,
  apiGetAllPostRealEstate,
  apiGetFilterRealEstate,
  apiGetRealEstateByBusinessTypeId,
  apiGetRealEstateById,
  apiGetRealEstateByTypeDetailId,
} from "../../services/postRealEstate";
export const getAllPostRealEstate = () => async (dispatch) => {
  try {
    const response = await apiGetAllPostRealEstate();
    if (response?.status === 200) {
      dispatch({
        type: actionTypes.GET_POST_REALESTATE,
        posts: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POST_REALESTATE,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POST_REALESTATE,
      posts: null,
    });
  }
};

export const getRealEstateById = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.SET_LOADING, loading: true });
  try {
    const response = await apiGetRealEstateById(id);
    if (response.status === 200) {
      dispatch({
        type: actionTypes.GET_POST_REALESTATE_BY_ID,
        post: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POST_REALESTATE_BY_ID,
        msg: response.data.statusText,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POST_REALESTATE_BY_ID,
      post: null,
    });
  } finally {
    dispatch({ type: actionTypes.SET_LOADING, loading: false });
  }
};

export const getRealEstateByBusinessTypeId = (id) => async (dispatch) => {
  try {
    const response = await apiGetRealEstateByBusinessTypeId(id);
    if (response.status === 200) {
      dispatch({
        type: actionTypes.GET_REAL_ESTATE_BY_BUSSINESS_TYPE_ID,
        dataByType: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_REAL_ESTATE_BY_BUSSINESS_TYPE_ID,
        msg: response.data.statusText,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_REAL_ESTATE_BY_BUSSINESS_TYPE_ID,
      dataByType: null,
    });
  }
};

export const getRealEstateByTypeDetailId = (id) => async (dispatch) => {
  try {
    const response = await apiGetRealEstateByTypeDetailId(id);
    if (response.status === 200) {
      dispatch({
        type: actionTypes.GET_REAL_ESTATE_BY_TYPE_DETAILID,
        dataDetailId: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_REAL_ESTATE_BY_TYPE_DETAILID,
        msg: response.data.statusText,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_REAL_ESTATE_BY_TYPE_DETAILID,
      dataDetailId: null,
    });
  }
};

export const getFilterRealEstate = (body) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_LOADING, loading: true });

    const response = await apiGetFilterRealEstate(body);
    if (response.status === 200) {
      dispatch({
        type: actionTypes.GET_FILTER_REAL_ESTATE_SUCCESS,
        filterDatas: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_FILTER_REAL_ESTATE_FAILURE,
        errorMsg: response.data.statusText,
      });
    }

    dispatch({ type: actionTypes.SET_LOADING, loading: false });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_FILTER_REAL_ESTATE_FAILURE,
      errorMsg: error.message,
    });

    dispatch({ type: actionTypes.SET_LOADING, loading: false });
  }
};
//Xoá nhà đất bán, nhà đất mua của admin
export const deleteRealEstateAdmin = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_LOADING, loading: true });

    const response = await apiDeleteRealEstateAdmin(id);
    if (response.status === 200) {
      dispatch({
        type: actionTypes.DELETE_REALESTATE_TYPE_SUCCESS,
        dataByType: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.DELETE_REALESTATE_TYPE_FAILER,
        errorMsg: response.data.statusText,
      });
    }

    dispatch({ type: actionTypes.SET_LOADING, loading: false });
  } catch (error) {
    dispatch({
      type: actionTypes.DELETE_REALESTATE_TYPE_FAILER,
      errorMsg: error.message,
    });

    dispatch({ type: actionTypes.SET_LOADING, loading: false });
  }
};

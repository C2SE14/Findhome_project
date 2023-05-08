import actionTypes from "./actionTypes";
import {
  apiGetAllPostRealEstate,
  apiGetRealEstateByBusinessTypeId,
  apiGetRealEstateById,
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

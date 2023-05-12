import actionTypes from "./actionTypes";
import {
  apiGetRealEstateByUserId,
  apiGetUserById,
  apiUpdateUser,
} from "../../services/user";

export const getUserById = (id) => async (dispatch) => {
  try {
    const response = await apiGetUserById(id);
    if (response.status === 200) {
      dispatch({
        type: actionTypes.GET_CURRENT,
        userData: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_CURRENT,
        msg: response.data.statusText,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CURRENT,
      dataByType: null,
    });
  }
};

export const getRealEstateByUserId = (id) => async (dispatch) => {
  try {
    const response = await apiGetRealEstateByUserId(id);
    if (response.status === 200) {
      dispatch({
        type: actionTypes.GET_REAL_ESTATE_BY_USERID,
        data: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_REAL_ESTATE_BY_USERID,
        msg: response.data.statusText,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_REAL_ESTATE_BY_USERID,
      dataByType: null,
    });
  }
};
export const updateUser = (body) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_LOADING, loading: true });

    const response = await apiUpdateUser(body);
    if (response.status === 200) {
      dispatch({
        type: actionTypes.UPDATE_USER_SUCCESS,
        userData: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.UPDATE_USER_FAILURE,
        errorMsg: response.data.statusText,
      });
    }

    dispatch({ type: actionTypes.SET_LOADING, loading: false });
  } catch (error) {
    dispatch({
      type: actionTypes.UPDATE_USER_FAILURE,
      errorMsg: error.message,
    });

    dispatch({ type: actionTypes.SET_LOADING, loading: false });
  }
};

import actionTypes from "./actionTypes";
import {
  apiDeleteRealEstate,
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

export const deleteRealEstateByUserId =
  (realEstateId, userId) => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.SET_LOADING, loading: true });

      const response = await apiDeleteRealEstate(realEstateId, userId);
      if (response.status === 200) {
        dispatch({
          type: actionTypes.DELETE_REAL_ESTATE_BY_USERID_SUCCESS,
          realEstateId: realEstateId,
        });
      } else {
        dispatch({
          type: actionTypes.DELETE_REAL_ESTATE_BY_USERID_FAILURE,
          errorMsg: response.data.statusText,
        });
      }

      dispatch({ type: actionTypes.SET_LOADING, loading: false });
    } catch (error) {
      dispatch({
        type: actionTypes.DELETE_REAL_ESTATE_BY_USERID_FAILURE,
        errorMsg: error.message,
      });

      dispatch({ type: actionTypes.SET_LOADING, loading: false });
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

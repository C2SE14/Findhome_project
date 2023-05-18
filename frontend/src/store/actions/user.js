import actionTypes from "./actionTypes";
import {
  apiDeleteRealEstate,
  apiGetAllUser,
  apiGetAuctionPostOfUser,
  apiGetAuctionRegisterOfUser,
  apiGetRealEstateByUserId,
  apiGetUserById,
  apiUpdateUser,
} from "../../services/user";

export const getAllUser = () => async (dispatch) => {
  try {
    const response = await apiGetAllUser();
    if (response?.status === 200) {
      dispatch({
        type: actionTypes.GET_ALL_USER,
        users: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_ALL_USER,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ALL_USER,
      users: null,
    });
  }
};

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
        listUserPostNew: response.data,
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
      listUserPostNew: null,
    });
  }
};

// Danh sách đăng đấu giá của user
export const getAuctionPostOfUser = (id) => async (dispatch) => {
  try {
    const response = await apiGetAuctionPostOfUser(id);
    if (response.status === 200) {
      dispatch({
        type: actionTypes.GET_AUCTION_BY_USERID,
        listUserPostAuction: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_AUCTION_BY_USERID,
        msg: response.data.statusText,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_AUCTION_BY_USERID,
      listUserPostAuction: null,
    });
  }
};
// Danh sách đăng kí đấu giá CỦA USER

export const getAuctionRegisterOfUser = (id) => async (dispatch) => {
  try {
    const response = await apiGetAuctionRegisterOfUser(id);
    if (response.status === 200) {
      dispatch({
        type: actionTypes.GET_AUCTION_REGISTER_OF_USER,
        listUserRegisterAuction: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_AUCTION_REGISTER_OF_USER,
        msg: response.data.statusText,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_AUCTION_REGISTER_OF_USER,
      listUserRegisterAuction: null,
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

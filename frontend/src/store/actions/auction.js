import {
  apiGetAuctionById,
  apiPostRegisterAuction,
  apigetAllAuction,
} from "../../services/auction";
import actionTypes from "./actionTypes";

export const getAllAuction = () => async (dispatch) => {
  try {
    const response = await apigetAllAuction();
    if (response.status === 200) {
      dispatch({
        type: actionTypes.GET_ALL_AUCTION,
        auctions: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_ALL_AUCTION,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ALL_AUCTION,
      auctions: null,
    });
  }
};
export const getAuctionById = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.SET_LOADING, loading: true });
  try {
    const response = await apiGetAuctionById(id);
    if (response.status === 200) {
      dispatch({
        type: actionTypes.GET_AUCTION_BY_ID,
        auction: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_AUCTION_BY_ID,
        msg: response.data.statusText,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_AUCTION_BY_ID,
      auction: null,
    });
  } finally {
    dispatch({ type: actionTypes.SET_LOADING, loading: false });
  }
};

export const registerAuction = (body) => async (dispatch) => {
  dispatch({ type: actionTypes.SET_LOADING, loading: true });
  try {
    const response = await apiPostRegisterAuction(body);
    if (response.status === 200) {
      dispatch({ type: actionTypes.REGISTER_AUCTION_SUCCESS });
    } else {
      dispatch({
        type: actionTypes.REGISTER_AUCTION_FAILURE,
        msg: response.data.statusText,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.REGISTER_AUCTION_FAILURE,
      error: error.message,
    });
  } finally {
    dispatch({ type: actionTypes.SET_LOADING, loading: false });
  }
};

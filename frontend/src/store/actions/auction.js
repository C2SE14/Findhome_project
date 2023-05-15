import { apigetAllAuction } from "../../services/auction";
import actionTypes from "./actionTypes";

export const getAllAuction = () => async (dispatch) => {
  try {
    const response = await apigetAllAuction();
    console.log(response);
    if (response?.status === 200) {
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

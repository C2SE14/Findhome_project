import {
  apiDeleteAuction,
  apiGetAllAuctionResult,
  apiGetAllRegisterAuction,
  apiGetAuctionById,
  apiGetBargainAuctionById,
  apiPostActionResult,
  apiPostBargainAuction,
  apiPostRegisterAuction,
  apiPutAuction,
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

// Trả giá phần đấu giá

export const postBargainAuction = (body) => async (dispatch) => {
  dispatch({ type: actionTypes.SET_LOADING, loading: true });
  try {
    const response = await apiPostBargainAuction(body);
    if (response.status === 200) {
      dispatch({ type: actionTypes.POST_BARGAIN_AUCTION_SUCCESS });
    } else {
      dispatch({
        type: actionTypes.POST_BARGAIN_AUCTION_FAILER,
        msg: response.data.statusText,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.POST_BARGAIN_AUCTION_FAILER,
      error: error.message,
    });
  } finally {
    dispatch({ type: actionTypes.SET_LOADING, loading: false });
  }
};

// Lấy danh sách trả giá của người tham gia đấu giá
export const getBargainAuctionById = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.SET_LOADING, loading: true });
  try {
    const response = await apiGetBargainAuctionById(id);
    if (response.status === 200) {
      dispatch({
        type: actionTypes.GET_BARGAINAUCTION_BY_ID,
        listBargain: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_BARGAINAUCTION_BY_ID,
        msg: response.data.statusText,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_BARGAINAUCTION_BY_ID,
      listBargain: null,
    });
  } finally {
    dispatch({ type: actionTypes.SET_LOADING, loading: false });
  }
};

// PHÊ DUỴET TIN ĐĂNG
export const approvalAuction = (body) => async (dispatch) => {
  try {
    const response = await apiPutAuction(body);
    if (response.status === 200) {
      dispatch({
        type: actionTypes.APPROVAL_AUCTION_SUCCESS,
        auction: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.APPROVAL_AUCTION_FAILER,
        errorMsg: response.data.statusText,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.APPROVAL_AUCTION_FAILER,
      errorMsg: error.message,
    });
  }
};

//lấy tất cả danh sách đăng kí của người dùng
export const getAllRegisterAuction = () => async (dispatch) => {
  try {
    const response = await apiGetAllRegisterAuction();
    if (response?.status === 200) {
      dispatch({
        type: actionTypes.GET_ALL_REGISTER_AUCTION,
        allRegisterAuction: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_ALL_REGISTER_AUCTION,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ALL_REGISTER_AUCTION,
      allRegisterAuction: null,
    });
  }
};
//Xoá phê duyệt bất động sản đấu giá
export const deleteAuctionApproval = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_LOADING, loading: true });

    const response = await apiDeleteAuction(id);
    if (response.status === 200) {
      dispatch({
        type: actionTypes.DELETE_APPROVAL_AUCTION_SUCCESS,
        auctions: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.DELETE_APPROVAL_AUCTION_FAILER,
        errorMsg: response.data.statusText,
      });
    }

    dispatch({ type: actionTypes.SET_LOADING, loading: false });
  } catch (error) {
    dispatch({
      type: actionTypes.DELETE_APPROVAL_AUCTION_FAILER,
      errorMsg: error.message,
    });

    dispatch({ type: actionTypes.SET_LOADING, loading: false });
  }
};

//
// kết quả đấu giá
export const postActionResult = (body) => async (dispatch) => {
  try {
    const response = await apiPostActionResult(body);
    if (response.status === 200) {
      dispatch({
        type: actionTypes.AUCTION_RESULT_SUCCESS,
        auctionResult: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.AUCTION_RESULT_FAILER,
        errorMsg: response.data.statusText,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.AUCTION_RESULT_FAILER,
      errorMsg: error.message,
    });
  }
};

// Láy tất cả kết quả đấu giá
export const getAllAuctionResult = () => async (dispatch) => {
  try {
    const response = await apiGetAllAuctionResult();
    if (response.status === 200) {
      dispatch({
        type: actionTypes.GET_ALL_AUCTION_RESULT,
        auctionResult: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_ALL_AUCTION_RESULT,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ALL_AUCTION_RESULT,
      auctionResult: null,
    });
  }
};

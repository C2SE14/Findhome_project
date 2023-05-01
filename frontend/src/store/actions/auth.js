import actionTypes from "./actionTypes";
import { apiRegister, apiLogin } from "../../services/auth";

export const register = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_LOADING }); // bắt đầu loading
    const response = await apiRegister(payload);
    if (response?.data.messageSuccess) {
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        data: response.data.token,
      });
    } else {
      dispatch({
        type: actionTypes.REGISTER_FAIL,
        data: response.data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.REGISTER_FAIL,
      data: null,
    });
  }
};
export const login = (payload) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SET_LOADING }); // bắt đầu loading

    const response = await apiLogin(payload);

    if (response?.data.id) {
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        data: response.data.accessToken,
      });
    } else {
      dispatch({
        type: actionTypes.LOGIN_FAIL,
        data: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      data: null,
    });
  }
};

export const logout = () => ({
  type: actionTypes.LOGOUT,
});

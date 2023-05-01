import axiosConfig from "../config/axiosConfig";
import { toast } from "react-toastify";

export const apiRegister = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: "/api/auth/signupAccount",
        data: payload,
      });
      resolve(response);
      toast.success("Đăng kí thành công", { autoClose: 3000 });
    } catch (error) {
      reject(error);
      toast.error(error.response.data.message);
    }
  });
export const apiLogin = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: "/api/auth/signin",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
      toast.error("Email hoặc mật khẩu không chính xác!");
    }
  });

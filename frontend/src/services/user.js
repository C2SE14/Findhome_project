import axiosConfig from "../config/axiosConfig";

export const apiGetUserById = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `/api/user/${id}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetRealEstateByUserId = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `/api/user/getRealEstateByUserId/${id}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiUpdateUser = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "put",
        url: `/api/user/updateUser`,
        data: body,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

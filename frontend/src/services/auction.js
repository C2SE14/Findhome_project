import axiosConfig from "../config/axiosConfig";

export const apigetAllAuction = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "/api/auction/getAllAuction",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

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

export const apiGetAuctionById = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `/api/auction/getAuctionById/${id}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiPostRegisterAuction = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: `/api/auctionRegistration/addAuctionRegistration`,
        data: body,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

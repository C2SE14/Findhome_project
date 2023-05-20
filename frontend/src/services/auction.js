import axiosConfig from "../config/axiosConfig";

// Lây tất cả đấu giá
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

// Lây đấu giá theo id
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

// Đăng kí đấu giá
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
// Trả giá phần đấu giá
export const apiPostBargainAuction = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: `/api/auctionRoom/saveTheBid`,
        data: body,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
// Lấy danh sách trả giá của người tham gia đấu giá
export const apiGetBargainAuctionById = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `/api/auctionRoom/getAuctionRoomByAuctionId/${id}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

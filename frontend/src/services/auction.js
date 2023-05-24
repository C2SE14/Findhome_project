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
// Phê duyệt danh sách tin đăng

export const apiPutAuction = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "put",
        url: `/api/auction/updateAuction`,
        data: body,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

// Tất cả danh sách đăng kí của tất cả người dùng

export const apiGetAllRegisterAuction = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "/api/auctionRegistration/getAllAuctionRegistrationsForAdmin",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

// Xoá  phê duyệt bất động sản đấu giá
export const apiDeleteAuction = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "delete",
        url: `/api/auction/deleteAuctionById/${id}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
//Kết quả trả giá
export const apiPostActionResult = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: `/api/auctionResult/addAuctionResult`,
        data: body,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

// Lấy tất cả kết quả trả giá

export const apiGetAllAuctionResult = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `/api/auctionResult/getAllAuctionResult`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

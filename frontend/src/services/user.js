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

// Lấy danh sách tin đăng user đã đăng
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
//  Lây danh sách đấu giá user đã đăng
export const apiGetAuctionPostOfUser = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `/api/auction/getAuctionPostOfUser/${id}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

//  Lây danh sách user đã đăng kí đấu giá
export const apiGetAuctionRegisterOfUser = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `/api/auctionRegistration/getAuctionRegistrationsByRegisterId/${id}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

//

export const apiDeleteRealEstate = (realEstateId, userId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "delete",
        url: `/api/realEstate/deleteRealEstate`,
        params: {
          "real-estate-id": realEstateId,
          "user-id": userId,
        },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

//

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

export const apiGetAllUser = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "/api/user/getAll",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

// Phê duyệt user đăng kí tham gia đấu giá

export const apiPutRegisterAuction = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: `/api/auctionRegistration/updateAuctionRegistration`,
        data: body,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
// Xoá phê duyệt user đăng kí tham gia đấu giá

export const apiDeleteRegisterAuction = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "delete",
        url: `/api/auctionRegistration/deleteRegistrationsById/${id}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
// xoá user by admin
export const apiDeleteUserByAdmin = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "delete",
        url: `/api/user/deleteUserById/${id}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

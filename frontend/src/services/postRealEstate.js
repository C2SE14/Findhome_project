import axiosConfig from "../config/axiosConfig";

export const apiGetAllPostRealEstate = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "/api/realEstate/getAllRealEstate",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetRealEstateById = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `/api/realEstate/getRealEstateById/${id}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetRealEstateByBusinessTypeId = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `/api/businessType/getRealEstateByBusinessTypeId/${id}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

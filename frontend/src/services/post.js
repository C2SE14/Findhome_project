import axios from "axios";

export const apiUpLoadImages = (images) =>
     new Promise(async (resolve, reject) => {
          try {
               const response = await axios({
                    method: "post",
                    url: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
                    data: images,
               });
               resolve(response);
          } catch (error) {
               reject(error);
          }
     });

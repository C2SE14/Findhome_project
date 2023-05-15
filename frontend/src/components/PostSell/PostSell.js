import React from "react";
import { bannersystem, rental, sell } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const PostaSell = ({ setPayload, setActiveIndex }) => {
     const navigate = useNavigate();
     const handleClickSetIndex = (type) => {
          if (type === "sell") {
               setActiveIndex(0);
               navigate("/dang-tin-ban");
               setPayload((prev) => ({
                    ...prev,
                    businessTypeModel: {
                         id: 1,
                    },
                    typeDetailModel: {
                         id: 1,
                    },
               }));
          } else if (type === "rent") {
               setActiveIndex(1);
               navigate("/dang-tin-cho-thue");
               setPayload((prev) => ({
                    ...prev,
                    businessTypeModel: {
                         id: 2,
                    },
                    typeDetailModel: {
                         id: 11,
                    },
               }));
          }
     };
     return (
          <div className="postasale">
               <div className="content1">
                    <div className="header-title1">Chọn hình thức đăng tin</div>
                    <div className="content-body">
                         <div className="action" onClick={() => handleClickSetIndex("sell")}>
                              <img src={sell} alt="" />
                              <p>
                                   Đăng tin bán nhà đất <i className="bi bi-arrow-right-circle"></i>
                              </p>
                         </div>
                         <div className="action" onClick={() => handleClickSetIndex("rent")}>
                              <img src={rental} alt="" />
                              <p>
                                   Đăng tin nhà đất <i className="bi bi-arrow-right-circle"></i>
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default PostaSell;

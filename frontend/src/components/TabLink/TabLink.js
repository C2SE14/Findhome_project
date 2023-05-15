import React from "react";
import { useNavigate } from "react-router-dom";

export const Tablink = ({ setPayload, setActiveIndex, activeIndex }) => {
     const navigate = useNavigate();
     const handleClick = (index) => {
          if (index === activeIndex) {
               return;
          }

          if (index === 1 && (activeIndex === 0 || activeIndex === null)) {
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
          } else if (index === 0 && (activeIndex === 1 || activeIndex === null)) {
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
          } else {
               setActiveIndex(index);
               setTimeout(() => {
                    setActiveIndex(index);
               }, 0);
          }
     };

     return (
          <div className="tap-link">
               <div
                    className={`tap-link-item ${activeIndex === 0 ? "active" : ""}`}
                    onClick={() => handleClick(0)}
               >
                    <div className="title">Đăng tin bán nhà đất</div>
               </div>
               <div
                    className={`tap-link-item ${activeIndex === 1 ? "active" : ""}`}
                    onClick={() => handleClick(1)}
               >
                    <div className="title">Đăng tin cho thuê nhà đất</div>
               </div>
          </div>
     );
};

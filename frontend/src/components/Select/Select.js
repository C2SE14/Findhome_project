import React, { memo, useEffect } from "react";

const Select = ({
     label,
     options,
     payload,
     setPayload,
     type,
     selectOption,
     setSelectedValue,
     selectedValue,
}) => {
     return (
          <div className="flex flex-col flex-1 info-2">
               {selectOption === true ? (
                    <>
                         <label className="title-name" htmlFor={`select-${type}`}>
                              {label}
                         </label>
                         <select value={payload} onChange={setPayload}>
                              {options.map((option) => (
                                   <option key={option.id} value={option.value}>
                                        {option.value}
                                   </option>
                              ))}
                         </select>
                    </>
               ) : (
                    <>
                         <label className="title-name" htmlFor={`select-${type}`}>
                              {label}
                         </label>
                         <select
                              value={selectedValue && selectedValue.id}
                              onChange={(e) => {
                                   setSelectedValue({
                                        id: e.target.value,
                                        value: e.target.selectedOptions[0].text,
                                   });
                                   if (type === "ward") {
                                        setPayload((prev) => ({
                                             ...prev,
                                             wards: e.target.selectedOptions[0].text,
                                             address: ` ${e.target.selectedOptions[0].text}, ${
                                                  payload.district ? payload.district : ""
                                             },${
                                                  payload.cityProvince ? payload.cityProvince : ""
                                             } `,
                                        }));
                                   } else if (type === "district") {
                                        setPayload((prev) => ({
                                             ...prev,
                                             district: e.target.selectedOptions[0].text,
                                             address: ` ${e.target.selectedOptions[0].text}, ${
                                                  payload.cityProvince ? payload.cityProvince : ""
                                             }`,
                                        }));
                                   } else if (type === "province") {
                                        setPayload((prev) => ({
                                             ...prev,
                                             cityProvince: e.target.selectedOptions[0].text,
                                             address: `${e.target.selectedOptions[0].text}`,
                                        }));
                                   }
                              }}
                              id={`select-${type}`}
                              className="outline-none border border-gray-300 p-2 rounded-md w-full"
                         >
                              <option value="">{`--Chọn ${label}--`}</option>
                              {options?.map((option) => {
                                   return (
                                        <option
                                             key={
                                                  type === "province"
                                                       ? option.province_id
                                                       : type === "district"
                                                       ? option.district_id
                                                       : option.ward_id
                                             }
                                             value={
                                                  type === "province"
                                                       ? option.province_id
                                                       : type === "district"
                                                       ? option.district_id
                                                       : option.ward_id
                                             }
                                        >
                                             {type === "province"
                                                  ? option.province_name
                                                  : type === "district"
                                                  ? option.district_name
                                                  : option.ward_name}
                                        </option>
                                   );
                              })}
                         </select>
                    </>
               )}
          </div>
     );
};

export default memo(Select);

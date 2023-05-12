import React, { memo } from "react";

const SelectAddress = ({
  label,
  options,
  selectedValue,
  setSelectedValue,
  type,
}) => {
  return (
    <div>
      <select
        value={selectedValue && selectedValue.id}
        onChange={(e) =>
          setSelectedValue({
            id: e.target.value,
            value: e.target.selectedOptions[0].text,
          })
        }
        id="select-address"
        className="form-control"
      >
        <option value="">--Chọn {label}--</option>
        {options &&
          options.map((option) => (
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
          ))}
      </select>
    </div>
  );
};

export default memo(SelectAddress);

import React, { memo, useEffect } from "react";

const Select = ({
  label,
  options,
  value,
  setValue,
  type,
  reset,
  name,
  selectOption,
}) => {
  return (
    <div className="flex flex-col flex-1 info-2">
      {selectOption === true ? (
        <>
          <label className="title-name" htmlFor={`select-${type}`}>
            {label}
          </label>
          <select value={value === null ? " " : value} onChange={setValue}>
            {options?.map((option) => (
              <option key={option.value} value={option.id}>
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
            value={reset ? " " : value ? value : " "}
            onChange={(e) =>
              !name
                ? setValue(e.target.value)
                : setValue((prev) => ({ ...prev, [name]: e.target.value }))
            }
            id={`select-${type}`}
            className="outline-none border border-gray-300 p-2 rounded-md w-full"
          >
            <option value="">{`--Chọn ${label}--`}</option>
            {options?.map((item) => {
              return (
                <option
                  key={
                    type === "province"
                      ? item?.province_id
                      : type === "district"
                      ? item?.district_id
                      : item?.code
                  }
                  value={
                    type === "province"
                      ? item?.province_id
                      : type === "district"
                      ? item?.district_id
                      : item?.code
                      ? " "
                      : " "
                  }
                >
                  {type === "province"
                    ? item?.province_name
                    : type === "district"
                    ? item?.district_name
                    : item?.label}
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

import React, { useState, useEffect } from "react";
import InputValue from "../InputValue/InputValue";
import Select from "../Select/Select";
import {
  apiGetPublicDistrict,
  apiGetPublicProvinces,
  apiGetPublicWard,
} from "../../services/app";
const Address = ({ payload, setPayload, auction }) => {
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState({
    id: "",
    value: "",
  });
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState({
    id: "",
    value: "",
  });
  const [wards, setWards] = useState([]);
  const [selectedWard, setSelectedWard] = useState({
    id: "",
    value: "",
  });
  // lấy add lấy đế set province
  useEffect(() => {
    let addressArr = payload?.address?.split(",");
    let foundProvince =
      provinces?.length > 0 &&
      provinces?.find(
        (item) =>
          item.province_name === addressArr[addressArr.length - 1]?.trim()
      );

    setSelectedProvince(
      foundProvince
        ? (prev) => ({
            ...prev,
            id: foundProvince.province_id,
            value: foundProvince.province_name,
          })
        : ""
    );
  }, [provinces]);

  useEffect(() => {
    let addressArr = payload?.address?.split(",");
    let foundDistrict =
      districts?.length > 0 &&
      districts?.find(
        (item) =>
          item.district_name === addressArr[addressArr.length - 2]?.trim()
      );

    setSelectedDistrict(
      foundDistrict
        ? (prev) => ({
            ...prev,
            id: foundDistrict.district_id,
            value: foundDistrict.district_name,
          })
        : ""
    );
  }, [districts]);

  useEffect(() => {
    let addressArr = payload?.address?.split(",");
    let foundWard =
      wards?.length > 0 &&
      wards?.find(
        (item) => item.ward_name === addressArr[addressArr.length - 3]?.trim()
      );
    setSelectedWard(
      foundWard
        ? (prev) => ({
            ...prev,
            id: foundWard.ward_id,
            value: foundWard.ward_name,
          })
        : ""
    );
  }, [wards]);

  // Tỉnh
  useEffect(() => {
    const fetchPublicProvince = async () => {
      const respone = await apiGetPublicProvinces();
      if (respone.status === 200) {
        setProvinces(respone.data.results);
      }
    };
    fetchPublicProvince();
  }, []);
  // HUyện
  useEffect(() => {
    const fetchPublicDistrict = async () => {
      if (selectedProvince.id) {
        const response = await apiGetPublicDistrict(selectedProvince.id);
        if (response.status === 200) {
          setDistricts(response.data.results);
          setSelectedDistrict({ id: "", value: "" });
          setSelectedWard({ id: "", value: "" });
        }
      }
    };
    fetchPublicDistrict();
  }, [selectedProvince]);

  // Xã
  useEffect(() => {
    const fetchPublicWard = async () => {
      if (selectedDistrict.id) {
        const response = await apiGetPublicWard(selectedDistrict.id);
        if (response.status === 200) {
          setWards(response.data.results);
        }
      }
    };
    fetchPublicWard();
  }, [selectedDistrict]);
  return (
    <div className="form-info">
      <div className="header-title">VỊ TRÍ BẤT ĐỘNG SẢN</div>
      <div className="content">
        <InputValue
          label={!auction ? "Dự án" : "Tên đấu giá"}
          placeholder={"Nhập dữ liệu"}
          type={"text"}
          name={auction ? "nameRealEstate" : "nameEstate"}
          className={"title-name"}
          required
          value={auction ? payload.nameRealEstate : payload.nameEstate}
          setValue={setPayload}
          classParent={"info-1"}
          inputvalue={false}
        />
      </div>
      <div className="content between">
        <Select
          label="Thành phố"
          type="province"
          options={provinces}
          selectedValue={selectedProvince}
          setSelectedValue={setSelectedProvince}
          setPayload={setPayload}
          payload={payload}
        />

        <Select
          label="Quận/Huyện"
          type="district"
          options={districts}
          selectedValue={selectedDistrict}
          setPayload={setPayload}
          payload={payload}
          setSelectedValue={setSelectedDistrict}
        />
      </div>
      <div className="content between">
        <Select
          label="Phường/Xã"
          type="ward"
          options={wards}
          selectedValue={selectedWard}
          setPayload={setPayload}
          payload={payload}
          setSelectedValue={setSelectedWard}
        />
        <InputValue
          label={"Địa chỉ"}
          placeholder={""}
          type={"text"}
          name={"address"}
          className={"title-name"}
          required
          value={payload.address}
          setValue={setPayload}
          classParent={"info-2"}
        />
      </div>
    </div>
  );
};

export default Address;

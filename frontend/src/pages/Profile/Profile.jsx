import React, { useEffect, useRef, useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import "./Profile.scss";
import SelectAddress from "../../components/SelectAddress/SelectAddress";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../store/actions/user";
import {
  apiGetPublicDistrict,
  apiGetPublicProvinces,
  apiGetPublicWard,
} from "../../services/app";

const Profile = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { userData } = useSelector((state) => state.user);

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

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [dispatch, userId]);

  //! Phần này của form value
  const [formValues, setFormValues] = useState({
    fullName: "" || userData.fullName,

    // Thêm các trường dữ liệu khác vào đây
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  ////
  const issueDateRef = useRef(null);
  const birthDateRef = useRef(null);
  const [gender, setGender] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleFormEditProfile = (event) => {
    event.preventDefault();
    const issueDate = issueDateRef.current?.flatpickr?.selectedDates[0];
    const birthDate = birthDateRef.current?.flatpickr?.selectedDates[0];
    // Xử lý logic khi submit form với issueDate và birthDate
  };
  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__header">THÔNG TIN TÀI KHOẢN</div>
        <div className="profile__body">
          <form action="" onSubmit={handleFormEditProfile}>
            <div className="row mb-3">
              <label className="col-2 col-form-label text-bold">
                Họ tên
                <span className="required">*</span>
              </label>
              <div className="col-10">
                <input
                  type="text"
                  className="form-control"
                  value={formValues.fullName}
                  onChange={(event) => handleInputChange(event)}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-2 col-form-label text-bold">
                Điện thoại
              </label>
              <div className="col-10">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    value={userData.phoneNumber}
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-2 col-form-label text-bold">
                Email
                <span className="required">*</span>
              </label>
              <div className="col-10">
                <input
                  type="email"
                  className="form-control"
                  value={userData.email}
                  disabled
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-2 col-form-label text-bold">
                MST/CMND
                <span className="required">*</span>
              </label>
              <div className="col-10">
                <div className="row">
                  <div className="col">
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col">
                    <div className="input-group-solid">
                      <Flatpickr
                        className="form-control"
                        options={{
                          dateFormat: "d/m/Y",
                        }}
                        onChange={(dates) => {
                          // Logic xử lý khi thay đổi ngày cấp CMND
                          console.log(dates);
                        }}
                        ref={issueDateRef}
                      />
                      <div className="input-group-append">
                        <i className="bi bi-calendar4-week"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-2 col-form-label text-bold">
                Ngày sinh
              </label>
              <div className="col-10">
                <div className="input-group-solid w-30">
                  <Flatpickr
                    className="form-control"
                    options={{
                      dateFormat: "d/m/Y",
                    }}
                    onChange={(dates) => {
                      // Logic xử lý khi thay đổi ngày sinh
                    }}
                    ref={birthDateRef}
                  />
                  <div className="input-group-append">
                    <i className="bi bi-calendar4-week"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-2 col-form-label text-bold">
                Giới tính
              </label>
              <div className="col-10" style={{ display: "flex" }}>
                <div className="input-group-checkbox w-30">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={gender === "male"}
                      onChange={handleGenderChange}
                    />
                    Nam
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={gender === "female"}
                      onChange={handleGenderChange}
                    />
                    Nữ
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      checked={gender === "other"}
                      onChange={handleGenderChange}
                    />
                    Khác
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-2 col-form-label text-bold">Địa chỉ</label>
              <div className="col-10">
                <div className="row">
                  <div className="col">
                    <SelectAddress
                      type="province"
                      label="Tỉnh thành"
                      selectedValue={selectedProvince}
                      setSelectedValue={setSelectedProvince}
                      options={provinces}
                    />
                  </div>
                  <div className="col">
                    <SelectAddress
                      options={districts}
                      type="district"
                      label="Quận / Huyện"
                      selectedValue={selectedDistrict}
                      setSelectedValue={setSelectedDistrict}
                    />
                  </div>
                  <div className="col">
                    <SelectAddress
                      type="ward"
                      options={wards}
                      label={"Phường / Xã"}
                      selectedValue={selectedWard}
                      setSelectedValue={setSelectedWard}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-2"></div>
              <div className="col-10">
                <div className="row">
                  <div className="col-12">
                    <input
                      type="text"
                      readOnly
                      className="form-control readonly"
                      value={`${
                        selectedWard ? `${selectedWard.value}-` : ""
                      }   ${
                        selectedDistrict ? `${selectedDistrict.value}` : ""
                      }  ${
                        selectedProvince ? `${selectedProvince.value}` : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="profile__button">
              <button type="submit">CẬP NHẬT THÔNG TIN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

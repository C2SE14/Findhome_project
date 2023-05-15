import React, { useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import "./Profile.scss";
import SelectAddress from "../../components/SelectAddress/SelectAddress";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, updateUser } from "../../store/actions/user";
import {
  apiGetPublicDistrict,
  apiGetPublicProvinces,
  apiGetPublicWard,
} from "../../services/app";
import LoadingComp from "../../components/Loading/Loading";
import { toast } from "react-toastify";
import { apiUploadImages } from "../../services/post";

const Profile = () => {
  //state
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { userData, loading } = useSelector((state) => state.user);
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
  const [fullName, setFullName] = useState(userData.fullName);
  const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber);
  const [identityCard, setIdentityCard] = useState(userData.identityCard);
  const [gender, setGender] = useState(userData.gender || true);
  const [identityCardDate, setIdentityCardDate] = useState(
    userData.identityCardDate
  );
  const [dateOfBirth, setDateOfBirth] = useState(userData.dateOfBirth);
  const [address, setAddress] = useState(userData.address);
  const [frontOfTheIdentityCard, setFrontOfTheIdentityCard] = useState(
    userData.frontOfTheIdentityCard || null
  );
  const [backOfTheIdentityCard, setBackOfTheIdentityCard] = useState(
    userData.backOfTheIdentityCard || null
  );

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (userData.fullName) {
      setFullName(userData.fullName);
    }
    if (userData.phoneNumber) {
      setPhoneNumber(userData.phoneNumber);
    }
    if (userData.identityCard) {
      setIdentityCard(userData.identityCard);
    }
    if (userData.gender) {
      setGender(userData.gender);
    }

    if (userData.identityCardDate) {
      setIdentityCardDate(userData.identityCardDate);
    }
    if (userData.dateOfBirth) {
      setDateOfBirth(userData.dateOfBirth);
    }
    if (userData.address) {
      setAddress(userData.address);
    }
    if (userData.frontOfTheIdentityCard) {
      setFrontOfTheIdentityCard(userData.frontOfTheIdentityCard);
    }
    if (userData.backOfTheIdentityCard) {
      setBackOfTheIdentityCard(userData.backOfTheIdentityCard);
    }
  }, [userData]);
  //
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

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [dispatch, userId]);

  //! Phần này của form value

  useEffect(() => {
    const formattedAddress = `${
      selectedWard ? `${selectedWard.value},` : ""
    }   ${selectedDistrict ? `${selectedDistrict.value},` : ""}  ${
      selectedProvince ? `${selectedProvince.value}` : ""
    }`;

    setAddress(formattedAddress);
  }, [selectedWard, selectedDistrict, selectedProvince]);

  //

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleIdentityCardDateChange = (dates) => {
    setIdentityCardDate(dates[0]);
  };
  const handleIdentityCardChange = (event) => {
    setIdentityCard(event.target.value);
  };

  const handleBirthDateChange = (dates) => {
    setDateOfBirth(dates[0]);
  };

  const handleGenderChange = (event) => {
    const selectedGender = event.target.value === "true";
    setGender(selectedGender);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const validateForm = () => {
    const errors = {};

    // Kiểm tra trường Họ tên
    if (!fullName.trim()) {
      errors.fullName = "Vui lòng nhập họ tên";
    }

    // Kiểm tra trường Điện thoại
    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Vui lòng nhập số điện thoại";
    } else {
      // Kiểm tra định dạng số điện thoại Việt Nam
      const phoneNumberRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
      if (!phoneNumberRegex.test(phoneNumber)) {
        errors.phoneNumber = "Số điện thoại không hợp lệ";
      }
    }

    // Kiểm tra trường MST/CMND
    if (!identityCard.trim()) {
      errors.identityCard = "Vui lòng nhập MST/CMND";
    } else if (!/^\d{9}$/.test(identityCard)) {
      errors.identityCard = "MST/CMND không hợp lệ";
    }

    if (!identityCardDate) {
      errors.identityCardDate = "Vui lòng chọn ngày cấp MST/CMND ";
    }

    // Kiểm tra trường Ngày sinh
    if (!dateOfBirth) {
      errors.dateOfBirth = "Vui lòng chọn ngày sinh";
    }

    // Kiểm tra trường Giới tính
    if (gender === null) {
      errors.gender = "Vui lòng chọn giới tính";
    }

    // Kiểm tra trường Địa chỉ
    if (
      !selectedProvince.value ||
      !selectedDistrict.value ||
      !selectedWard.value
    ) {
      errors.address = "Vui lòng chọn địa chỉ";
    }
    // Kiểm tra trường Ngày sinh
    if (!frontOfTheIdentityCard) {
      errors.frontOfTheIdentityCard = "Vui lòng chọn ảnh mặt trước CCCD";
    }
    if (!backOfTheIdentityCard) {
      errors.backOfTheIdentityCard = "Vui lòng chọn ảnh mặt sau trước CCCD";
    }
    return errors;
  };
  const [isLoading, setIsLoading] = useState({
    front: false,
    back: false,
  });

  const handleFileUpload = async (e, isFront) => {
    setIsLoading((prevState) => ({
      ...prevState,
      [isFront ? "front" : "back"]: true,
    }));
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", process.env.REACT_APP_UPLOAD_ASSET_NAME);
    const response = await apiUploadImages(formData);
    if (response.status === 200) {
      if (isFront) {
        setFrontOfTheIdentityCard(response.data.secure_url);
      } else {
        setBackOfTheIdentityCard(response.data.secure_url);
      }
    }
    setIsLoading((prevState) => ({
      ...prevState,
      [isFront ? "front" : "back"]: false,
    }));
  };

  const handleFormEditProfile = (event) => {
    event.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      const bodyData = {
        ...userData,
        fullName,
        dateOfBirth,
        phoneNumber,
        gender: gender === null ? null : gender ? true : false,
        address,
        identityCard,
        identityCardDate,
        frontOfTheIdentityCard,
        backOfTheIdentityCard,
      };

      dispatch(updateUser(bodyData));
      toast.success("Cập nhật thông tin thành công", {
        autoClose: 2000,
        onClose: () => {
          // Tắt toast và tải lại trang sau 1 giây
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        },
      });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
      {loading ? (
        <div className="loading__login">
          <LoadingComp type="spin" color="#b53c12" width="50px" height="50px" />
        </div>
      ) : null}
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
                    defaultValue={fullName}
                    onChange={handleFullNameChange}
                  />
                  {errors.fullName && <small>{errors.fullName}</small>}
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-2 col-form-label text-bold">
                  Điện thoại
                  <span className="required">*</span>
                </label>
                <div className="col-10">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                    />
                  </div>
                  {errors.phoneNumber && <small>{errors.phoneNumber}</small>}
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
                      <input
                        type="text"
                        value={identityCard}
                        onChange={handleIdentityCardChange}
                        className="form-control"
                      />
                      {errors.identityCard && (
                        <small>{errors.identityCard}</small>
                      )}
                    </div>
                    <div className="col">
                      <div className="input-group-solid">
                        <Flatpickr
                          className="form-control"
                          value={identityCardDate}
                          placeholder="Ngày cấp"
                          options={{
                            dateFormat: "Y-m-d",
                          }}
                          onChange={handleIdentityCardDateChange}
                        />
                        <div className="input-group-append">
                          <i className="bi bi-calendar4-week"></i>
                        </div>
                      </div>
                      {errors.identityCardDate && (
                        <small>{errors.identityCardDate}</small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-2 col-form-label text-bold">
                  Ngày sinh
                  <span className="required">*</span>
                </label>
                <div className="col-10">
                  <div className="input-group-solid w-30">
                    <Flatpickr
                      className="form-control"
                      value={dateOfBirth}
                      options={{
                        dateFormat: "Y-m-d",
                      }}
                      onChange={handleBirthDateChange}
                    />
                    <div className="input-group-append">
                      <i className="bi bi-calendar4-week"></i>
                    </div>
                  </div>
                  {errors.dateOfBirth && <small>{errors.dateOfBirth}</small>}
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-2 col-form-label text-bold">
                  Giới tính
                  <span className="required">*</span>
                </label>
                <div className="col-10" style={{ display: "flex" }}>
                  <div className="input-group-checkbox w-30">
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="true"
                        checked={gender === true}
                        onChange={handleGenderChange}
                      />
                      Nam
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="false"
                        checked={gender === false}
                        onChange={handleGenderChange}
                      />
                      Nữ
                    </label>
                  </div>
                  {errors.gender && <small>{errors.gender}</small>}
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-2 col-form-label text-bold">
                  Địa chỉ
                  <span className="required">*</span>
                </label>
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
                        className="form-control readonly"
                        value={address}
                        onChange={handleAddressChange}
                      />
                      {errors.address && <small>{errors.address}</small>}
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}

              <div className="row mb-5">
                <label className="col-2 col-form-label text-bold">
                  Ảnh mặt trước CCCD
                  <span className="required">*</span>
                </label>
                <div className="col-10">
                  <div className="row">
                    <div className="col">
                      <div className="frontOfTheIdentityCard">
                        <div className="image">
                          <label htmlFor="frontOfTheIdentityCard">
                            {isLoading.front ? (
                              <LoadingComp
                                type="spinningBubbles"
                                color="#fff"
                                width="50px"
                                height="50px"
                              />
                            ) : null}

                            <img
                              src={
                                frontOfTheIdentityCard
                                  ? frontOfTheIdentityCard
                                  : "https://e7.pngegg.com/pngimages/80/222/png-clipart-computer-icons-graphy-camera-camera-text-rectangle.png"
                              }
                              alt=""
                            />
                          </label>
                        </div>

                        <input
                          onChange={(e) => handleFileUpload(e, true)}
                          type="file"
                          hidden
                          id="frontOfTheIdentityCard"
                        />
                      </div>
                    </div>
                    {errors.frontOfTheIdentityCard && (
                      <small>{errors.frontOfTheIdentityCard}</small>
                    )}
                  </div>
                </div>
              </div>
              {/*  */}

              <div className="row mb-3">
                <label className="col-2 col-form-label text-bold">
                  Ảnh mặt sau CCCD
                  <span className="required">*</span>
                </label>
                <div className="col-10">
                  <div className="row">
                    <div className="col">
                      <div className="frontOfTheIdentityCard">
                        <div className="image">
                          <label htmlFor="backOfTheIdentityCard">
                            {isLoading.back ? (
                              <LoadingComp
                                type="spinningBubbles"
                                color="#fff"
                                width="50px"
                                height="50px"
                              />
                            ) : null}

                            <img
                              src={
                                backOfTheIdentityCard
                                  ? backOfTheIdentityCard
                                  : "https://e7.pngegg.com/pngimages/80/222/png-clipart-computer-icons-graphy-camera-camera-text-rectangle.png"
                              }
                              alt=""
                            />
                          </label>
                        </div>

                        <input
                          onChange={(e) => handleFileUpload(e, false)}
                          type="file"
                          id="backOfTheIdentityCard"
                          hidden
                        />
                      </div>
                      {errors.backOfTheIdentityCard && (
                        <small>{errors.backOfTheIdentityCard}</small>
                      )}
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
    </>
  );
};

export default Profile;

import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { path } from "../../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, updateUser } from "../../../store/actions/user";
import { apiUploadImages } from "../../../services/post";

const Siderbar = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { userData } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [dispatch, userId]);

  const [avatar, setAvatar] = useState(userData.avatar || null);

  const handleFileUpload = async (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", process.env.REACT_APP_UPLOAD_ASSET_NAME);
    const response = await apiUploadImages(formData);
    if (response.status === 200) {
      setAvatar(response.data.secure_url);
    }

    const bodyData = {
      id: userData.id,
      username: userData.username,
      email: userData.email,
      password: userData.password,
      avatar,
      frontOfTheIdentityCard: userData.frontOfTheIdentityCard,
      backOfTheIdentityCard: userData.backOfTheIdentityCard,
    };
    dispatch(updateUser(bodyData));
  };
  return (
    <div className="sidebar">
      <div className="user">
        <div className="avatar">
          <img
            src={
              avatar ||
              "https://cdn.houseviet.vn/images/icons/user-avatar.png?fbclid=IwAR2lmfuhm4G_5HUPUpe_T6wAnfSiyXW391GJ-AwH8OxoFwVgVazf64vfMuM"
            }
            alt="avatar"
          />
          <input onChange={handleFileUpload} type="file" />
        </div>
        <div className="name">{userData.fullName}</div>
        <div className="br-line"></div>
        <div className="date-start">
          <h4>Ngày tham gia</h4>
          <span>25/05/2023</span>
        </div>
      </div>
      <div className="features">
        <ul>
          <li>
            <div className="title">QUẢN LÝ TIN ĐĂNG</div>
            <div className="content">
              <Link to={path.POST_NEWS} className="group">
                <i className="bi bi-pencil-square"></i>
                <span>ĐĂNG TIN MUA BÁN </span>
              </Link>
              <Link to={path.POST_NEWS} className="group">
                <i className="bi bi-credit-card"></i>
                <span>ĐĂNG CHO THUÊ</span>
              </Link>
              <Link to={path.LIST_NEWS} className="group">
                <i className="bi bi-card-list"></i>
                <span>DANH SÁCH TIN ĐĂNG</span>
              </Link>
              <Link to={"#"} className="group">
                <i className="bi bi-card-checklist"></i>
                <span>DANH SÁCH ĐĂNG KÝ THAM GIA BẤT ĐỘNG SẢN</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="title">QUẢN LÝ THÔNG TIN CÁ NHÂN</div>
            <div className="content">
              <Link to={path.PROFILE} className="group">
                <i className="bi bi-person-circle"></i>
                <span>THÔNG TIN CÁ NHÂN </span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Siderbar;

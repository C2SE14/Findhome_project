import React, { useEffect } from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { path } from "../../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../../store/actions/user";
// import { FileUploader } from "fileuploader";

const Siderbar = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { userData } = useSelector((state) => state.user);
  console.log(userData);

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [dispatch, userId]);

  const handleFileUpload = (file) => {
    // Gửi dữ liệu hình ảnh đã chọn đến server để lưu trữ hoặc xử lý
    // Ví dụ: sử dụng Fetch API hoặc axios để gửi dữ liệu hình ảnh
    // fetch('/upload', {
    //   method: 'POST',
    //   body: file
    // });
  };
  return (
    <div className="sidebar">
      <div className="user">
        <div className="avatar">
          <img
            src="https://scontent.fdad8-1.fna.fbcdn.net/v/t39.30808-6/342769895_1334163300473694_849409973138336677_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9BvdjsvFJUAAX93ps53&_nc_ht=scontent.fdad8-1.fna&oh=00_AfC372jc1Kwk3KJK5xf-UWo0xfrZ3n7_lba4_uIZvPvsxg&oe=645DF677"
            alt=""
          />
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

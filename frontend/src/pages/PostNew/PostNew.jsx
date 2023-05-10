import React, { useState, useEffect } from "react";
import "./postnew.scss";
import axios from "axios";
import { map } from "../../assets/images";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";

const PostNew = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const [activeBtn, setActiveBtn] = useState("Mua bán");
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const handleClick = (e) => {
    setActiveBtn(e.target.value);
  };
  useEffect(() => {
    const fetchProvinces = async () => {
      const response = await axios.get("https://provinces.open-api.vn/api/p/");
      setProvinces(response.data);
    };

    fetchProvinces();
  }, []);

  const handleProvinceChange = async (event) => {
    const provinceCode = event.target.value;
    setSelectedProvince(provinceCode);

    const response = await axios.get(
      `https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`
    );
    setDistricts(response.data.districts);
  };

  const handleDistrictChange = (event) => {
    const districtCode = event.target.value;
    setSelectedDistrict(districtCode);
  };
  return (
    <div className="postnew">
      <div className="post-container">
        <p className="navigation">
          <span>Quản lý tin /</span> Danh sách tin
        </p>
        <p className="heading-title">đăng tin mới </p>
        <form action="">
          <section className="info-basic">
            <div className="content">
              <div className="left">
                <p className="heading-content">ii. thông tin mô tả</p>
                <InputField
                  type={"text"}
                  className={"input-content w50"}
                  placeholder={"Nhập dữ liệu"}
                  name={"inputData"}
                  label={"Tên dự án"}
                />

                <div className="input-info">
                  <p>Loại hình</p>
                  <div className="type-info">
                    <input
                      type="button"
                      className={`btn-type ${
                        activeBtn === "Mua bán" ? "active" : ""
                      }`}
                      value="Mua bán"
                      onClick={handleClick}
                    />
                    <input
                      type="button"
                      className={`btn-type ${
                        activeBtn === "Cho thuê" ? "active" : ""
                      }`}
                      value="Cho thuê"
                      onClick={handleClick}
                    />
                  </div>
                </div>
                <div className="input-info">
                  <p>Loại BĐS</p>
                  <div className="option-info">
                    <select className="w25">
                      <option value="Chọn dữ liệu" className="option-info ">
                        Chọn dữ liệu
                      </option>
                    </select>
                  </div>
                </div>
                <div className="address-form">
                  <div className="input-info">
                    <p>Tỉnh/Thành phố</p>
                    <div className="option-info">
                      <select
                        className="w50"
                        value={selectedProvince}
                        onChange={handleProvinceChange}
                      >
                        <option value="">Chọn tỉnh/thành phố</option>
                        {provinces.map((province) => (
                          <option key={province.code} value={province.code}>
                            {province.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="input-info">
                    <p>Quận/Huyện</p>
                    <div className="option-info">
                      <select
                        className="w50"
                        value={selectedDistrict}
                        onChange={handleDistrictChange}
                      >
                        <option value="">Chọn quận/huyện</option>
                        {districts.map((district) => (
                          <option key={district.code} value={district.code}>
                            {district.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="input-info">
                    <p>Xã/Phường</p>
                    <div className="option-info">
                      <select className="w50">
                        <option value="">Chọn xã/phường</option>
                        {/* Hiển thị danh sách xã/phường tương ứng với quận/huyện được chọn */}
                      </select>
                    </div>
                  </div>
                  <div className="input-info">
                    <p>Địa chỉ</p>
                    <label htmlFor="">
                      <input
                        type="text"
                        className="input-content w50"
                        placeholder="Nhập dữ liệu"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="right">
                <img src={map} className="map" alt="" />
              </div>
            </div>
          </section>
          <section className="info-basic">
            <div className="content">
              <div className="left">
                <p className="heading-content">ii. thông tin mô tả</p>
                <div className="input-info">
                  <p>Giá tiền</p>
                  <div className="type-info">
                    <label htmlFor="">
                      <input
                        type="text"
                        className="input-content w25"
                        placeholder="Giá min"
                      />
                    </label>
                    <label htmlFor="">
                      <input
                        type="text"
                        className="input-content w25"
                        placeholder="Giá max"
                      />
                    </label>
                  </div>
                </div>
                <div className="input-info">
                  <p>Diện tích (m2)</p>
                  <div className="type-info">
                    <label htmlFor="">
                      <input
                        type="text"
                        className="input-content w25"
                        placeholder="Diện tích min"
                      />
                    </label>
                    <label htmlFor="">
                      <input
                        type="text"
                        className="input-content w25"
                        placeholder="Diện tích max"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="input-info">
                  <p>Hướng nhà</p>
                  <div className="type-info">
                    <label htmlFor="">
                      <input
                        type="text"
                        className="input-content w50"
                        placeholder="Nhập dữ liệu"
                      />
                    </label>
                  </div>
                </div>
                <div className="input-info">
                  <p>Tình trạng pháp lý</p>
                  <div className="type-info">
                    <label htmlFor="">
                      <input
                        type="text"
                        className="input-content w50"
                        placeholder="Nhập dữ liệu"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-3">
              <div className="price">
                <input type="checkbox" name="" id="" />
                <span className="price-tiltle">Giá thỏa thuận</span>
              </div>
            </div>
            <div className="content-2">
              <div className="input-info">
                <p>Tiều đề</p>
                <div className="type-info">
                  <label htmlFor="">
                    <input
                      type="text"
                      className="input-content w100"
                      placeholder="Nhập dữ liệu"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="content-2">
              <div className="input-info" style={{ height: "150px" }}>
                <p>Mô tả</p>
                <div className="type-info">
                  <label htmlFor="">
                    <textarea
                      rows="5"
                      type="text"
                      className="input-content w100"
                      placeholder="Nhập dữ liệu"
                    ></textarea>
                  </label>
                </div>
              </div>
            </div>
            <div className="content-3">
              <span>Tối thiểu 30 kí tự , tối đa 3000 kí tự</span>
            </div>
          </section>
          <section className="info-basic pb-3">
            <div className="content-4">
              <p className="heading-content">iii. thông tin hình ảnh</p>
              <p className="regulations">
                <i className="bi bi-exclamation-circle"></i>
                <span>Quy định đăng hình & video</span>
              </p>
            </div>
            <div className="content-3">
              <ul>
                <li>
                  Hãy dùng ảnh thật, không trùng , không chèn số điện thoại
                </li>
                <li>Mỗi ảnh kích thước tối thiểu 100x100, tối đa 15 MB</li>
                <li>
                  Số lượn ảnh tối đa tùy theo loại tin chọn ở bước tiếp theo
                </li>
              </ul>
            </div>
            <div className="upload-image">
              <div className="icon">
                <i className="bi bi-file-earmark text-icon"></i>
                <i className="bi bi-arrow-down upload-icon"></i>
              </div>
              <p>Bấm để chọn ảnh cần tải lên</p>
              <span>Hoặc kéo thả ảnh vào đây</span>
            </div>
          </section>
          <section className="info-basic">
            <div className="content-4">
              <p className="heading-content">iv. chọn gói tin - thanh toán</p>
            </div>
            <div className="content-2">
              <p>
                - Quý khách nên chọn đăng tin VIP để có hiệu quả hơn. <br />
                VD: Tin <span>Diamond</span> có lượt xem trung bình{" "}
                <span>cao hơn 20 lần </span>so với tin thường
              </p>
            </div>
            <div className="content-5">
              <p>Loại tin</p>
              <p>Thời gian</p>
              <p>Ngày bắt đầu</p>
              <p>Ngày kết thúc</p>
            </div>
            <div className="content-5">
              <div className="option-info">
                <select className="w45">
                  <option value="Chọn dữ liệu" className="option-info ">
                    Chọn dữ liệu
                  </option>
                </select>
              </div>
              <div className="option-info">
                <select className="w45">
                  <option value="Chọn dữ liệu" className="option-info ">
                    Chọn dữ liệu
                  </option>
                </select>
              </div>
              <div className="option-info">
                <select className="w45">
                  <option value="Chọn dữ liệu" className="option-info ">
                    Chọn dữ liệu
                  </option>
                </select>
              </div>
              <div className="option-info">
                <select className="w45">
                  <option value="Chọn dữ liệu" className="option-info ">
                    Chọn dữ liệu
                  </option>
                </select>
              </div>
            </div>
            <div className="content-2">
              <p className="footer-title">giá trị tin đăng: 20000 vnđ</p>
            </div>
          </section>
          <section className="info-basic">
            <div className="content">
              <div className="left">
                <p className="heading-content">ii. thông tin mô tả</p>
                <div className="input-info">
                  <p>Tên liện hệ</p>
                  <div className="type-info">
                    <label htmlFor="">
                      <input
                        type="text"
                        className="input-content w50"
                        placeholder="Nhập dữ liệu"
                      />
                    </label>
                  </div>
                </div>
                <div className="input-info">
                  <p>Số điện thoại</p>
                  <div className="type-info">
                    <label htmlFor="">
                      <input
                        type="text"
                        className="input-content w50"
                        placeholder="Nhập dữ liệu"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="input-info">
                  <p>Địa chỉ</p>
                  <div className="type-info">
                    <label htmlFor="">
                      <input
                        type="text"
                        className="input-content w50"
                        placeholder="Nhập dữ liệu"
                      />
                    </label>
                  </div>
                </div>
                <div className="input-info">
                  <p>Email</p>
                  <div className="type-info">
                    <label htmlFor="">
                      <input
                        type="text"
                        className="input-content w50"
                        placeholder="Nhập dữ liệu"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="action-button">
            <Button
              text={"Đăng tin"}
              className={"button__thirdary button-postnew"}
            />
            <Button text={"Lưu nháp"} className={"button__thirdary"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostNew;

import React from "react";
import "./readInfo.scss";
const ReadInfo = ({ setIsEdit, dataEdit, rent }) => {
  let addressArr = dataEdit?.address?.split(",");
  const brokerCus = dataEdit.brokerModel ? dataEdit.brokerModel.broker : false;

  return (
    <div
      className="readinfo"
      onClick={(e) => {
        e.stopPropagation();
        setIsEdit(false);
      }}
    >
      <div
        className="content-update"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h3>Thông tin chi tiết </h3>
        <form>
          <div className="form-info">
            <div className="header-title">VỊ TRÍ BẤT ĐỘNG SẢN</div>
            <div className="content">
              <div className={"info-1"}>
                <label className={"title-name"}>Dự án</label>
                <div className={`input-value `}>
                  <input
                    type="text"
                    defaultValue={dataEdit.nameEstate}
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="content between">
              <div className="flex flex-col flex-1 info-2">
                <label className="title-name">Thành Phố</label>
                <select disabled>
                  <option>{addressArr[addressArr.length - 1]?.trim()}</option>
                </select>
              </div>
              <div className="flex flex-col flex-1 info-2">
                <label className="title-name">Quận Huyện</label>
                <select disabled>
                  <option>{addressArr[addressArr.length - 2]?.trim()}</option>
                </select>
              </div>
            </div>
            <div className="content between">
              <div className="flex flex-col flex-1 info-2">
                <label className="title-name">Phường Xã</label>
                <select disabled>
                  <option>{addressArr[addressArr.length - 3]?.trim()}</option>
                </select>
              </div>
              <div className="flex flex-col flex-1 info-2">
                <label className={"title-name"}>Địa Chỉ</label>
                <div className={`input-value `}>
                  <input type="text" defaultValue={dataEdit.address} readOnly />
                </div>
              </div>
            </div>
          </div>
          <div className="form-info">
            <div className="header-title">THÔNG TIN BẤT ĐỘNG SẢN</div>
            <div className="content between ">
              <div className={"info-2"}>
                <label className={"title-name"}>Diện tích</label>
                <div className={`input-value `}>
                  <input type="text" defaultValue={dataEdit.area} readOnly />
                  <p>m2</p>
                </div>
              </div>
              <div className={"info-2"}>
                <label className={"title-name"}>
                  Giá {rent ? "thuê" : "bán"}
                </label>
                <div className={`input-value `}>
                  <input type="text" defaultValue={dataEdit.price} readOnly />
                  <p>vnđ</p>
                </div>
              </div>
            </div>
            <div className="content between">
              <div className="flex flex-col flex-1 info-2">
                <label className="title-name">Loại nhà</label>
                <select disabled>
                  <option>{dataEdit.typeDetailModel.typeDetailName}</option>
                </select>
              </div>
              {rent ? (
                <div className="flex flex-col flex-1 info-2">
                  <label className="title-name">Đặt cọc</label>
                  <div className={`input-value `}>
                    <input
                      type="text"
                      defaultValue={dataEdit.depositPrice}
                      readOnly
                    />
                    <p>Tháng</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col flex-1 info-2">
                  <label className="title-name">Giấy tờ</label>
                  <select disabled>
                    <option>{dataEdit.legalDocument}</option>
                  </select>
                </div>
              )}
            </div>

            {rent ? (
              <div className="content  ">
                <div className="flex flex-col flex-1 info-2">
                  <label className="title-name">Thanh toán</label>
                  <select disabled>
                    <option>{dataEdit.payment}</option>
                  </select>
                </div>
                <div className=" info-2">
                  <label className="title-name">Tối thiểu</label>
                  <div className={`input-value `}>
                    <input
                      type="text"
                      defaultValue={dataEdit.minRentalPeriod}
                      readOnly
                    />
                    <p>Tháng</p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="content ">
              <div className=" info-1">
                <label className="title-name">Tiêu đề</label>
                <div className={`input-value `}>
                  <input type="text" defaultValue={dataEdit.title} readOnly />
                </div>
              </div>
            </div>

            <div className="content ">
              <div className=" info-1">
                <label className="title-name">Mô tả</label>
                <div className={`input-value `}>
                  <textarea
                    type="text"
                    defaultValue={dataEdit.description}
                    readOnly
                    rows={5}
                  />
                </div>
              </div>
            </div>
            <div className="content ">
              <div className=" info-1">
                <label className="title-name">Video</label>
                <div className={`input-value `}>
                  <input type="text" defaultValue={dataEdit.video} readOnly />
                </div>
              </div>
            </div>
            <div className="content ">
              <div className=" info-1">
                <label className="title-name">Hình ảnh</label>
              </div>
            </div>

            <div className="content">
              <div className="list-image-preview">
                {dataEdit.imageModelList?.map((item) => {
                  return (
                    <div key={item.id} className="image-preview">
                      <img
                        src={item.image}
                        alt="preview"
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="form-info">
            <div className="header-title">THÔNG TIN KHÁC</div>
            <div className="content">
              <div className={"info-1"}>
                <label className={"title-name"}>Nổi bật</label>
                <div className={`input-value `}>
                  <input type="text" defaultValue={dataEdit.area} readOnly />
                </div>
              </div>
            </div>
            <div className="content between">
              <div className=" info-2">
                <label className="title-name">Sử dụng</label>
                <div className={`input-value `}>
                  <input
                    type="text"
                    defaultValue={dataEdit.usableArea}
                    readOnly
                  />
                  <p>m2</p>
                </div>
              </div>
              <div className=" info-2">
                <label className="title-name">Đường trước</label>
                <div className={`input-value `}>
                  <input
                    type="text"
                    defaultValue={dataEdit.streetHouse}
                    readOnly
                  />
                  <p>m2</p>
                </div>
              </div>
            </div>
            <div className="content between">
              <div className=" info-2">
                <label className="title-name">Mặt tiền</label>
                <div className={`input-value `}>
                  <input
                    type="text"
                    defaultValue={dataEdit.frontispiece}
                    readOnly
                  />
                  <p>m2</p>
                </div>
              </div>
              <div className=" info-2">
                <label className="title-name">Chiều sâu</label>
                <div className={`input-value `}>
                  <input type="text" defaultValue={dataEdit.depth} readOnly />
                  <p>m2</p>
                </div>
              </div>
            </div>
            <div className="content between">
              <div className="flex flex-col flex-1 info-2">
                <label className="title-name">Hướng nhà</label>
                <select disabled>
                  <option>{dataEdit.directionOfHouse}</option>
                </select>
              </div>
              <div className="flex flex-col flex-1 info-2">
                <label className="title-name">Ban công</label>
                <select disabled>
                  <option>{dataEdit.balconyDirection}</option>
                </select>
              </div>
            </div>
            <div className="content between">
              <div className=" info-2">
                <label className="title-name">Số tầng</label>
                <div className={`input-value `}>
                  <input
                    type="text"
                    defaultValue={dataEdit.numberFloors}
                    readOnly
                  />
                </div>
              </div>
              <div className=" info-2">
                <label className="title-name">Phòng ngủ</label>
                <div className={`input-value `}>
                  <input
                    type="text"
                    defaultValue={dataEdit.numberBedRooms}
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="content between">
              <div className=" info-2">
                <label className="title-name">Tầng bán</label>
                <div className={`input-value `}>
                  <input
                    type="text"
                    defaultValue={dataEdit.rentalFloorLocation}
                    readOnly
                  />
                </div>
              </div>
              <div className=" info-2">
                <label className="title-name">Vệ sinh</label>
                <div className={`input-value `}>
                  <input
                    type="text"
                    defaultValue={dataEdit.numberToilets}
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="content">
              <div className={"info-1"}>
                <label className={"title-name"}>Nội thất</label>
                <div className={`input-value `}>
                  <input
                    type="text"
                    defaultValue={dataEdit.interior}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-info">
            <div className="header-title">THÔNG TIN LIÊN HỆ</div>

            <div className="row mb-3">
              <label className="col-2 col-form-label text-bold  title-name ">
                Bạn là
              </label>
              <div className="col-10" style={{ display: "flex" }}>
                <div className="input-group-checkbox w-30">
                  <label>
                    <input
                      type="radio"
                      name="broker"
                      value={brokerCus}
                      checked={
                        dataEdit?.brokerModel?.broker === brokerCus
                          ? true
                          : false
                      }
                    />
                    Chính chủ
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="broker"
                      value={brokerCus}
                      checked={
                        dataEdit?.brokerModel?.broker === brokerCus
                          ? true
                          : false
                      }
                    />
                    Môi giới
                  </label>
                </div>
              </div>
            </div>
            <div className="content between ">
              <div className={"info-2"}>
                <label className={"title-name"}>Họ tên</label>
                <div className={`input-value `}>
                  <input
                    type="text"
                    defaultValue={dataEdit.userModel.fullName}
                    readOnly
                  />
                </div>
              </div>
              <div className={"info-2"}>
                <label className={"title-name"}>Điện thoại</label>
                <div className={`input-value `}>
                  <input
                    type="text"
                    defaultValue={dataEdit.userModel.phoneNumber}
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="content between">
              <div className=" info-2">
                <label className="title-name">Địa Chỉ</label>
                <div className={`input-value `}>
                  <input
                    type="text"
                    defaultValue={dataEdit.userModel.address}
                    readOnly
                  />
                </div>
              </div>
              <div className=" info-2">
                <label className="title-name">Email</label>
                <div className={`input-value `}>
                  <input
                    type="text"
                    defaultValue={dataEdit.userModel.email}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReadInfo;

import React, { useState } from "react";
import InputValue from "../InputValue/InputValue";
import Select from "../Select/Select";
import {
  detailType,
  paymentdata,
  legalDocumentData,
  directions,
} from "../../assets/data/DetailType";
import { apiUpLoadImages } from "../../services/post";
import { useEffect } from "react";

export const FormInfo = ({
  payload,
  setPayload,
  activeIndex,
  setLoading,
  loading,
  imagesPreview,
  info,
  setImagesPreview,
  auction,
}) => {
  useEffect(() => {
    if (payload) {
      const images = payload?.imageModelList?.map((item) => {
        return item.image;
      });
      setImagesPreview(images);
    }
  }, [payload]);
  const [isBroker, setIsBroker] = useState(
    payload?.brokerModel?.broker || false
  );

  const handelFiles = async (e) => {
    try {
      setLoading(true);
      e.stopPropagation();
      const files = e.target.files;
      const images = new FormData();
      for (let i of files) {
        images.append("file", i);
        images.append("upload_preset", process.env.REACT_APP_UPLOAD_ASSET_NAME);
        const response = await apiUpLoadImages(images);
        if (response.status === 200) {
          const imageData = response.data?.secure_url;
          addImagesToModelList(imageData);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const handleDeleteImage = (imageData) => {
    // Tạo một mảng mới để lưu trữ dữ liệu ảnh đã được loại bỏ
    const newImagesPreview = imagesPreview.filter(
      (image) => image !== imageData
    );

    // Lặp qua mảng mới và cập nhật lại dữ liệu trong state imageModelList
    const newImageModelList = [];
    for (let image of newImagesPreview) {
      newImageModelList.push({ image: image });
    }

    // Cập nhật lại state
    setImagesPreview(newImagesPreview);
    setPayload((prev) => ({
      ...prev,
      imageModelList: newImageModelList,
    }));
  };
  const addImagesToModelList = (imageData) => {
    setPayload((prev) => ({
      ...prev,
      imageModelList: [...prev.imageModelList, { image: imageData }],
    }));
    setImagesPreview((prev) => [...prev, imageData]);
  };
  const handleBrokerChange = (e) => {
    const { value } = e.target;
    const isBroker = value === "true";
    setPayload((prevPayload) => ({
      ...prevPayload,
      brokerModel: {
        ...prevPayload.brokerModel,
        broker: isBroker ? false : true,
      },
    }));
    setIsBroker(!isBroker);
  };

  return (
    <>
      <div className="form-info">
        <div className="header-title">thông tin bất động sản</div>

        <div className="content between ">
          <InputValue
            label={"Diện tích"}
            placeholder={"Nhập dữ liệu"}
            type={"text"}
            name={"area"}
            className={"title-name"}
            required
            value={payload.area}
            setValue={setPayload}
            classParent={"info-2"}
            inputvalue={"m2"}
            onlyNumber={true}
          />
          {auction ? (
            <Select
              label="Giấy tờ"
              type="legalDocument"
              options={legalDocumentData}
              payload={payload.legalDocument}
              setPayload={(e) =>
                setPayload({
                  ...payload,
                  legalDocument: e.target.value,
                })
              }
              selectOption={true}
            />
          ) : activeIndex === 0 ? (
            <InputValue
              label={"Giá bán"}
              placeholder={"Nhập dữ liệu"}
              type={"text"}
              name={"price"}
              className={"title-name"}
              required
              value={payload.price}
              setValue={setPayload}
              classParent={"info-2"}
              inputvalue={"vnđ"}
              onlyNumber={true}
            />
          ) : (
            <InputValue
              label={"Giá thuê"}
              placeholder={"Nhập dữ liệu"}
              type={"text"}
              name={"price"}
              className={"title-name"}
              required
              value={payload.price}
              setValue={setPayload}
              classParent={"info-2"}
              inputvalue={"vnđ"}
              onlyNumber={true}
            />
          )}
        </div>
        {!auction ? (
          <>
            <div className="content between ">
              <Select
                label="Loại nhà"
                type="typeDetailModel"
                options={
                  activeIndex === 0
                    ? detailType.filter((item) => item.businessID === "1")
                    : detailType.filter((item) => item.businessID === "2")
                }
                payload={payload.typeDetailModel?.typeDetailName || " "}
                setPayload={(e) =>
                  setPayload({
                    ...payload,
                    typeDetailModel: {
                      id: detailType.find(
                        (item) => item.value === e.target.value
                      ).id,
                      typeDetailName: e.target.value,
                    },
                  })
                }
                selectOption={true}
              />

              {activeIndex === 0 ? (
                <Select
                  label="Giấy tờ"
                  type="legalDocument"
                  options={legalDocumentData}
                  payload={payload.legalDocument}
                  setPayload={(e) =>
                    setPayload({
                      ...payload,
                      legalDocument: e.target.value,
                    })
                  }
                  selectOption={true}
                />
              ) : (
                <InputValue
                  label={"Đặt cọc"}
                  placeholder={"Nhập dữ liệu"}
                  type={"text"}
                  name={"depositPrice"}
                  className={"title-name"}
                  required
                  value={payload.depositPrice}
                  setValue={setPayload}
                  classParent={"info-2"}
                  inputvalue={"tháng"}
                  onlyNumber={true}
                />
              )}
            </div>
            {activeIndex === 0 ? (
              " "
            ) : (
              <div className="content between ">
                <Select
                  label="Thanh toán"
                  type="payment"
                  options={paymentdata}
                  payload={payload.payment}
                  setPayload={(e) =>
                    setPayload({
                      ...payload,
                      payment: e.target.value,
                    })
                  }
                  selectOption={true}
                />
                <InputValue
                  label={"Tối thiểu"}
                  placeholder={"Nhập dữ liệu"}
                  type={"text"}
                  name={"minRentalPeriod"}
                  className={"title-name"}
                  required
                  value={payload.minRentalPeriod}
                  setValue={setPayload}
                  classParent={"info-2"}
                  inputvalue={"tháng"}
                  onlyNumber={true}
                />
              </div>
            )}
            <div className="content">
              <InputValue
                label={"Tiêu đề"}
                placeholder={"Nhập dữ liệu"}
                type={"text"}
                name={"title"}
                className={"title-name"}
                required
                value={payload.title}
                setValue={setPayload}
                classParent={"info-1"}
              />
            </div>
          </>
        ) : (
          <></>
        )}
        <div className="content ">
          <InputValue
            label={"Mô tả"}
            placeholder={"Nhập dữ liệu"}
            type={"text"}
            name={"description"}
            className={"title-name"}
            required={false}
            value={payload.description}
            setValue={setPayload}
            classParent={"info-1"}
            rows={true}
          />
        </div>

        <div className="content ">
          <InputValue
            label={"Video"}
            placeholder={"https://www.youtube.com/"}
            type={"text"}
            name={"video"}
            className={"title-name"}
            value={payload.video}
            setValue={setPayload}
            classParent={"info-1"}
          />
        </div>

        <div className="content">
          <div className="info-1">
            <label className="title-name" htmlFor="">
              Hình ảnh
            </label>
            <div className="action-img">
              <label className="upload-image" htmlFor="file">
                {loading ? (
                  <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  <>
                    <div className="icon">
                      <i className="bi bi-file-earmark text-icon"></i>
                      <i className="bi bi-arrow-down upload-icon"></i>
                    </div>
                    {imagesPreview?.length !== 0 ? (
                      <p>Bẩm để chọn thêm ảnh</p>
                    ) : (
                      <p>Bấm để chọn ảnh cần tải lên</p>
                    )}
                    <span>{""}</span>
                  </>
                )}
              </label>

              <input
                type="file"
                onChange={handelFiles}
                id="file"
                hidden
                multiple
              />
            </div>
          </div>
        </div>
        <div className="content">
          <div className="list-image-preview">
            {imagesPreview?.map((item, index) => {
              return (
                <div key={index} className="image-preview">
                  <img
                    src={item}
                    alt="preview"
                    className="w-full h-full object-cover rounded-md"
                  />
                  <span
                    title="Xóa"
                    onClick={() => handleDeleteImage(item)}
                    className="icon_image"
                  >
                    <i className="bi bi-x-circle"></i>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="form-info">
        <div className="header-title">Thông tin khác</div>
        <div className="content">
          <InputValue
            label={"Nổi bật"}
            placeholder={"Nhập dữ liệu"}
            type={"text"}
            name={"salientFeatures"}
            className={"title-name"}
            value={payload.salientFeatures}
            setValue={setPayload}
            classParent={"info-1"}
          />
        </div>
        <div className="content between">
          <InputValue
            label={"Sữ dụng"}
            placeholder={"Nhập dữ liệu"}
            type={"text"}
            name={"usableArea"}
            className={"title-name"}
            value={payload.usableArea}
            setValue={setPayload}
            classParent={"info-2"}
            onlyNumber={true}
            inputvalue={"m2"}
          />
          <InputValue
            label={"Đường trước"}
            placeholder={"Nhập dữ liệu"}
            type={"text"}
            name={"streetHouse"}
            className={"title-name"}
            onlyNumber={true}
            value={payload.streetHouse}
            setValue={setPayload}
            classParent={"info-2"}
            inputvalue={"m"}
          />
        </div>
        <div className="content between">
          <InputValue
            label={"Mặt tiền"}
            placeholder={"Nhập dữ liệu"}
            type={"text"}
            name={"frontispiece"}
            className={"title-name"}
            value={payload.frontispiece}
            setValue={setPayload}
            classParent={"info-2"}
            onlyNumber={true}
            inputvalue={"m2"}
          />
          <InputValue
            label={"Chiều sâu"}
            placeholder={"Nhập dữ liệu"}
            type={"text"}
            onlyNumber={true}
            name={"depth"}
            className={"title-name"}
            value={payload.depth}
            setValue={setPayload}
            classParent={"info-2"}
            inputvalue={"m2"}
          />
        </div>
        <div className="content between">
          <Select
            label="Hướng nhà"
            type="directionOfHouse"
            options={directions}
            payload={payload.directionOfHouse}
            setPayload={(e) =>
              setPayload({ ...payload, directionOfHouse: e.target.value })
            }
            selectOption={true}
          />
          <Select
            label="Ban công"
            type="balconyDirection"
            options={directions}
            payload={payload.balconyDirection}
            setPayload={(e) =>
              setPayload({ ...payload, balconyDirection: e.target.value })
            }
            selectOption={true}
          />
        </div>
        <div className="content between">
          <InputValue
            label={"Số tầng"}
            placeholder={"Nhập dữ liệu"}
            type={"text"}
            name={"numberFloors"}
            className={"title-name"}
            value={payload.numberFloors}
            setValue={setPayload}
            classParent={"info-2"}
            onlyNumber={true}
          />
          <InputValue
            label={"Phòng ngủ"}
            placeholder={"Nhập dữ liệu"}
            type={"text"}
            name={"numberBedRooms"}
            onlyNumber={true}
            className={"title-name"}
            value={payload.numberBedRooms}
            setValue={setPayload}
            classParent={"info-2"}
          />
        </div>
        <div className="content between">
          <InputValue
            label={`Tầng ${activeIndex === 0 ? "bán" : "thuê"}`}
            placeholder={"Nhập dữ liệu"}
            type={"text"}
            name={"rentalFloorLocation"}
            className={"title-name"}
            onlyNumber={true}
            value={payload.rentalFloorLocation}
            setValue={setPayload}
            classParent={"info-2"}
          />
          <InputValue
            label={"Vệ sinh"}
            placeholder={"Nhập dữ liệu"}
            type={"text"}
            onlyNumber={true}
            name={"numberToilets"}
            className={"title-name"}
            value={payload.numberToilets}
            setValue={setPayload}
            classParent={"info-2"}
          />
        </div>
        <div className="content">
          <InputValue
            label={"Nội thất"}
            placeholder={"Nhập dữ liệu"}
            type={"text"}
            name={"interior"}
            className={"title-name"}
            value={payload.interior}
            setValue={setPayload}
            classParent={"info-1"}
          />
        </div>
      </div>
      {!auction ? (
        <div className="form-info">
          <div className="header-title">Thông tin liên hệ</div>

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
                    value={payload.brokerModel.broker}
                    checked={isBroker === true}
                    onChange={handleBrokerChange}
                  />
                  Chính chủ
                </label>
                <label>
                  <input
                    type="radio"
                    name="broker"
                    value={payload.brokerModel.broker}
                    checked={isBroker === false}
                    onChange={handleBrokerChange}
                  />
                  Môi giới
                </label>
              </div>
            </div>
          </div>

          <div className="content between">
            <InputValue
              label={"Họ tên"}
              placeholder={"Nhập dữ liệu"}
              type={"text"}
              name={"fullName"}
              className={"title-name"}
              value={payload.userModel.fullName}
              classParent={"info-2"}
              setValue={setPayload}
            />
            <InputValue
              label={"Điện thoại"}
              placeholder={"Nhập dữ liệu"}
              type={"text"}
              name={"phoneNumber"}
              className={"title-name"}
              value={payload.userModel.phoneNumber}
              classParent={"info-2"}
              setValue={setPayload}
            />
          </div>
          <div className="content between">
            <InputValue
              label={"Địa chỉ"}
              placeholder={"Nhập dữ liệu"}
              type={"text"}
              name={"addressUser"}
              className={"title-name"}
              value={payload.userModel.address}
              classParent={"info-2"}
              setValue={setPayload}
            />
            <InputValue
              label={"Email"}
              placeholder={"Nhập dữ liệu"}
              type={"email"}
              name={"email"}
              className={"title-name"}
              value={payload.userModel.email}
              classParent={"info-2"}
              setValue={setPayload}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

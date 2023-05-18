import React, { useState } from "react";
import InputValue from "../InputValue/InputValue";

const AuctionForm = ({ payload, setPayload, userData }) => {
  const initialValues = {
    dateOfPublication: "", // Giá trị ngày công bố
    registrationDateStart: "", // Giá trị ngày bắt đầu đăng ký
    registrationDateEnd: "", // Giá trị ngày kết thúc đăng ký
    auctionStartDate: "", // Giá trị ngày bắt đầu phiên đấu giá
    auctionEndDate: "", // Giá trị ngày kết thúc phiên đấu giá
  };
  const [date, setDate] = useState(initialValues);
  return (
    <div className="form-info ">
      <div className="header-title">thông tin đấu giá</div>
      <div className="content">
        <InputValue
          label={"Người có tài sản "}
          placeholder={"Nhập dữ liệu"}
          type={"text"}
          name={"fullName"}
          className={"title-name"}
          value={userData.fullName}
          classParent={"info-1"}
          required
          readOnly
        />
      </div>
      <div className="content">
        <InputValue
          label={"Ngày công bố"}
          placeholder={"Nhập dữ liệu"}
          type={"datetime-local"}
          name={"dateOfPublication"}
          className={"title-name"}
          value={payload.dateOfPublication}
          setValue={setPayload}
          classParent={"info-1"}
          required
          date={date}
          setDate={setDate}
        />
      </div>
      <div className="content">
        <InputValue
          label={"Giấy tờ liên quan"}
          placeholder={"Nhập link hồ sơ đấu giá"}
          type={"text"}
          name={"auctionParticipationProfile"}
          className={"title-name"}
          value={payload.auctionParticipationProfile}
          setValue={setPayload}
          classParent={"info-1"}
          required
        />
      </div>
      <div className="content between">
        <InputValue
          label={"Hạn đăng ký từ"}
          required
          placeholder={"Nhập dữ liệu"}
          type={"datetime-local"}
          name={"registrationDateStart"}
          className={"title-name"}
          value={payload.registrationDateStart}
          setValue={setPayload}
          classParent={"info-1"}
          date={date}
          setDate={setDate}
        />
        <InputValue
          label={"Hạn đăng ký đến"}
          placeholder={"Nhập dữ liệu"}
          type={"datetime-local"}
          required
          name={"registrationDateEnd"}
          className={"title-name"}
          value={payload.registrationDateEnd}
          setValue={setPayload}
          classParent={"info-1"}
          date={date}
          setDate={setDate}
        />
      </div>
      <div className="content between">
        <InputValue
          label={"Thời gian bắt đầu cuộc đấu giá "}
          placeholder={"Nhập dữ liệu"}
          type={"datetime-local"}
          required
          name={"auctionStartDate"}
          className={"title-name"}
          value={payload.auctionStartDate}
          setValue={setPayload}
          date={date}
          setDate={setDate}
          classParent={"info-1"}
        />
        <InputValue
          label={"Thời gian kết thúc cuộc đấu giá "}
          placeholder={"Nhập dữ liệu"}
          type={"datetime-local"}
          name={"auctionEndDate"}
          required
          className={"title-name"}
          value={payload.auctionEndDate}
          setValue={setPayload}
          classParent={"info-1"}
          date={date}
          setDate={setDate}
        />
      </div>
      <div className="content between">
        <InputValue
          label={"Giá khởi điểm"}
          placeholder={"Nhập dữ liệu"}
          type={"text"}
          name={"startingPrice"}
          className={"title-name"}
          required
          value={payload.startingPrice}
          setValue={setPayload}
          classParent={"info-1"}
          inputvalue={"vnđ"}
        />
        <InputValue
          label={"Bước giá"}
          placeholder={"Nhập dữ liệu"}
          type={"text"}
          required
          name={"priceStep"}
          className={"title-name"}
          value={payload.priceStep}
          setValue={setPayload}
          classParent={"info-1"}
          inputvalue={"vnđ"}
        />
      </div>
      <div className="content">
        <InputValue
          label={"Chi phí tham gia"}
          placeholder={"Nhập dữ liệu"}
          type={"text"}
          required
          name={"auctionParticipationFee"}
          className={"title-name"}
          value={payload.auctionParticipationFee}
          setValue={setPayload}
          classParent={"info-1"}
          inputvalue={"vnđ"}
        />
      </div>
      <div className="content">
        <InputValue
          label={"Tiền đặt trước"}
          placeholder={"Nhập dữ liệu"}
          type={"text"}
          name={"downPayment"}
          className={"title-name"}
          value={payload.downPayment}
          setValue={setPayload}
          classParent={"info-1"}
          inputvalue={"vnđ"}
          required
        />
      </div>
    </div>
  );
};

export default AuctionForm;

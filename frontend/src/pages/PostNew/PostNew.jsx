import React, { useState, useEffect } from "react";
import "./postnew.scss";
import axios from "axios";
import { area_haiphong, rental, sell } from "../../assets/images";
import { apiUploadImages } from "../../services/post";
import InputValue from "../../components/InputValue/InputValue";

import {
  detailType,
  directions,
  legalDocumentData,
  paymentdata,
} from "../../assets/data/DetailType";
import { toast } from "react-toastify";
import Select from "../../components/Select/Select";
import LoadingComp from "../../components/Loading/Loading";

const PostNew = () => {
  //  window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //  });
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [reset, setReset] = useState(false);
  const info = {
    id: 2,
    username: "tanthorrr",
    email: "votantho30073@gmail.com",
    fullName: "Võ Tấn Thọ",
    phoneNumber: "0375583475",
    addressUser: "Bầu năng 1 , Hòa Khánh Nam , Liên Chiểu , Đà Nẵng",
  };
  const [payload, setPayload] = useState({
    //tên dự án  v
    nameEstate: "",
    // địa chỉ v
    address: "",
    //diện tích v
    area: "",
    //giá v
    price: "",
    // đặt cọc chỉ bên thuê v
    depositPrice: 0,
    //giá thuê v
    rentCost: 0,
    // tài liệu pháp lý v
    legalDocument: 1,
    // thanh toán chỉ bên cho thuê
    payment: "",
    // tiêu đề v
    title: "",
    // chi tiết mô tả v
    description: "",
    // video v
    video: "",
    // diện tích sữ dụng
    usableArea: "",
    // đường trước nhà
    streetHouse: "",
    // hướng bang công
    balconyDirection: "1",
    // số tầng nhà
    numberFloors: "",
    // số phòng ngủ
    numberBedRooms: "",
    // tầng được cho thuê
    rentalFloorLocation: "",
    // số tolet
    numberToilets: "",
    // nội thất
    interior: "",
    // hướng nhà
    directionOfHouse: "1",
    // // mặt tiền
    // frontispiece: "",
    // // chiều sâu:
    // depth: "",

    // số tháng thuê tối thiểu
    minRentalPeriod: "",
    salientFeatures: "",
    // người đăng lấy id của người đăng tin
    userModel: {
      id: info.id,
    },
    // loại đăng : mua bán với thuê v
    businessTypeModel: {
      id: null,
    },
    // loại hình : ví dụ như căng hộ cao cấp , nhà cấp 4 ,....
    typeDetailModel: {
      id: null,
    },
    // danh sách ảnh
    imageModelList: [],
  });
  useEffect(() => {
    axios
      .get("https://vapi.vnappmob.com/api/province/")
      .then((response) => setProvinces(response.data.results));
  }, []);

  useEffect(() => {
    if (province !== "") {
      axios
        .get(`https://vapi.vnappmob.com/api/province/district/${province}`)
        .then((response) => setDistricts(response.data.results));
    }
  }, [province]);

  useEffect(() => {
    if (district !== "") {
      axios
        .get(`https://vapi.vnappmob.com/api/province/ward/${district}`)
        .then((response) => setWards(response.data.results));
    }
  }, [district]);
  function handleProvinceChange(selectedProvince) {
    setProvince(selectedProvince);
    setPayload((prev) => ({
      ...prev,
    }));
    setDistrict("");
    setWard("");
  }

  function handleDistrictChange(selectedDistrict) {
    setDistrict(selectedDistrict);
    setWard("");
  }

  function handleWardChange(selectedWard) {
    setWard(selectedWard);
  }
  const addImagesToModelList = (imageData) => {
    setPayload((prev) => ({
      ...prev,
      imageModelList: [...prev.imageModelList, { image: imageData }],
    }));
    setImagesPreview((prev) => [...prev, imageData]);
  };

  const handelFiles = async (e) => {
    try {
      setLoading(true);
      e.stopPropagation();
      const files = e.target.files;
      const images = new FormData();
      for (let i of files) {
        images.append("file", i);
        images.append("upload_preset", process.env.REACT_APP_UPLOAD_ASSET_NAME);
        const response = await apiUploadImages(images);
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
  const handleClick = (index) => {
    if (index === activeIndex) {
      return;
    }

    if (index === 1 && (activeIndex === 0 || activeIndex === null)) {
      setActiveIndex(1);
      setPayload((prev) => ({
        ...prev,
        businessTypeModel: {
          id: 2,
        },
        typeDetailModel: {
          id: 11,
        },
      }));
    } else if (index === 0 && (activeIndex === 1 || activeIndex === null)) {
      setActiveIndex(0);
      setPayload((prev) => ({
        ...prev,
        businessTypeModel: {
          id: 1,
        },
        typeDetailModel: {
          id: 1,
        },
      }));
    } else {
      setActiveIndex(index);
      setTimeout(() => {
        setActiveIndex(index);
      }, 0);
    }
  };

  useEffect(() => {
    const fetchProvinces = async () => {
      const response = await axios.get("https://provinces.open-api.vn/api/p/");
      setProvinces(response.data);
    };
    fetchProvinces();
  }, []);

  const handleSubmitPostNews = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/realEstate/addRealEstate",
        payload
      );
      console.log(response);
      toast.success("Đăng bài thành công", { autoClose: 3000 });
      setPayload({
        nameEstate: "",
        address: "",
        area: "",
        price: "",
        depositPrice: 0,
        rentCost: 0,
        legalDocument: "",
        payment: "",
        title: "",
        description: "",
        video: "",
        usableArea: "",
        streetHouse: "",
        balconyDirection: "",
        numberFloors: "",
        numberBedRooms: "",
        rentalFloorLocation: "",
        numberToilets: "",
        interior: "",
        directionOfHouse: "",
        // frontispiece: "",
        // depth: "",
        //salientFeatures
        minRentalPeriod: "",
        salientFeatures: "",
        userModel: {
          id: info.id,
        },
        businessTypeModel: {
          id: activeIndex === 0 ? 1 : 2,
        },
        typeDetailModel: {
          id: 1,
        },
        imageModelList: [],
      });
      setImagesPreview([]);
      console.log(response.data);
      // console.log(payload);
    } catch (error) {
      console.log(error);
    }
  };
  const setPayloadByType = (type, value) => {
    switch (type) {
      case "typeDetailModel":
        setPayload((prevPayload) => ({
          ...prevPayload,
          typeDetailModel: {
            id: parseInt(value),
          },
        }));
        break;
      case "legalDocument":
        // const selectedOption = legalDocumentData.find(
        //      (option) => option.id === parseInt(value)
        // );

        setPayload((prevPayload) => ({
          ...prevPayload,
          // legalDocument: selectedOption ? selectedOption.value : "",
          legalDocument: value,
        }));
        break;
      case "payment":
        setPayload((prevPayload) => ({
          ...prevPayload,
          payment: parseInt(value),
        }));
        break;
      case "directionOfHouse":
        setPayload((prevPayload) => ({
          ...prevPayload,
          directionOfHouse: parseInt(value),
        }));
        break;
      case "balconyDirection":
        setPayload((prevPayload) => ({
          ...prevPayload,
          balconyDirection: parseInt(value),
        }));
        break;

      // Thêm các case cho các trường khác nếu cần
      default:
        break;
    }
  };
  const handleClickSetIndex = (type) => {
    if (type === "sell") {
      setActiveIndex(0);
      setPayload((prev) => ({
        ...prev,
        businessTypeModel: {
          id: 1,
        },
        typeDetailModel: {
          id: 1,
        },
      }));
    } else if (type === "rent") {
      setActiveIndex(1);
      setPayload((prev) => ({
        ...prev,
        businessTypeModel: {
          id: 2,
        },
        typeDetailModel: {
          id: 11,
        },
      }));
    }
  };
  return (
    <>
      {activeIndex === null ? (
        <div className="postasale">
          <div className="content1">
            <div className="header-title1">Chọn hình thức đăng tin</div>
            <div className="content-body">
              <div
                className="action"
                onClick={() => handleClickSetIndex("sell")}
              >
                <img src={sell} alt="" />
                <p>
                  Đăng tin bán nhà đất{" "}
                  <i className="bi bi-arrow-right-circle"></i>
                </p>
              </div>
              <div
                className="action"
                onClick={() => handleClickSetIndex("rent")}
              >
                <img src={rental} alt="" />
                <p>
                  Đăng tin nhà đất <i className="bi bi-arrow-right-circle"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="postnew">
          {loading ? (
            <div className="loading__login">
              <LoadingComp
                type="spin"
                color="#b53c12"
                width="50px"
                height="50px"
              />
            </div>
          ) : null}
          <div className="post-container">
            <form action="" onSubmit={handleSubmitPostNews}>
              <div className="tap-link">
                <div
                  className={`tap-link-item ${
                    activeIndex === 0 ? "active" : ""
                  }`}
                  onClick={() => handleClick(0)}
                >
                  <div className="title">Đăng tin bán nhà đất</div>
                </div>
                <div
                  className={`tap-link-item ${
                    activeIndex === 1 ? "active" : ""
                  }`}
                  onClick={() => handleClick(1)}
                >
                  <div className="title">Đăng tin cho thuê nhà đất</div>
                </div>
              </div>

              <div className="form-info">
                <div className="header-title">VỊ TRÍ BẤT ĐỘNG SẢN</div>
                <div className="content">
                  <InputValue
                    label={"Dự án"}
                    placeholder={"Nhập dữ liệu"}
                    type={"text"}
                    name={"nameEstate"}
                    className={"title-name"}
                    required
                    value={payload.nameEstate}
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
                    value={province}
                    setValue={handleProvinceChange}
                  />

                  <Select
                    label="Quận/Huyện"
                    type="district"
                    options={districts}
                    value={district}
                    setValue={handleDistrictChange}
                    selectOption={false}
                  />
                </div>
                <div className="content between">
                  <Select
                    label="Phường/Xã"
                    type="ward"
                    options={wards.map((ward) => ({
                      value: ward.ward_id,
                      label: ward.ward_name,
                    }))}
                    value={ward}
                    setValue={handleWardChange}
                  />
                  <InputValue
                    label={"Địa chỉ"}
                    placeholder={"Nhập dữ liệu"}
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
              <div className="form-info">
                <div className="header-title">thông tin bất động sản</div>
                <div className="content">
                  <div className="info-1">
                    <div className="check-price">
                      <input type="checkbox" />
                      <p>Có thể thương lượng</p>
                    </div>
                  </div>
                </div>
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
                  {activeIndex === 0 ? (
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
                      inputvalue={"triệu"}
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
                      inputvalue={"triệu"}
                      onlyNumber={true}
                    />
                  )}
                </div>
                <div className="content between ">
                  <Select
                    label="Loại nhà"
                    type="typeDetailModel"
                    options={
                      activeIndex === 0
                        ? detailType.filter((item) => item.businessID === "1")
                        : detailType.filter((item) => item.businessID === "2")
                    }
                    value={payload.typeDetailModel?.id || " "}
                    setValue={(event) =>
                      setPayloadByType("typeDetailModel", event.target.value)
                    }
                    selectOption={true}
                  />

                  {activeIndex === 0 ? (
                    <Select
                      label="Giấy tờ"
                      type="legalDocument"
                      options={legalDocumentData}
                      value={payload.legalDocument}
                      setValue={(event) =>
                        setPayloadByType("legalDocument", event.target.value)
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
                      value={payload.payment}
                      setValue={(event) =>
                        setPayloadByType("payment", event.target.value)
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
                <div className="content ">
                  <InputValue
                    label={"Mô tả"}
                    placeholder={"Nhập dữ liệu"}
                    type={"text"}
                    name={"description"}
                    className={"title-name"}
                    required
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
                    required
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
                        <div className="icon">
                          <i className="bi bi-file-earmark text-icon"></i>
                          <i className="bi bi-arrow-down upload-icon"></i>
                        </div>
                        {imagesPreview.length !== 0 ? (
                          <p>Bẩm để chọn thêm ảnh</p>
                        ) : (
                          <p>Bấm để chọn ảnh cần tải lên</p>
                        )}
                        <span>{""}</span>
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
                    {imagesPreview?.map((item) => {
                      return (
                        <div key={item} className="image-preview">
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
                    required
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
                    required
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
                    required
                    value={payload.streetHouse}
                    setValue={setPayload}
                    classParent={"info-2"}
                    inputvalue={"m"}
                  />
                </div>
                <div className="content between">
                  {/* Mặt tiền  và chiều sâu chưa có trường trong api
                     <InputValue
                          label={"Mặt tiền"}
                          placeholder={"Nhập dữ liệu"}
                          type={"text"}
                          name={"frontispiece"}
                          className={"title-name"}
                          required
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
                          required
                          value={payload.depth}
                          setValue={setPayload}
                          classParent={"info-2"}
                          inputvalue={"m2"}
                     />
                     */}
                </div>
                <div className="content between">
                  <Select
                    label="Hướng nhà"
                    type="directionOfHouse"
                    options={directions}
                    value={payload.directionOfHouse}
                    setValue={(event) =>
                      setPayloadByType("directionOfHouse", event.target.value)
                    }
                    selectOption={true}
                  />
                  <Select
                    label="Ban công"
                    type="balconyDirection"
                    options={directions}
                    value={payload.balconyDirection}
                    setValue={(event) =>
                      setPayloadByType("balconyDirection", event.target.value)
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
                    required
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
                    required
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
                    required
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
                    required
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
                    required
                    value={payload.interior}
                    setValue={setPayload}
                    classParent={"info-1"}
                  />
                </div>
              </div>
              <div className="form-info">
                <div className="header-title">Thông tin liên hệ</div>
                <div className="content between">
                  <InputValue
                    label={"Họ tên"}
                    placeholder={"Nhập dữ liệu"}
                    type={"text"}
                    name={"fullName"}
                    className={"title-name"}
                    required
                    value={info.fullName}
                    classParent={"info-2"}
                    disabled
                  />
                  <InputValue
                    label={"Điện thoại"}
                    placeholder={"Nhập dữ liệu"}
                    type={"text"}
                    name={"phoneNumber"}
                    className={"title-name"}
                    required
                    value={info.phoneNumber}
                    classParent={"info-2"}
                    readOnly={true}
                  />
                </div>
                <div className="content between">
                  <InputValue
                    label={"Địa chỉ"}
                    placeholder={"Nhập dữ liệu"}
                    type={"text"}
                    name={"addressUser"}
                    className={"title-name"}
                    required
                    value={info.addressUser}
                    classParent={"info-2"}
                    readOnly={true}
                  />
                  <InputValue
                    label={"Email"}
                    placeholder={"Nhập dữ liệu"}
                    type={"email"}
                    name={"email"}
                    className={"title-name"}
                    required
                    value={info.email}
                    classParent={"info-2"}
                    readOnly={true}
                  />
                </div>
              </div>
              <div className="form-info">
                <div className="header-title">
                  Xem trước tin hiển thị & đăng tin
                </div>
                <div className="display-item">
                  <img
                    src={
                      payload.imageModelList.length !== 0
                        ? payload.imageModelList[0].image
                        : area_haiphong
                    }
                    alt=""
                  />
                  <div className="item-content row">
                    <p className="name-detail">
                      {payload.nameEstate
                        ? payload.nameEstate
                        : "Tên bất động sản "}
                    </p>
                    <div className="info-1 col-6">
                      <div className="detail-info">
                        <p>
                          <i className="bi bi-textarea-resize"></i>
                          Diện tích:
                        </p>
                        <p>{payload.area}</p>
                      </div>
                      <div className="detail-info">
                        <p>
                          <i className="bi bi-compass"></i> Hướng:
                        </p>
                        <p>
                          {payload.directionOfHouse
                            ? `${
                                directions[payload.directionOfHouse - 1].value
                              }`
                            : ""}
                        </p>
                      </div>
                      <div className="detail-info">
                        <p>
                          <i className="bi bi-geo-alt"></i>
                          Địa chỉ:
                        </p>
                        <p>{payload.address}</p>
                      </div>
                    </div>
                    <div className="info-1 col-6">
                      <div className="detail-info">
                        <p>
                          <i className="bi bi-arrows-fullscreen"></i>
                          Mặt tiền:
                        </p>
                        <p>1</p>
                      </div>
                      <div className="detail-info">
                        <p>
                          <i className="bi bi-arrows-expand"></i>
                          Chiệu sâu:
                        </p>
                        <p>1</p>
                      </div>
                    </div>
                  </div>
                  <div className="display-footer">
                    <div className="display-price">
                      <p>$ Giá : </p>
                      <p>
                        {" "}
                        {payload.price}
                        Triệu
                      </p>
                    </div>
                    <div className="creat-at">
                      <p>
                        <i className="bi bi-clock"></i>vừa mới đăng
                      </p>
                    </div>
                  </div>
                </div>
                <div className="submit-action">
                  <button className={"btn-submit"} type="submit">
                    Đăng tin
                  </button>
                  <button className={"btn-submit"}>Lưu nháp</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PostNew;

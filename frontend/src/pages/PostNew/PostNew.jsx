import React, { useEffect, useState } from "react";
import "./postnew.scss";
import axios from "axios";
import { toast } from "react-toastify";
import PostSell from "../../components/PostSell/PostSell";
import { Tablink } from "../../components/TabLink/TabLink";
import Address from "../../components/Address/Address";
import { FormInfo } from "../../components/FormInfo/FormInfo";
import Preview from "../../components/Preview/Preview";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../store/actions/user";

const PostNew = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { userData } = useSelector((state) => state.user);
  const [loadingcComp, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [errorImage, setErrorImage] = useState("");
  useEffect(() => {
    dispatch(getUserById(userId));
  }, [dispatch, userId]);
  useEffect(() => {
    if (userData) {
      setPayload((prev) => ({
        ...prev,
        brokerModel: {
          broker: false,
        },
        userModel: {
          id: userData.id,
          fullName: userData?.fullName,
          email: userData?.email,
          phoneNumber: userData.phoneNumber,
          address: userData.address,
        },
      }));
    }
  }, [userData]);
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
    balconyDirection: "Đông",
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
    directionOfHouse: "Đông",
    // m
    frontispiece: "",
    // chiều sâu:
    depth: "",
    // số tháng thuê tối thiểu
    minRentalPeriod: "",
    salientFeatures: "",
    // người đăng lấy id của người đăng tin
    userModel: {
      id: "",
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
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
    // thành phố
    cityProvince: "",
    district: "",
    wards: "",
    brokerModel: {
      broker: false,
    },
  });
  const [imagesPreview, setImagesPreview] = useState([]);
  const handleSubmitPostNews = async (event) => {
    event.preventDefault();
    if (payload.imageModelList.length === 0) {
      setErrorImage("Bạn phải cần tải ít nhất 1 hình ");
      window.scrollTo(0, 700);
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/api/realEstate/addRealEstate",
        payload
      );
      toast.success("Đăng bài thành công", { autoClose: 3000 });
      setPayload({
        cityProvince: "",
        district: "",
        wards: "",
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
        frontispiece: "",
        depth: "",
        minRentalPeriod: "",
        salientFeatures: "",
        brokerModel: "",
        userModel: {},
        businessTypeModel: {
          id: activeIndex === 0 ? 1 : 2,
        },
        typeDetailModel: {
          id: 1,
        },
      });
      setImagesPreview([]);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {activeIndex === null ? (
        <PostSell setActiveIndex={setActiveIndex} setPayload={setPayload} />
      ) : (
        <div className="postnew">
          <div className="post-container">
            <form action="" onSubmit={handleSubmitPostNews}>
              <Tablink
                setActiveIndex={setActiveIndex}
                activeIndex={activeIndex}
                setPayload={setPayload}
              />
              <Address payload={payload} setPayload={setPayload} />

              <FormInfo
                payload={payload}
                setPayload={setPayload}
                activeIndex={activeIndex}
                setLoading={setLoading}
                loading={loadingcComp}
                imagesPreview={imagesPreview}
                setImagesPreview={setImagesPreview}
                setImagesError={setErrorImage}
                errorImage={errorImage}
              />
              <Preview payload={payload} info={userData} />
              <div className="submit-action">
                <Button
                  className={"btn-submit"}
                  type="submit"
                  text={"Đăng tin"}
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PostNew;

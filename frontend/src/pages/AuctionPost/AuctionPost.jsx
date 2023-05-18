import React, { useState, useEffect } from "react";
import "./auctionpost.scss";
import { FormInfo } from "../../components/FormInfo/FormInfo";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../store/actions/user";
import AuctionForm from "../../components/AuctionForm/AuctionForm";
import Button from "../../components/Button/Button";
import Address from "../../components/Address/Address";
import axios from "axios";
import { toast } from "react-toastify";

const AuctionPost = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { userData, loading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserById(userId));
  }, [dispatch, userId]);
  const [payload, setPayload] = useState({
    dateOfPublication: "",
    registrationDateStart: "",
    registrationDateEnd: "",
    auctionStartDate: "",
    auctionEndDate: "",
    auctionParticipationProfile: "",
    startingPrice: "",
    priceStep: "",
    auctionParticipationFee: "",
    downPayment: "",
    nameRealEstate: "",
    legalDocument: 1,
    cityProvince: "",
    district: "",
    wards: "",
    address: "",
    area: "",
    description: "",
    video: "",
    salientFeatures: "",
    usableArea: "",
    streetHouse: "",
    balconyDirection: "Đông",
    numberFloors: "",
    numberBedRooms: "",
    rentalFloorLocation: "",
    numberToilets: "",
    interior: "",
    directionOfHouse: "Đông",
    frontispiece: "",
    depth: "",
    imageModelList: [],
    userModel: {
      id: userId,
    },
  });
  const [loadingcComp, setLoading] = useState(false);
  const [imagesPreview, setImagesPreview] = useState([]);
  const hanlderSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auction/addAuction",
        payload
      );
      toast.success("Đăng bài thành công", { autoClose: 3000 });
      setPayload({
        dateOfPublication: "",
        registrationDateStart: "",
        registrationDateEnd: "",
        auctionStartDate: "",
        auctionEndDate: "",
        auctionParticipationProfile: "",
        startingPrice: "",
        priceStep: "",
        legalDocument: 1,
        auctionParticipationFee: "",
        downPayment: "",
        nameRealEstate: "",
        cityProvince: "",
        district: "",
        wards: "",
        address: "",
        area: "",
        description: "",
        video: "",
        salientFeatures: "",
        usableArea: "",
        streetHouse: "",
        balconyDirection: "Đông",
        numberFloors: "",
        numberBedRooms: "",
        rentalFloorLocation: "",
        numberToilets: "",
        interior: "",
        directionOfHouse: "Đông",
        frontispiece: "",
        depth: "",
        imageModelList: [],
        userModel: {
          id: userId,
        },
      });
      setImagesPreview([]);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="auction-post">
      <div className="post-container">
        <form action="" onSubmit={hanlderSubmit}>
          <AuctionForm
            payload={payload}
            setPayload={setPayload}
            userData={userData}
          />
          <Address payload={payload} setPayload={setPayload} auction />
          <FormInfo
            payload={payload}
            setPayload={setPayload}
            loading={loadingcComp}
            setLoading={setLoading}
            imagesPreview={imagesPreview}
            setImagesPreview={setImagesPreview}
            auction
          />
          <div className="submit-action">
            <Button
              className={"btn-submit"}
              type="submit"
              text={"Gữi xét duyệt"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuctionPost;

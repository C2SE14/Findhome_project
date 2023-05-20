import React, { useRef, useState } from "react";
import "./update.scss";
import { FormInfo } from "../FormInfo/FormInfo";
import Address from "../Address/Address";
import Button from "../Button/Button";
import { toast } from "react-toastify";
const UpdatePost = ({ setIsEdit, dataEdit, updateDataEdit }) => {
  const [errorImage, setErrorImage] = useState("");
  const [payload, setPayload] = useState(() => {
    let init = {
      id: dataEdit?.id || "",
      nameEstate: dataEdit?.nameEstate || "",
      address: dataEdit?.address || "",
      area: dataEdit?.area || "",
      price: dataEdit?.price || "",
      depositPrice: dataEdit?.depositPrice === 0 ? 0 : dataEdit?.depositPrice,
      rentCost: dataEdit?.rentCost || 0,
      legalDocument: dataEdit?.legalDocument || "",
      payment: dataEdit?.payment || "",
      title: dataEdit?.title || "",
      description: dataEdit?.description || "",
      video: dataEdit?.video || "",
      usableArea: dataEdit?.usableArea || "",
      streetHouse: dataEdit?.streetHouse || "",
      balconyDirection: dataEdit?.balconyDirection || "Đông",
      numberFloors: dataEdit?.numberFloors || "",
      numberBedRooms: dataEdit?.numberBedRooms || "",
      rentalFloorLocation: dataEdit?.rentalFloorLocation || "",
      numberToilets: dataEdit?.numberToilets || "",
      interior: dataEdit?.interior || "",
      frontispiece: dataEdit?.frontispiece || "",
      depth: dataEdit?.depth || "",
      directionOfHouse: dataEdit?.directionOfHouse || "Đông",
      minRentalPeriod: dataEdit?.minRentalPeriod || "",
      salientFeatures: dataEdit?.salientFeatures || "",
      userModel: {
        id: dataEdit?.userModel?.id,
        fullName: dataEdit?.userModel?.fullName,
        phoneNumber: dataEdit?.userModel?.phoneNumber,
        email: dataEdit?.userModel?.email,
        address: dataEdit?.userModel?.address,
      },
      businessTypeModel: dataEdit?.businessTypeModel?.id
        ? {
            id: dataEdit.businessTypeModel.id,
          }
        : {
            id: null,
          },
      typeDetailModel: dataEdit?.typeDetailModel?.id
        ? {
            id: dataEdit.typeDetailModel.id,
          }
        : {
            id: null,
          },
      imageModelList:
        dataEdit?.imageModelList?.length > 0
          ? dataEdit.imageModelList.map((item) => ({
              id: item.id,
              image: item.image,
            }))
          : [],
      brokerModel: {
        broker: false,
      },
    };
    return init;
  });
  const formInfoRef = useRef(null);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [activeIndex, setActiveIndex] = useState(() => {
    if (dataEdit.businessTypeModel.id === 1) {
      return 0;
    } else return 1;
  });
  console.log(setActiveIndex);
  const [loading, setLoading] = useState(false);
  const handleUpdatePost = async (e) => {
    e.preventDefault();
    if (payload.imageModelList.length === 0) {
      setErrorImage("Bạn phải cần tải ít nhất 1 hình ");

      return;
    }
    await fetch("http://localhost:8080/api/realEstate/updateRealEstate", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Cập nhật thành công");
          setIsEdit(false);
          updateDataEdit(payload);
        } else {
          toast.error("Cập nhật thất bại");
        }
      })
      .catch((error) => {
        toast.error("Cập nhật thất bại");
        console.error(error);
      });

    await window.location.reload();
  };

  return (
    <div
      className="update-post"
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
        <h3>Chỉnh sửa tin đăng</h3>
        <form onSubmit={handleUpdatePost}>
          <Address payload={payload} setPayload={setPayload} />
          <FormInfo
            ref={formInfoRef}
            payload={payload}
            setPayload={setPayload}
            activeIndex={activeIndex}
            setLoading={setLoading}
            loading={loading}
            setImagesPreview={setImagesPreview}
            imagesPreview={imagesPreview}
            setImagesError={setErrorImage}
            errorImage={errorImage}
          />
          <div className="action-btn">
            <Button text={"Cập nhật"} className={"btn-update"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;

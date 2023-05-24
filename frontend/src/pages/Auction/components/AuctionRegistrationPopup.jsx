import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../Auction.scss";
import { toast } from "react-toastify";
import { maQr } from "../../../assets/images";
import VNnum2words from "vn-num2words";
import { useDispatch, useSelector } from "react-redux";
import { registerAuction } from "../../../store/actions/auction";
// import Webcam from "react-webcam";

const AuctionRegistrationPopup = ({
  showPopup,
  handleClose,
  frontOfTheIdentityCard,
  auction,
}) => {
  // Nhận diện khuôn mặt
  // const webcamRef = useRef(null);
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [formData, setFormData] = useState({
    payFees: false,
    checkFace: true,
    acceptTerms,
    userModel: {
      id: userId,
    },
    auctionModel: {
      id: auction.id,
    },
  });
  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      auctionModel: {
        ...prevState.auctionModel,
        id: auction.id,
      },
    }));
  }, [auction.id]);

  const handleAcceptTerms = (e) => {
    const { checked } = e.target;
    setAcceptTerms(checked);

    setFormData((prevState) => ({
      ...prevState,
      acceptTerms: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(registerAuction(formData))
      .then(() => {
        // Xử lý thành công
        handleClose();
        toast.success("Đăng ký thành công", {
          autoClose: 2000,
          onClose: () => {
            setTimeout(() => {
              window.location.href = "/danh-sach-dang-ki-dau-gia";
            }, 2000);
          },
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Modal show={showPopup} onHide={handleClose} className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title className="custom-title-modal">
          Đăng ký tham gia đấu giá
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <h5 className="custom-heading-modal">Số tiền cần phải nộp</h5>
          <Form.Group
            controlId="chiphithamgiadaugia"
            className="custom-form-group-modal"
          >
            <Form.Label className="custom-form-label-modal">
              Chi phí tham gia đấu giá
            </Form.Label>
            <Form.Control
              type="text"
              name="chiphithamgiadaugia"
              value={`${
                auction.auctionParticipationFee &&
                auction.auctionParticipationFee.toLocaleString()
              } VNĐ`}
            />
          </Form.Group>

          <Form.Group controlId="bangchu" className="custom-form-group-modal">
            <Form.Label className="custom-form-label-modal">
              Bằng chữ
            </Form.Label>
            <Form.Control
              type="text"
              name="bangchu"
              value={
                auction.auctionParticipationFee &&
                VNnum2words(auction.auctionParticipationFee)
              }
            />
          </Form.Group>
          <h5 className="custom-heading-modal">
            Thông tin chuyển khoản lệ phí
          </h5>
          <div className="custom-form-group-modal-2">
            <label className="custom-form-label-modal">Số tài khoản</label>
            <p>0271001103279</p>
          </div>
          <div className="custom-form-group-modal-2">
            <label className="custom-form-label-modal">Ngân hàng</label>
            <p>Vietcombank</p>
          </div>
          <div className="custom-form-group-modal-2">
            <label className="custom-form-label-modal">Chủ tài khoản</label>
            <p>NGUYEN VAN HAI</p>
          </div>
          <div className="custom-form-group-modal-2">
            <label className="custom-form-label-modal">Mã QR</label>
            <img src={maQr} alt="maQr" />
          </div>

          <Form.Group controlId="chapnhandieukhoan" className="mb-3">
            <Form.Check
              type="checkbox"
              label="Tôi đã đọc và nghiên cứu đầy đủ các thông tin của hồ sơ tham gia đấu giá"
              name="chapnhandieukhoan"
              checked={acceptTerms}
              onChange={handleAcceptTerms}
              required
            />
          </Form.Group>
          <div className="faceCheck">
            {/* {showWebcam && (
              <Webcam
                audio={false}
                mirrored={true}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                className="webcam"
              />
            )} */}
            <Button variant="secondary">
              Bắt đầu quá trình nhận diện khuôn mặt
            </Button>
            <p>
              Lưu ý:
              <br />- Nội dung chuyển khoản bao gồm "Họ và Tên , Số CMND/CCCD"
              (Thông tin trên phải trùng khớp với thông tin cá nhân)
              <br />- Chúng tôi sẽ sử dụng ảnh trong Căng cước công dân của bạn
              để so sánh
              <br />- Vui lòng cập nhật đúng ảnh căn cước
            </p>
          </div>

          <Button variant="primary" type="submit" fullWidth>
            Đăng ký tham gia đấu giá
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default AuctionRegistrationPopup;

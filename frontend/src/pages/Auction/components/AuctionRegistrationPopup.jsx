import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../Auction.scss";
import { toast } from "react-toastify";

const AuctionRegistrationPopup = ({
  showPopup,
  handleClose,
  frontOfTheIdentityCard,
}) => {
  const [formData, setFormData] = useState({
    chiphithamgiadaugia: "",
    sotiendattruoc: "",
    tongtien: "",
    bangchu: "",
    sotaikhoan: "",
    nganhang: "",
    chutaikhoan: "",
    chapnhandieukhoan: false,
    nhandienkhuonmat: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose(); // Đóng popup sau khi xử lý thành công
    toast.success("Đăng ký thành công", {
      autoClose: 2000,
      onClose: () => {
        // Tắt toast và tải lại trang sau 1 giây
        setTimeout(() => {
          window.location.href = "/danh-sach-dang-ki-dau-gia";
        }, 2000);
      },
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
              value={formData.chiphithamgiadaugia}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group
            controlId="sotiendattruoc"
            className="custom-form-group-modal"
          >
            <Form.Label className="custom-form-label-modal">
              Số tiền đặt cọc trước
            </Form.Label>
            <Form.Control
              type="text"
              name="sotiendattruoc"
              value={formData.sotiendattruoc}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="tongtien" className="custom-form-group-modal">
            <Form.Label className="custom-form-label-modal">
              Tổng tiền
            </Form.Label>
            <Form.Control
              type="text"
              name="tongtien"
              value={formData.tongtien}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="bangchu" className="custom-form-group-modal">
            <Form.Label className="custom-form-label-modal">
              Bằng chữ
            </Form.Label>
            <Form.Control
              type="text"
              name="bangchu"
              value={formData.bangchu}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <h5 className="custom-heading-modal">
            Thông tin nhận lại khoản tiền nhận trước
          </h5>
          <Form.Group
            controlId="sotaikhoan"
            className="custom-form-group-modal"
          >
            <Form.Label className="custom-form-label-modal">
              Số tài khoản
            </Form.Label>
            <Form.Control
              type="text"
              name="sotaikhoan"
              value={formData.sotaikhoan}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="nganhang" className="custom-form-group-modal">
            <Form.Label className="custom-form-label-modal">
              Ngân hàng
            </Form.Label>
            <Form.Control
              type="text"
              name="nganhang"
              value={formData.nganhang}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group
            controlId="chutaikhoan"
            className="custom-form-group-modal"
          >
            <Form.Label className="custom-form-label-modal">
              Chủ tài khoản
            </Form.Label>
            <Form.Control
              type="text"
              name="chutaikhoan"
              value={formData.chutaikhoan}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="chapnhandieukhoan" className="mb-3">
            <Form.Check
              type="checkbox"
              label="Tôi đã đọc và nghiên cứu đầy đủ các thông tin của hồ sơ tham gia đấu giá"
              name="chapnhandieukhoan"
              checked={formData.chapnhandieukhoan}
              onChange={handleChange}
              required
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          </Form.Group>
          {/* <Button variant="primary" onClick={startFaceDetection}>
            Bắt đầu quá trình nhận diện khuôn mặt
          </Button> */}
          {/* <p>
            Chúng tôi sẽ sử dụng ảnh trong Căng cước công dân của bạn để bắt so
            sánh
          </p> */}

          <Button variant="primary" type="submit">
            Đăng ký tham gia đấu giá
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default AuctionRegistrationPopup;

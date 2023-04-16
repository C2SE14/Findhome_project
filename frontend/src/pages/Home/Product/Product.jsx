import React from "react";
import { Link } from "react-router-dom";

//
import "./Product.scss";

const Product = () => {
  return (
    <div className="container">
      <div className="product__container">
      <table class="table">
  <thead>
    <tr>
      <th className="col-4" scope="col">
      <img src="https://daugiaviet.vn/taisan/4018/logo.jpg" width="400" height="200" alt=""></img>
      <p class="font">Công ty Đấu giá Hợp danh Đông Nam thông báo đấu giá tài sản là: QSDĐ và tài sản gắn liền với đất của ông Cáp Văn Luật và bà Phạm Thị Ngọc Linh tọa lạc tại Tổ 15 Ngọc Sơn, P.Ngọc Hiệp, TP.Nha Trang, Khánh Hòa</p>
      <div></div>
      <table class="table table-bordered">
        <tr>
        <th scope="row">
        <img src="https://png2.cleanpng.com/sh/fc44535182c307d833a9f50db58f0a9d/L0KzQYm3UsA1N5h8iZH0aYP2gLBuTfF2a6Vuh9C2Z3H5db20ifNwdl5mjdV9aXBxPcH1h711epJziAJqcnXxhH7wjfFobV46eakCYnK0Qoa7VvI6OF85T6UDM0e6QYK8Ucc4QWc2SaY8NEW7PsH1h5==/kisspng-auction-gavel-icon-auction-png-transparent-image-5a77bb12546b90.4738377115177961143458.png" class="imageChange" alt=""></img>
        </th>
            <th class="title">Giá khởi điểm: <br/> Bước giá:</th>
            <th class="amount">743.689.350 VNĐ <br/> 14.000.000 VNĐ</th>
        </tr>
      </table>
      </th>
      <th className="col-4" scope="col">
      <img src="https://daugiaviet.vn/taisan/4155/logo-nen-trong%20(1).png" width="400" height="200" alt=""></img>
      <p class="font">Công ty Đấu giá Hợp danh 2E HHT Việt Nam, Thông báo Đấu giá Quyền sử dụng thửa đất 278, đất ở nông thôn tại thôn Ngần Hạ, xã Tân Thành, huyện Bắc Quang, tỉnh Hà Giang</p>
      <table class="table table-bordered">
        <tr>
        <th scope="row">
        <img src="https://png2.cleanpng.com/sh/fc44535182c307d833a9f50db58f0a9d/L0KzQYm3UsA1N5h8iZH0aYP2gLBuTfF2a6Vuh9C2Z3H5db20ifNwdl5mjdV9aXBxPcH1h711epJziAJqcnXxhH7wjfFobV46eakCYnK0Qoa7VvI6OF85T6UDM0e6QYK8Ucc4QWc2SaY8NEW7PsH1h5==/kisspng-auction-gavel-icon-auction-png-transparent-image-5a77bb12546b90.4738377115177961143458.png" class="imageChange" alt=""></img>
        </th>
            <th class="gia">Giá khởi điểm: <br/> Bước giá:</th>
            <th class="amount">270.875.000 VNĐ <br/> 10.000.000 VNĐ</th>
        </tr>
      </table>
      </th>
      <th className="col-4" scope="col">
      <img src="https://daugiaviet.vn/taisan/4211/Logo%20Cty.jpg" width="400" height="200" alt=""></img>
      <p class="font">Công ty Đấu giá Hợp danh Tân Đại Phát Thông báo Đấu giá: Lô tài sản, công cụ dụng cụ, vật tư thu hồi của Tổng công ty Cảng hàng không Việt Nam tại Cảng hàng không Quốc tế Nội Bài: Gồm 3.277 danh mục tài sản, công cụ dụng cụ, vật tư thu hồi</p>
      <table class="table table-bordered">
        <tr>
        <th scope="row">
        <img src="https://png2.cleanpng.com/sh/fc44535182c307d833a9f50db58f0a9d/L0KzQYm3UsA1N5h8iZH0aYP2gLBuTfF2a6Vuh9C2Z3H5db20ifNwdl5mjdV9aXBxPcH1h711epJziAJqcnXxhH7wjfFobV46eakCYnK0Qoa7VvI6OF85T6UDM0e6QYK8Ucc4QWc2SaY8NEW7PsH1h5==/kisspng-auction-gavel-icon-auction-png-transparent-image-5a77bb12546b90.4738377115177961143458.png" class="imageChange" alt=""></img>
        </th>
            <th class="gia">Giá khởi điểm: <br/> Bước giá:</th>
            <th class="amount">645.122.418 VNĐ <br/> 5.000.000 VNĐ</th>
        </tr>
      </table>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
      <img src="https://daugiaviet.vn/taisan/4115/logo%20V%E1%BA%A1n%20th%C3%A0nh%20An.jpg" width="400" height="200" alt=""></img>
      <p class="font">Công ty Đấu giá Hợp danh Vạn Thành An thông báo đấu giá 01 xe ô tô nhãn hiệu Vinfast LuxA đã qua sử dụng. Biển kiểm soát: 90A-121.46</p>
      <table class="table table-bordered">
        <tr>
        <th scope="row">
        <img src="https://png2.cleanpng.com/sh/fc44535182c307d833a9f50db58f0a9d/L0KzQYm3UsA1N5h8iZH0aYP2gLBuTfF2a6Vuh9C2Z3H5db20ifNwdl5mjdV9aXBxPcH1h711epJziAJqcnXxhH7wjfFobV46eakCYnK0Qoa7VvI6OF85T6UDM0e6QYK8Ucc4QWc2SaY8NEW7PsH1h5==/kisspng-auction-gavel-icon-auction-png-transparent-image-5a77bb12546b90.4738377115177961143458.png" class="imageChange" alt=""></img>
        </th>
            <th class="gia">Giá khởi điểm: <br/> Bước giá:</th>
            <th class="amount">533.000.000 VNĐ <br/> 3.000.000 VNĐ</th>
        </tr>
      </table>
      </th>
      <th scope="row">
      <img src="https://daugiaviet.vn/taisan/4125/Logo%20C%C3%B4ng%20Minh.jpg" width="400" height="200" alt=""></img>
      <p class="font">Công ty đấu giá hợp danh Công Minh thông báo đấu giá tài sản như sau: Vật tư thu hồi được từ công trình: Tu bổ, tôn tạo di tích Chùa Khánh Hưng, phường Đồng Mai, quận Hà Đông, hạng mục: Tam Quan, Gác Chuông, nhà Tiền tế, Tiền đường và Thượng điện.</p>
      <table class="table table-bordered">
        <tr>
        <th scope="row">
        <img src="https://png2.cleanpng.com/sh/fc44535182c307d833a9f50db58f0a9d/L0KzQYm3UsA1N5h8iZH0aYP2gLBuTfF2a6Vuh9C2Z3H5db20ifNwdl5mjdV9aXBxPcH1h711epJziAJqcnXxhH7wjfFobV46eakCYnK0Qoa7VvI6OF85T6UDM0e6QYK8Ucc4QWc2SaY8NEW7PsH1h5==/kisspng-auction-gavel-icon-auction-png-transparent-image-5a77bb12546b90.4738377115177961143458.png" class="imageChange" alt=""></img>
        </th>
            <th class="gia">Giá khởi điểm: <br/> Bước giá:</th>
            <th class="amount">191.690.000 VNĐ <br/> 500.000 VNĐ</th>
        </tr>
      </table>
      </th>
      <th scope="row">
      <img src="https://daugiaviet.vn/taisan/4018/logo.jpg" width="400" height="200" alt=""></img>
      <p class="font">Công ty Đấu giá Hợp danh Đông Nam thông báo đấu giá tài sản là: QSDĐ và tài sản gắn liền với đất của ông Cáp Văn Luật và bà Phạm Thị Ngọc Linh tọa lạc tại Tổ 15 Ngọc Sơn, P.Ngọc Hiệp, TP.Nha Trang, Khánh Hòa</p>
      <table class="table table-bordered">
        <tr>
        <th scope="row">
        <img src="https://png2.cleanpng.com/sh/fc44535182c307d833a9f50db58f0a9d/L0KzQYm3UsA1N5h8iZH0aYP2gLBuTfF2a6Vuh9C2Z3H5db20ifNwdl5mjdV9aXBxPcH1h711epJziAJqcnXxhH7wjfFobV46eakCYnK0Qoa7VvI6OF85T6UDM0e6QYK8Ucc4QWc2SaY8NEW7PsH1h5==/kisspng-auction-gavel-icon-auction-png-transparent-image-5a77bb12546b90.4738377115177961143458.png" class="imageChange" alt=""></img>
        </th>
            <th class="gia">Giá khởi điểm: <br/> Bước giá:</th>
            <th class="amount">743.689.350 VNĐ <br/> 14.000.000 VNĐ</th>
        </tr>
      </table>
      </th>
    </tr>
    <tr>
    <th scope="row">
      <img src="https://daugiaviet.vn/taisan/4181/logo%20cty.jpg" width="400" height="200" alt=""></img>
      <p class="font">Công ty ĐGHD Đấu giá Việt Nam bán đấu giá tài sản là: 02 xe ôtô là Mitsubishi Pajero 80B-4529 và Toyota Camry 80A-02857.</p>
      <table class="table table-bordered">
        <tr>
        <th scope="row">
        <img src="https://png2.cleanpng.com/sh/fc44535182c307d833a9f50db58f0a9d/L0KzQYm3UsA1N5h8iZH0aYP2gLBuTfF2a6Vuh9C2Z3H5db20ifNwdl5mjdV9aXBxPcH1h711epJziAJqcnXxhH7wjfFobV46eakCYnK0Qoa7VvI6OF85T6UDM0e6QYK8Ucc4QWc2SaY8NEW7PsH1h5==/kisspng-auction-gavel-icon-auction-png-transparent-image-5a77bb12546b90.4738377115177961143458.png" class="imageChange" alt=""></img>
        </th>
            <th class="gia">Giá khởi điểm: <br/> Bước giá:</th>
            <th class="amount">220.000.000 vnd <br/> 1.000.000 vnd</th>
        </tr>
      </table>
      </th>
      <th scope="row">
      <img src="https://daugiaviet.vn/taisan/4018/logo.jpg" width="400" height="200" alt=""></img>
      <p class="font">Công ty Đấu giá Hợp danh Đông Nam thông báo đấu giá tài sản là: QSDĐ và tài sản gắn liền với đất của ông Cáp Văn Luật và bà Phạm Thị Ngọc Linh tọa lạc tại Tổ 15 Ngọc Sơn, P.Ngọc Hiệp, TP.Nha Trang, Khánh Hòa</p>
      <table class="table table-bordered">
        <tr>
        <th scope="row">
        <img src="https://png2.cleanpng.com/sh/fc44535182c307d833a9f50db58f0a9d/L0KzQYm3UsA1N5h8iZH0aYP2gLBuTfF2a6Vuh9C2Z3H5db20ifNwdl5mjdV9aXBxPcH1h711epJziAJqcnXxhH7wjfFobV46eakCYnK0Qoa7VvI6OF85T6UDM0e6QYK8Ucc4QWc2SaY8NEW7PsH1h5==/kisspng-auction-gavel-icon-auction-png-transparent-image-5a77bb12546b90.4738377115177961143458.png" class="imageChange" alt=""></img>
        </th>
            <th class="gia">Giá khởi điểm: <br/> Bước giá:</th>
            <th class="amount">743.689.350 VNĐ <br/> 14.000.000 VNĐ</th>
        </tr>
      </table>
      </th>
      <th scope="row">
      <img src="https://daugiaviet.vn/taisan/4129/Logo%20cty.jpg" A alt=""></img>
      <p class="font">Công ty Đấu giá HD Số 5 – Quốc gia thông báo đấu giá “Tài sản không sử dụng được của nhà máy cũ” bao gồm văn phòng, nhà xưởng, máy móc thiết bị và thiết bị truyền dẫn
</p>
      <table class="table table-bordered">
        <tr>
        <th scope="row">
        <img src="https://png2.cleanpng.com/sh/fc44535182c307d833a9f50db58f0a9d/L0KzQYm3UsA1N5h8iZH0aYP2gLBuTfF2a6Vuh9C2Z3H5db20ifNwdl5mjdV9aXBxPcH1h711epJziAJqcnXxhH7wjfFobV46eakCYnK0Qoa7VvI6OF85T6UDM0e6QYK8Ucc4QWc2SaY8NEW7PsH1h5==/kisspng-auction-gavel-icon-auction-png-transparent-image-5a77bb12546b90.4738377115177961143458.png" class="imageChange" alt=""></img>
        </th>
            <th class="gia">Giá khởi điểm: <br/> Bước giá:</th>
            <th class="amount">20.985.000.000 VND <br/> 30.000.000 VND</th>
        </tr>
      </table>
      </th>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  );
};

export default Product;

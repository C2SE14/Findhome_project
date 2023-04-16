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
      <p>Công ty đấu giá hợp danh Sao Việt đấu gí tài sản là Toàn bộ Quyền sử dụng đất và tài sản gắn liền với đất tại thừa ...</p>
      <div></div>
      <table class="table table-bordered">
        <tr>
        <th scope="row">
        <img src="https://png2.cleanpng.com/sh/fc44535182c307d833a9f50db58f0a9d/L0KzQYm3UsA1N5h8iZH0aYP2gLBuTfF2a6Vuh9C2Z3H5db20ifNwdl5mjdV9aXBxPcH1h711epJziAJqcnXxhH7wjfFobV46eakCYnK0Qoa7VvI6OF85T6UDM0e6QYK8Ucc4QWc2SaY8NEW7PsH1h5==/kisspng-auction-gavel-icon-auction-png-transparent-image-5a77bb12546b90.4738377115177961143458.png" class="imageChange" alt=""></img>
        </th>
            <th class="gia">Giá khởi điểm: <br/> Bước giá:</th>
            <th>1.925.000.000 VNĐ <br/> 10.000.000 VNĐ</th>
        </tr>
      </table>
      </th>
      <th className="col-4" scope="col">
      <img src="https://daugiaviet.vn/taisan/4155/logo-nen-trong%20(1).png" width="400" height="200" alt=""></img>
      <p>Công ty đấu giá hợp danh Sao Việt đấu gí tài sản là Toàn bộ Quyền sử dụng đất và tài sản gắn liền với đất tại thừa ...</p>
      <table class="table table-bordered">
        <tr>
        <th scope="row">
        <img src="https://png2.cleanpng.com/sh/fc44535182c307d833a9f50db58f0a9d/L0KzQYm3UsA1N5h8iZH0aYP2gLBuTfF2a6Vuh9C2Z3H5db20ifNwdl5mjdV9aXBxPcH1h711epJziAJqcnXxhH7wjfFobV46eakCYnK0Qoa7VvI6OF85T6UDM0e6QYK8Ucc4QWc2SaY8NEW7PsH1h5==/kisspng-auction-gavel-icon-auction-png-transparent-image-5a77bb12546b90.4738377115177961143458.png" class="imageChange" alt=""></img>
        </th>
            <th class="gia">Giá khởi điểm: <br/> Bước giá:</th>
            <th>1.925.000.000 VNĐ <br/> 10.000.000 VNĐ</th>
        </tr>
      </table>
      </th>
      <th className="col-4" scope="col">
      <img src="https://daugiaviet.vn/taisan/4211/Logo%20Cty.jpg" width="400" height="200" alt=""></img>
      <p>Công ty đấu giá hợp danh Sao Việt đấu gí tài sản là Toàn bộ Quyền sử dụng đất và tài sản gắn liền với đất tại thừa ...</p>
      <table class="table table-bordered">
        <tr>
        <th scope="row">
        <img src="https://png2.cleanpng.com/sh/fc44535182c307d833a9f50db58f0a9d/L0KzQYm3UsA1N5h8iZH0aYP2gLBuTfF2a6Vuh9C2Z3H5db20ifNwdl5mjdV9aXBxPcH1h711epJziAJqcnXxhH7wjfFobV46eakCYnK0Qoa7VvI6OF85T6UDM0e6QYK8Ucc4QWc2SaY8NEW7PsH1h5==/kisspng-auction-gavel-icon-auction-png-transparent-image-5a77bb12546b90.4738377115177961143458.png" class="imageChange" alt=""></img>
        </th>
            <th class="gia">Giá khởi điểm: <br/> Bước giá:</th>
            <th>1.925.000.000 VNĐ <br/> 10.000.000 VNĐ</th>
        </tr>
      </table>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
      <img src="https://daugiaviet.vn/taisan/4115/logo%20V%E1%BA%A1n%20th%C3%A0nh%20An.jpg" width="400" height="200" alt=""></img>
      <p>Công ty đấu giá hợp danh Sao Việt đấu gí tài sản là Toàn bộ Quyền sử dụng đất và tài sản gắn liền với đất tại thừa ...</p>
      <table class="table table-bordered">
        <tr>
        <th scope="row">
        <img src="https://png2.cleanpng.com/sh/fc44535182c307d833a9f50db58f0a9d/L0KzQYm3UsA1N5h8iZH0aYP2gLBuTfF2a6Vuh9C2Z3H5db20ifNwdl5mjdV9aXBxPcH1h711epJziAJqcnXxhH7wjfFobV46eakCYnK0Qoa7VvI6OF85T6UDM0e6QYK8Ucc4QWc2SaY8NEW7PsH1h5==/kisspng-auction-gavel-icon-auction-png-transparent-image-5a77bb12546b90.4738377115177961143458.png" class="imageChange" alt=""></img>
        </th>
            <th class="gia">Giá khởi điểm: <br/> Bước giá:</th>
            <th>1.925.000.000 VNĐ <br/> 10.000.000 VNĐ</th>
        </tr>
      </table>
      </th>
      <th scope="row">
      <img src="https://daugiaviet.vn/taisan/4125/Logo%20C%C3%B4ng%20Minh.jpg" width="400" height="200" alt=""></img>
      <p>Công ty đấu giá hợp danh Sao Việt đấu gí tài sản là Toàn bộ Quyền sử dụng đất và tài sản gắn liền với đất tại thừa ...</p>
      <table class="table table-bordered">
        <tr>
        <th scope="row">
        <img src="https://png2.cleanpng.com/sh/fc44535182c307d833a9f50db58f0a9d/L0KzQYm3UsA1N5h8iZH0aYP2gLBuTfF2a6Vuh9C2Z3H5db20ifNwdl5mjdV9aXBxPcH1h711epJziAJqcnXxhH7wjfFobV46eakCYnK0Qoa7VvI6OF85T6UDM0e6QYK8Ucc4QWc2SaY8NEW7PsH1h5==/kisspng-auction-gavel-icon-auction-png-transparent-image-5a77bb12546b90.4738377115177961143458.png" class="imageChange" alt=""></img>
        </th>
            <th class="gia">Giá khởi điểm: <br/> Bước giá:</th>
            <th>1.925.000.000 VNĐ <br/> 10.000.000 VNĐ</th>
        </tr>
      </table>
      </th>
      <th scope="row">
      <img src="https://daugiaviet.vn/taisan/4018/logo.jpg" width="400" height="200" alt=""></img>
      <p>Công ty đấu giá hợp danh Sao Việt đấu gí tài sản là Toàn bộ Quyền sử dụng đất và tài sản gắn liền với đất tại thừa ...</p>
      <table class="table table-bordered">
        <tr>
        <th scope="row">
        <img src="https://png2.cleanpng.com/sh/fc44535182c307d833a9f50db58f0a9d/L0KzQYm3UsA1N5h8iZH0aYP2gLBuTfF2a6Vuh9C2Z3H5db20ifNwdl5mjdV9aXBxPcH1h711epJziAJqcnXxhH7wjfFobV46eakCYnK0Qoa7VvI6OF85T6UDM0e6QYK8Ucc4QWc2SaY8NEW7PsH1h5==/kisspng-auction-gavel-icon-auction-png-transparent-image-5a77bb12546b90.4738377115177961143458.png" class="imageChange" alt=""></img>
        </th>
            <th class="gia">Giá khởi điểm: <br/> Bước giá:</th>
            <th>1.925.000.000 VNĐ <br/> 10.000.000 VNĐ</th>
        </tr>
      </table>
      </th>
    </tr>
    <tr>
    <th scope="row">
      <img src="https://daugiaviet.vn/taisan/4181/logo%20cty.jpg" width="400" height="200" alt=""></img>
      <p class="font">Công ty đấu giá hợp danh Sao Việt đấu gí tài sản là Toàn bộ Quyền sử dụng đất và tài sản gắn liền với đất tại thừa ...</p>
      <table class="table table-bordered">
        <tr>
        <th scope="row">
        <img src="https://png2.cleanpng.com/sh/fc44535182c307d833a9f50db58f0a9d/L0KzQYm3UsA1N5h8iZH0aYP2gLBuTfF2a6Vuh9C2Z3H5db20ifNwdl5mjdV9aXBxPcH1h711epJziAJqcnXxhH7wjfFobV46eakCYnK0Qoa7VvI6OF85T6UDM0e6QYK8Ucc4QWc2SaY8NEW7PsH1h5==/kisspng-auction-gavel-icon-auction-png-transparent-image-5a77bb12546b90.4738377115177961143458.png" class="imageChange" alt=""></img>
        </th>
            <th class="gia">Giá khởi điểm: <br/> Bước giá:</th>
            <th>1.925.000.000 VNĐ <br/> 10.000.000 VNĐ</th>
        </tr>
      </table>
      </th>
      <th scope="row">
      <img src="https://daugiaviet.vn/taisan/4018/logo.jpg" width="400" height="200" alt=""></img>
      <p>Công ty đấu giá hợp danh Sao Việt đấu gí tài sản là Toàn bộ Quyền sử dụng đất và tài sản gắn liền với đất tại thừa ...</p>
      <table class="table table-bordered">
        <tr>
        <th scope="row">
        <img src="https://png2.cleanpng.com/sh/fc44535182c307d833a9f50db58f0a9d/L0KzQYm3UsA1N5h8iZH0aYP2gLBuTfF2a6Vuh9C2Z3H5db20ifNwdl5mjdV9aXBxPcH1h711epJziAJqcnXxhH7wjfFobV46eakCYnK0Qoa7VvI6OF85T6UDM0e6QYK8Ucc4QWc2SaY8NEW7PsH1h5==/kisspng-auction-gavel-icon-auction-png-transparent-image-5a77bb12546b90.4738377115177961143458.png" class="imageChange" alt=""></img>
        </th>
            <th class="gia">Giá khởi điểm: <br/> Bước giá:</th>
            <th>1.925.000.000 VNĐ <br/> 10.000.000 VNĐ</th>
        </tr>
      </table>
      </th>
      <th scope="row">
      <img src="https://daugiaviet.vn/taisan/4129/Logo%20cty.jpg" A alt=""></img>
      <p>Công ty đấu giá hợp danh Sao Việt đấu gí tài sản là Toàn bộ Quyền sử dụng đất và tài sản gắn liền với đất tại thừa ...</p>
      <table class="table table-bordered">
        <tr>
        <th scope="row">
        <img src="https://png2.cleanpng.com/sh/fc44535182c307d833a9f50db58f0a9d/L0KzQYm3UsA1N5h8iZH0aYP2gLBuTfF2a6Vuh9C2Z3H5db20ifNwdl5mjdV9aXBxPcH1h711epJziAJqcnXxhH7wjfFobV46eakCYnK0Qoa7VvI6OF85T6UDM0e6QYK8Ucc4QWc2SaY8NEW7PsH1h5==/kisspng-auction-gavel-icon-auction-png-transparent-image-5a77bb12546b90.4738377115177961143458.png" class="imageChange" alt=""></img>
        </th>
            <th class="gia">Giá khởi điểm: <br/> Bước giá:</th>
            <th>1.925.000.000 VNĐ <br/> 10.000.000 VNĐ</th>
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

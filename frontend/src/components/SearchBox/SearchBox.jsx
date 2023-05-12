import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./SearchBox.scss";
import { Container } from "react-bootstrap";
import { ProductContext } from "../../context";
import { apiGetPublicProvinces } from "../../services/app";

const SearchBox = ({ onSubmit, setSearchValues, searchValues }) => {
  const location = useLocation();
  const { productType } = useContext(ProductContext);

  // Của thèn đĩ search
  const [typeDetailId, setTypeDetailId] = useState(searchValues.typeDetailId);
  const [district, setDistrict] = useState(searchValues.district);
  const [query, setQuery] = useState(searchValues.keySearch);
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    const fetchPublicProvince = async () => {
      const respone = await apiGetPublicProvinces();
      if (respone.status === 200) {
        setProvinces(respone.data.results);
      }
    };
    fetchPublicProvince();
  }, []);

  const [showIconCancel, setShowIconCancel] = useState(false);

  const handleQueryChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    setShowIconCancel(inputValue.length > 0);
  };

  const handleTypeDetailIdChange = (e) => {
    setTypeDetailId(e.target.value);
  };

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };

  const [minPrice, setMinPrice] = useState(-1);
  const [maxPrice, setMaxPrice] = useState(-1);
  const handlePriceRangeChange = (e) => {
    const priceRange = e.target.value;
    const [minPrice, maxPrice] = priceRange.split("-");
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
  };
  const [minSquare, setMinSquare] = useState(-1);
  const [maxSquare, setMaxSquare] = useState(-1);
  const handleAreaRangeChange = (e) => {
    const areRange = e.target.value;
    const [minSquare, maxSquare] = areRange.split("-");
    setMinSquare(minSquare);
    setMaxSquare(maxSquare);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchValues({
      ...searchValues,
      typeDetailId,
      district,
      minPrice,
      maxPrice,
      minSquare,
      maxSquare,
      keySearch: query,
    });

    onSubmit();
  };
  console.log(searchValues);
  const handleClearInput = () => {
    setQuery("");
    setShowIconCancel(false);
  };

  return (
    <div className="seb">
      <Container fluid>
        <div className="seb__container">
          <form onSubmit={handleSubmit}>
            <div className="form__container">
              <nav className="search__nav">
                <NavLink
                  to="/nha-dat-ban"
                  className={productType === 1 ? "active" : ""}
                >
                  Bán
                </NavLink>
                <NavLink
                  to="/nha-dat-cho-thue"
                  className={productType === 2 ? "active" : ""}
                >
                  Cho thuê
                </NavLink>
              </nav>
              <div className="search__input">
                <div className="search__input-container">
                  <i className="bi bi-search"></i>
                  <input
                    type="text"
                    value={query}
                    onChange={handleQueryChange}
                    placeholder="Nhập địa điểm bạn muốn tìm kiếm..."
                  />
                  {showIconCancel && (
                    <i
                      className="bi bi-x cancel"
                      onClick={handleClearInput}
                    ></i>
                  )}
                </div>
              </div>
              <div className="search__control">
                {productType === 1 || location.pathname === "/nha-dat-ban" ? (
                  <div className="search__group">
                    <label htmlFor="category1">Loại nhà đất</label>
                    <select
                      onChange={handleTypeDetailIdChange}
                      name="category"
                      id="category1"
                    >
                      <option value="-1">Tất cả</option>
                      <option value="1">Bán Căn hộ chung cư</option>
                      <option value="2">Bán Nhà riêng, nhà mặt phố</option>
                      <option value="3">Bán Biệt thự, nhà liền kề</option>
                      <option value="4">Bán Đất liền</option>
                      <option value="5">Bán Đất thổ cư</option>
                      <option value="6">Bán Toà nhà văn phòng</option>
                      <option value="7">Bán Căn hộ condotel</option>
                      <option value="8">Bán Căn hộ officetel</option>
                      <option value="9">Bán Đất trang trại, nghĩ dưõng</option>
                      <option value="10">Bán Kho, nhà xưởng, kiot</option>
                      <option value="11">Bán Nhà đất khác</option>
                    </select>
                  </div>
                ) : productType === 2 ||
                  location.pathname === "/nha-dat-cho-thue" ? (
                  <div className="search__group">
                    <label htmlFor="category2">Loại nhà đất</label>
                    <select name="category" id="category2">
                      <option value="-1">Tất cả</option>
                      <option value="12">Cho thuê Căn hộ chung cư</option>
                      <option value="13">Cho thuê Nhà riêng, nhà trọ</option>
                      <option value="14">Cho thuê văn phòng</option>
                      <option value="15">
                        Cho thuê nhà riêng, nhà mặt phố
                      </option>
                      <option value="16">Cho thuê căn hộ condotl</option>
                      <option value="17">Cho thuê căn hộ officetel</option>
                      <option value="18">
                        Cho thuê nhà kho, nhà hàng,kiot{" "}
                      </option>
                      <option value="19">Cho thuê Nhà đất khác</option>
                    </select>
                  </div>
                ) : null}
              </div>

              <div className="search__control">
                <div className="search__group">
                  <label htmlFor="province">Khu vực</label>
                  <select
                    onChange={handleDistrictChange}
                    name="province"
                    id="province"
                  >
                    <option value="">Tất cả</option>
                    {provinces.map((province) => (
                      <option
                        key={province.province_id}
                        value={province.province_name}
                      >
                        {province.province_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="search__control">
                <div className="search__group">
                  <label htmlFor="price">Mức giá</label>
                  <select
                    name="price"
                    id="price"
                    onChange={handlePriceRangeChange}
                  >
                    <option value="">Tất cả</option>
                    <option value="">Dưới 500 triệu</option>
                    <option value="1-500000000">Dưới 500 triệu</option>
                    <option value="500000000-1000000000">500 đến 1 tỷ</option>
                    <option value="1000000000-2000000000">1 tỷ đến 2 tỷ</option>
                    <option value="2000000000-3000000000">2 tỷ đến 3 tỷ</option>
                    <option value="3000000000-5000000000">3 tỷ đến 5 tỷ</option>
                    <option value="5000000000-7000000000">5 tỷ đến 7 tỷ</option>
                    <option value="7000000000-10000000000">
                      7 tỷ đến 10 tỷ
                    </option>
                    <option value="10000000000-20000000000">
                      10 tỷ đến 20 tỷ
                    </option>
                  </select>
                </div>
              </div>

              <div className="search__control">
                <div className="search__group">
                  <label htmlFor="area">Diện tích</label>
                  <select
                    name="area"
                    id="area"
                    onChange={handleAreaRangeChange}
                  >
                    <option value="">Tất cả</option>
                    <option value="1-30">Dưới 30m²</option>
                    <option value="30-50">30 đến 50m²</option>
                    <option value="50-80">50 đến 80m²</option>
                    <option value="80-100">80 đến 100m²</option>
                    <option value="100-150">100 đến 150m²</option>
                    <option value="150-300">150 đến 300m²</option>
                    <option value="500-10000000">Trên 500m²</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="butotn__search">
                Tìm kiếm
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default SearchBox;

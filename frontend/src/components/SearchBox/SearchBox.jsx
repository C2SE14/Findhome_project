import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./SearchBox.scss";
import { Container } from "react-bootstrap";
import Dropdown from "../Dropdown/Dropdown";

const SearchBox = () => {
  // const navigate = useNavigate();
  // const location = useLocation();
  const [query, setQuery] = useState("");
  const [showIconCancel, setShowIconCancel] = useState(false);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with query and type, such as sending a request to a server
  };

  const [select, setSelect] = useState("");
  const handleSelect = (event) => {
    setSelect(event.target.value);
  };

  const options = [
    { label: "Volvddddddddddddddđo", value: "volvo" },
    { label: "Saab", value: "saab" },
    { label: "Mercedes", value: "mercedes" },
    { label: "Audi", value: "audi" },
  ];

  return (
    <div className="seb">
      <Container fluid>
        <div className="seb__container">
          <form onSubmit={handleSubmit}>
            <div className="form__container">
              <nav className="search__nav">
                <NavLink to="/nha-dat-ban" activeClassName="active">
                  Bán
                </NavLink>
                <NavLink to="/nha-dat-cho-thue" activeClassName="active">
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

                  <i className="bi bi-x cancel"></i>
                </div>
              </div>
              <div className="search__control">
                <div className="search__category"></div>
              </div>

              <button type="submit">Tìm kiếm</button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};
export default SearchBox;

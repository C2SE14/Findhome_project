import React, { useState } from "react";
import Dropdown from "react-dropdown";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

//
import "./ActionsHeader.scss";

const options = [
  { value: "Chọn loại BĐS" },
  { value: "Quận 7" },
  { value: "green" },
  { value: "blue" },
  { value: "yellow" },
];
const ActionsHeader = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="ah">
      <Container>
        <div className="ah__container">
          <div className="ah__buttons">
            <Link to="#" className="ah__buttons-btn active">
              BÁN
            </Link>
            <Link to="#" className="ah__buttons-btn">
              CHO THUÊ
            </Link>
          </div>
          <div className="ah__search">
            <Dropdown
              options={options}
              onChange={handleSelect}
              value={selectedOption}
              placeholder="Chọn loại BĐS"
            />

            <input type="text" placeholder="Nhập từ khoá" />
          </div>
          <Link to="#" className="ah__extend">
            <i className="bi bi-plus"></i>
            <span>Mở rộng</span>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ActionsHeader;

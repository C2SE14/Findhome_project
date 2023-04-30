import React, { useState } from "react";
import "./sidebar.scss";
import { avatar_nav } from "../../../assets/images";
import { Link } from "react-router-dom";
import SidebarData from "../../../assets/data/SidebarData";
const Siderbar = () => {
  const data = SidebarData;
  const [activeSubMenu, setActiveSubMenu] = useState([]);
  const toggleSubMenu = (index) => {
    setActiveSubMenu(
      activeSubMenu.includes(index)
        ? activeSubMenu.filter((i) => i !== index)
        : [...activeSubMenu, index]
    );
  };

  return (
    <div className="navbar-system">
      <div className="nav-header">
        <img src={avatar_nav} className="avatar" alt="" />
        <div className="infomation">
          <p className="username">Thanh Xuân</p>
          <span className="phonenumber">07684400000</span>
        </div>
      </div>
      <ul className="nav-link">
        {data?.map((i, index) => (
          <li
            key={index}
            className={`${activeSubMenu.includes(index) ? "active" : ""}`}
            onClick={() => toggleSubMenu(index)}
          >
            <div className="icon-links">
              <Link to="#">
                <i className={i.icon}></i>
                <span className="link-name">{i.title}</span>
              </Link>
              <i className={`bi bi-chevron-down arrow`}></i>
            </div>
            {activeSubMenu.includes(index) && (
              <ul className="sub-menu">
                {i.subside?.map((i, index) => (
                  <li key={index}>
                    <Link to={i.href}>{i.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Siderbar;

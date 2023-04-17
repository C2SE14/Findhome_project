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
               <div className="account-balance">
                    <div className="context">Số dư tài khoản</div>
                    <div className="main">
                         <p>TK Chính</p>
                         <p>0</p>
                    </div>
                    <div className="promotion">
                         <p>TK KM</p>
                         <p>400</p>
                    </div>

                    <Link className="payment">
                         <i className="bi bi-credit-card-fill"></i> Nạp tiền
                    </Link>
               </div>
               <ul className="nav-link">
                    {data?.map((i, index) => (
                         <li key={index}>
                              <div className="icon-links">
                                   <a href="/">
                                        <i className={i.icon}></i>
                                        <span className="link-name">{i.title}</span>
                                   </a>
                                   <i
                                        className={`bi bi-chevron-down arrow ${
                                             activeSubMenu.includes(index) ? "active" : ""
                                        }`}
                                        onClick={() => toggleSubMenu(index)}
                                   ></i>
                              </div>
                              {activeSubMenu.includes(index) && (
                                   <ul className="sub-menu">
                                        {i.subside?.map((i, index) => (
                                             <li key={index}>
                                                  <a href={i.href}>{i.title}</a>
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

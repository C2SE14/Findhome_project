import React from "react";
import { Link, NavLink } from "react-router-dom";

const MenuItems = ({ menu }) => {
  return (
    <li className="menu-item">
      <NavLink to={menu.path} className="menu-link">
        {menu.title}
        <i style={{ marginLeft: "5px" }} className={menu.icon}></i>
      </NavLink>
      {menu.submenus && (
        <ul className="submenus">
          {menu.submenus.map((submenu, index) => (
            <li key={index}>
              <Link path={submenu.path}>{submenu.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItems;

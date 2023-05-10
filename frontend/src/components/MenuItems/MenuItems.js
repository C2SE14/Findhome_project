import React from "react";
import { NavLink } from "react-router-dom";

const MenuItems = ({ menu }) => {
  return (
    <li className="menu-item">
      <NavLink
        end
        to={menu.path}
        className="menu-link"
        activeClassName="active"
      >
        {menu.title}
        <i style={{ marginLeft: "5px" }} className={menu.icon}></i>
      </NavLink>
      {menu.submenus && (
        <ul className="submenus">
          {menu.submenus.map((submenu, index) => (
            <li key={index}>
              <NavLink
                to={submenu.path}
                className="submenu-link"
                activeClassName="active"
              >
                {submenu.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItems;

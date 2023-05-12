import React from "react";

const MenuItems = ({ menu }) => {
  return (
    <li className="menu-item">
      <a href={menu.path} className="menu-link">
        {menu.title}
        <i style={{ marginLeft: "5px" }} className={menu.icon}></i>
      </a>
      {menu.submenus && (
        <ul className="submenus">
          {menu.submenus.map((submenu, index) => (
            <li key={index}>
              <a href={submenu.path} className="submenu-link">
                {submenu.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItems;

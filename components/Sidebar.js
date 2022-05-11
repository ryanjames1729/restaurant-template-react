import React from "react";
import { stack as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="#starters">
        Starters
      </a>

      <a className="menu-item" href="#mainDish">
        Mains
      </a>

      <a className="menu-item" href="#drinks">
        Drinks
      </a>

      <a className="menu-item" href="#desserts">
        Desserts
      </a>

      <a className="menu-item" href="#contactMe">
        Find Us
      </a>
    </Menu>
  );
};



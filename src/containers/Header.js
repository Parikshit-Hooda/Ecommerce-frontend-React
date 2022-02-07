import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>
          <Link to="/">MyShop</Link>
        </h2>
      </div>
    </div>
  );
};

export default Header;

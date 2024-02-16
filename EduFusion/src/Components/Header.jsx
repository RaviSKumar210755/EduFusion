import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
const Header = () => {
  return (
    <header className="header">
      <section className="flex">
        <Link to="/" className="logo">
          EduFusion
        </Link>
        <div className="icons icon-Align-flex">
          <Link to="/">
            <div id="toggle-btn" className="fas fa-sun">
              <MdHome />
            </div>
          </Link>
          <Link to="/profile">
            <div id="user-btn" className="fas fa-user">
              <FaUser />
            </div>
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Header;

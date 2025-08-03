import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import "./UserHeader.css"; // スタイルを適用するためにCSSファイルをインポート

const UserHeader = () => {
  return (
    <header className="user-header">
      <div className="logo">
        <Link to="/">LH-EC-SHOP</Link>
      </div>
      <nav className="header-nav">
        <Link to="/mypage" className="nav-link">
          <FaUserCircle size={24} />
        </Link>
        <Link to="/cart" className="nav-link">
          <FaShoppingCart size={24} />
        </Link>
      </nav>
    </header>
  );
};

export default UserHeader;

// Header.js
import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Header() {
  const cart = useSelector((state) => state.cart);

  return (
    <header>
      <Link to="/">
        <div className="left">
          <div><img src="/assets/logo.png" alt="" className="logo" /></div>
          <p className="logoTitle">E-commerce Paradise</p>
        </div>
      </Link>

      <Link to="/cart">
        <div className="right">
          <div><img src="/assets/cart.png" alt="" className="cart" /></div>
          <h2>{cart.length}</h2>
        </div>
      </Link>
    </header>
  );
}

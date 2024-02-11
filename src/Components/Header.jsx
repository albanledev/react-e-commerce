import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Header({ cartCount }) {
  return (

    <header>
      <Link to="/">
        <div className="left">
            <div><img src="/assets/logo.png" alt="" className="logo" /></div>
            <p className="logoTitle">E-commerce Paradise</p>
        </div>
      </Link>
      <div className="right">
        <div><img src="/assets/cart.png" alt="" className="cart" /></div>
        <h2>0</h2>
      </div>
      <div></div>
    </header>

  );
}
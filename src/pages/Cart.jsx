// Cart.js
import React, { useEffect } from "react";
import "../App.css";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { clearCart } from '../CartSlice';

const Header = React.lazy(() => import("../Components/Header"));

function calculPrixPanier(cart) {
  let total = 0; // Initialisez total en tant que nombre

  cart.forEach((item) => {
    total += parseFloat(item.price); // Utilisez l'opérateur + pour l'addition arithmétique
    console.log(total);
  });

  return total;
}





export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    calculPrixPanier(cart)
  })

  const viderPanier = () => {
    dispatch(clearCart()); // Utilisez l'action clearCart pour vider le panier
  };

  return (
    <div>
      {/* ici on évite l'appel cyclique entre cart et header */}
      <React.Suspense fallback={<div>Loading...</div>}>
        <Header />
      </React.Suspense>

      {cart.length === 0 ? <h1 className="cartTitle">Your cart is empty !</h1> : <h1 className="cartTitle">Your cart</h1>
      }


      <div className="grid">
        {
          cart.map((product) => (

            <div key={product.id}>

              <div className="card">
                <div><img className="cardImage" src={product.image} alt={product.name} /></div>
                <h3 className="cardTitle">{product.title}</h3>
              </div>

            </div>
          ))
        }



      </div>

      <div className="flexBottom">
        <div className="returnProducts">
          <img className="flecheGauche" src="../assets/arrow left.png" alt="" /><Link className="textReturnOtherProducts" to="/products">See the other products</Link>
        </div>

        <div className="price">
          <h2>Cart price: {calculPrixPanier(cart)} €</h2>
        </div>

        <div>
          <button className="buttonProduct buttonCart" onClick={viderPanier}>Clean the cart</button>
        </div>
      </div>



    </div>
  );
}
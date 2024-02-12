import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import { store } from "./store";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from './CartSlice';  // Ajout du CartProvider

import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import Products from './pages/Products';
import Product from './pages/Product';
import NotFoundElement from './pages/NotFoundElement';
import Cart from './pages/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "products/:productId",
    element: <Product />,
    errorElement: <NotFoundElement />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        {/* Tout le rendu de l'application va ici */}
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();

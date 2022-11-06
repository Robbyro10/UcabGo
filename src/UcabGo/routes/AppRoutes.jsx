import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthStore } from "../../hooks";
import { NavBar, SideBar } from "../components/ui";
import { AdminPage, Clients, Products, Stores, Orders } from "../pages/admin";
import {
  CartPage,
  OrderPage,
  ProductPage,
  StorePage,
  UcabGoPage,
} from "../pages/users";

export const AppRoutes = () => {
  const { startLogout, user } = useAuthStore(
    window.localStorage.getItem("type")
  );

  return (
    <>
      {user.type === "admins" ? (
        <>
          <SideBar />
          <div className="container">
            <Routes>
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/products" element={<Products />} />
              <Route path="/stores" element={<Stores />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/" element={<Navigate to="/admin" />} />
              <Route path="/*" element={<Navigate to="/admin" />} />
            </Routes>
          </div>
        </>
      ) : (
        <>
          <NavBar />

          <div className="container">
            <Routes>
              <Route path="/ucabgo" element={<UcabGoPage />} />
              <Route path="/store/:_id" element={<StorePage />} />
              <Route path="order/:id/" element={<OrderPage />} />
              <Route path="cart/:id/" element={<CartPage />} />
              <Route path="store/product/:id/" element={<ProductPage />} />
              <Route path="/" element={<Navigate to="/ucabgo" />} />
              <Route path="/*" element={<Navigate to="/ucabgo" />} />
            </Routes>
          </div>
        </>
      )}
    </>
  );
};

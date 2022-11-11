import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthStore } from "../../hooks";
import { NavBar, SideBar } from "../components/ui";
import {
  AdminProductsPage,
  AdminClientsPage,
  AdminStoresPage,
  AdminOrders,
} from "../pages/admin";
import {
  CartPage,
  OrderPage,
  ProductPage,
  ProfilePage,
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
              <Route path="/clients" element={<AdminClientsPage />} />
              <Route path="/products" element={<AdminProductsPage />} />
              <Route path="/stores" element={<AdminStoresPage />} />
              <Route path="/orders" element={<AdminOrders />} />
              <Route path="/" element={<Navigate to="/products" />} />
              <Route path="/*" element={<Navigate to="/products" />} />
            </Routes>
          </div>
        </>
      ) : (
        <>
          <NavBar />

          <div className="container">
            <Routes>
              <Route path="/ucabgo" element={<UcabGoPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/store/:_id" element={<StorePage />} />
              <Route path="make+order/:id/" element={<OrderPage />} />
              <Route path="orders/:id/" element={<CartPage />} />
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

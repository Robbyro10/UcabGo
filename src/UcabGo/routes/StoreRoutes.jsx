import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/ui";
import { OrderPage, StorePage, UcabGoPage, ProductPage } from "../pages";

export const StoreRoutes = () => {
  return (
    <>
      <NavBar />

      <div className="container">
        <Routes>
          <Route path="/ucabgo" element={<UcabGoPage />} />
          <Route path="/store/:_id" element={<StorePage />} />
          <Route path="order/:id/" element={<OrderPage />} />
          <Route path="store/product/:id/" element={<ProductPage />} />
          <Route path="/" element={<Navigate to="/ucabgo" />} />
          <Route path="/*" element={<Navigate to="/ucabgo" />} />
        </Routes>
      </div>
    </>
  );
};

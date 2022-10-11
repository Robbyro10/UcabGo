import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar, Footer } from "../components";
import { OrderPage, RestaurantPage, UcabGoPage } from "../pages";
import { SuccessPage } from "../pages/SuccessPage";

export const RestaurantRoutes = () => {
  return (
    <>
      <NavBar />

      <div className="container">
        <Routes>
          <Route path="/ucabgo" element={<UcabGoPage />} />
          <Route path="/restaurant/:id" element={<RestaurantPage />} />
          <Route path="order/:itemId/" element={<OrderPage />} />
          <Route path="/" element={<Navigate to="/ucabgo" />} />
          <Route path="/order/success" element={<SuccessPage />} />
        </Routes>
      </div>

      {/* <Footer /> */}
    </>
  );
};

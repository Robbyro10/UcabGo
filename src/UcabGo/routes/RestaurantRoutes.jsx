import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { OrderPage, RestaurantPage, UcabGoPage } from "../pages";

export const RestaurantRoutes = () => {
  return (
    <>
      <NavBar />

      <div className="container">
        <Routes>
          <Route path="/ucabgo" element={<UcabGoPage />} />
          <Route path="/:id" element={<RestaurantPage />} />
          <Route path="order/:itemId/" element={<OrderPage />} />
          <Route path="/" element={<Navigate to="/ucabgo" />} />
        </Routes>
      </div>
    </>
  );
};

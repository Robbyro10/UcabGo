import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { RestaurantPage } from "../pages/RestaurantPage";
import { UcabGoPage } from "../pages/UcabGoPage";

export const RestaurantRoutes = () => {
  return (
    <>
      <NavBar />

      <div className="container">
        <Routes>
          <Route path="/ucabgo" element={<UcabGoPage />} />
          <Route path="restaurant/:id" element={<RestaurantPage />} />
          <Route path="/" element={<Navigate to="/ucabgo" />} />
        </Routes>
      </div>
    </>
  );
};

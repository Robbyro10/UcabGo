import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar, Footer } from "../components";
import { OrderPage, StorePage, UcabGoPage } from "../pages";
import { ItemPage } from "../pages/ItemPage";
import { SuccessPage } from "../pages/SuccessPage";

export const RestaurantRoutes = () => {
  return (
    <>
      <NavBar />

      <div className="container">
        <Routes>
          <Route path="/ucabgo" element={<UcabGoPage />} />
          <Route path="/restaurant/:_id" element={<StorePage />} />
          <Route path="order/:_id/" element={<OrderPage />} />
          <Route path="restaurant/item/:_id/" element={<ItemPage />} />
          <Route path="/" element={<Navigate to="/ucabgo" />} />
          <Route path="/*" element={<Navigate to="/ucabgo" />} />
          <Route path="/order/success" element={<SuccessPage />} />
        </Routes>
      </div>

      {/* <Footer /> */}
    </>
  );
};

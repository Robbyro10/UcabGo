import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { UcabGoPage } from "../UcabGo";
import { RestaurantRoutes } from "../UcabGo/routes/RestaurantRoutes";

export const AppRouter = () => {
  const authStatus = "authenticated";

  return (
    <>
      <Routes>
        {authStatus === "not-authenticated" ? (
          <Route path="/login" element={<LoginPage />} />
        ) : (
          <Route path="/*" element={<RestaurantRoutes />} />
        )}

        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

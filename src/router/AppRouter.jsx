import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, LoginStorePage } from "../auth";
import { useAuthStore } from "../hooks";
import { UcabGoPage } from "../UcabGo";
import { RestaurantRoutes } from "../UcabGo/routes/RestaurantRoutes";

export const AppRouter = () => {
  // const authStatus = "not-authenticated";
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <h3>Cargando...</h3>;
  }

  return (
    <>
      <Routes>
        {status === "not-authenticated" ? (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/loginStablishment" element={<LoginStorePage />} />
            <Route path="/*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <Route path="/*" element={<RestaurantRoutes />} />
        )}
      </Routes>
    </>
  );
};

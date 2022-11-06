import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  ClientRegisterPage,
  StoreRegisterPage,
  StoreLoginPage,
  ClientLoginPage,
  AdminLoginPage,
} from "../auth";
import { useAuthStore } from "../hooks";
import { AppRoutes } from "../UcabGo/routes/AppRoutes";

export const AppRouter = () => {
  // const authStatus = "not-authenticated";
  const { status, checkAuthToken } = useAuthStore(
    window.localStorage.getItem("type")
  );

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
            <Route path="/register" element={<ClientRegisterPage />} />
            <Route path="/login" element={<ClientLoginPage />} />
            <Route path="/adminlogin" element={<AdminLoginPage />} />
            <Route path="/registerstore" element={<StoreRegisterPage />} />
            <Route path="/loginstore" element={<StoreLoginPage />} />
            <Route path="/*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <Route path="/*" element={<AppRoutes />} />
        )}
      </Routes>
    </>
  );
};

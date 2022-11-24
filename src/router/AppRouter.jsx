import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  ClientRegisterPage,
  StoreRegisterPage,
  StoreLoginPage,
  ClientLoginPage,
  AdminLoginPage,
  AdminRegisterPage,
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
    return <h1 className="text-center text-muted" style={{marginTop: '35vh'}}>Cargando...</h1>;
  }

  return (
    <>
      <Routes>
        {status === "not-authenticated" ? (
          <>
            <Route path="/register" element={<ClientRegisterPage />} />
            <Route path="/login" element={<ClientLoginPage />} />
            <Route path="/loginadmin" element={<AdminLoginPage />} />
            <Route path="/registeradmin" element={<AdminRegisterPage />} />
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

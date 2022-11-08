import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuthStore } from "../../../hooks";
export const SideBar = () => {
  const { startLogout, user } = useAuthStore();

  const handleLogout = () => {
    Swal.fire({
      title: "¿Desea salir?",
      confirmButtonText: "Salir",
      showDenyButton: true,
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        startLogout();
      }
    });
  };

  return (
    <div className="fixed-top" style={{ width: "240px" }}>
      <div className="bg-dark">
        <div className="header-box ml-3">
          <h1 className="fs-4 pt-2">
            <span className="text-white">UcabGo</span>
          </h1>
          <h5 className="text-white">Admin Dashboard</h5>
        </div>
        <hr
          style={{ background: "grey", width: "200px", marginLeft: "15px" }}
        />
        <div className="ml-3" style={{ minHeight: "100vh" }}>
          <div style={{ width: "265px" }}>
            <Link
              to="/products"
              className="btn btn-outline-light w-75 mb-3 text-left"
            >
              <i className="fa-solid fa-bag-shopping"></i>&nbsp;&nbsp;Productos
            </Link>
            <Link
              to="/stores"
              className="btn btn-outline-light w-75 mb-3 text-left"
            >
              <i className="fa-solid fa-store"></i>&nbsp;&nbsp;Establecientos
            </Link>
            <Link
              to="/clients"
              className="btn btn-outline-light w-75 mb-3 text-left"
            >
              <i className="fa-solid fa-users"></i>&nbsp;&nbsp;Clientes
            </Link>
            <Link
              to="/orders"
              className="btn btn-outline-light w-75 mb-2 text-left"
            >
              <i className="fa-solid fa-truck"></i>&nbsp;&nbsp;Pedidos
            </Link>
          </div>
          <div className="fixed-bottom m-3 text-white w-25">
            <hr
              className="ml-0"
              style={{ background: "grey", width: "200px" }}
            />
            <p>
              <i className="fa-solid fa-user"></i>&nbsp;&nbsp;
              {user.name}
            </p>
            <button
              onClick={handleLogout}
              className="btn btn-outline-danger"
              style={{ width: "200px" }}
            >
              <i className="fas fa-sign-out-alt"></i>
              &nbsp;
              <span>Salir</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuthStore } from "../../hooks";
import { useForm } from "../../hooks/useForm";
import "./LoginPage.css";

const loginFormFields = {
  loginEmail: "",
  loginPassword: "",
};

const registerFormFields = {
  registerName: "",
  registerPhone: "",
  desc: "",
  registerLocation: "",
  registerEmail: "",
  registerPassword: "",
  registerPassword2: "",
};

export const LoginStorePage = () => {
  const { startLogin, startRegister, errorMessage } = useAuthStore("stores");

  const {
    loginEmail,
    loginPassword,
    onInputChange: onLoginInputChange,
  } = useForm(loginFormFields);
  const {
    registerName,
    registerPhone,
    desc,
    registerEmail,
    registerPassword,
    registerPassword2,
    registerLocation,
    onInputChange: onRegisterInputChange,
  } = useForm(registerFormFields);

  const loginSubmit = (event) => {
    event.preventDefault();
    startLogin({ email: loginEmail, password: loginPassword });
  };

  const registerSubmit = (event) => {
    event.preventDefault();
    if (registerPassword !== registerPassword2) {
      Swal.fire("Error en registro", "Contraseñas no coinciden", "error");
      return;
    }
    startRegister({
      email: registerEmail,
      password: registerPassword,
      name: registerName,
      phone: registerPhone,
      location: registerLocation,
      desc,
    });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en la autenticación", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso Establecimiento</h3>
          <form onSubmit={loginSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name="loginEmail"
                value={loginEmail}
                onChange={onLoginInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="loginPassword"
                value={loginPassword}
                onChange={onLoginInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="submit"
                className="btnSubmit bg-success"
                value="Login"
              />
            </div>
          </form>
          <Link to="/login" className="text-success">
            Registro cliente
          </Link>
        </div>

        <div className="col-md-6 login-form-2 bg-success">
          <h3>Registro Establecimiento</h3>
          <form onSubmit={registerSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre del Establecimiento"
                name="registerName"
                value={registerName}
                onChange={onRegisterInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Celular"
                name="registerPhone"
                value={registerPhone}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Ubicacion dentro de la UCAB"
                name="registerLocation"
                value={registerLocation}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Descripcion breve del establecimiento"
                name="desc"
                value={desc}
                onChange={onRegisterInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="registerEmail"
                value={registerEmail}
                onChange={onRegisterInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="registerPassword"
                value={registerPassword}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="registerPassword2"
                value={registerPassword2}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className="d-grid gap-2">
              <input
                type="submit"
                className="btnSubmit text-success"
                value="Crear cuenta"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

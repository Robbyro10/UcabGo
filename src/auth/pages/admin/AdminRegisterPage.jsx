import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useAuthStore } from "../../../hooks";
import { validEmails } from "../../../data/validEmails";

export const AdminRegisterPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { startRegister } = useAuthStore("admins");

  const onSubmit = (data) => {
    const { email, password, password2, name } = data;
    if (password !== password2) {
      Swal.fire("Error en registro", "Contraseñas no coinciden", "error");
      return;
    }

    if (!validEmails.includes(email)) {
      Swal.fire("Acceso Negado", "Email Inválido", "error");
      return;
    }

    startRegister({
      email,
      password,
      name,
    });
  };

  return (
    <div
      className="w-100 h-100 d-flex align-items-center"
      style={{
        backgroundImage: "linear-gradient(rgb(255,197,38), rgb(255,130,38))",
      }}
    >
      <div
        className="container mx-auto bg-white p-4 rounded"
        style={{ margin: "150px", width: "400px" }}
      >
        <div className="text-center m-3">
          <img
            src="/assets/circleYellow.png"
            style={{ width: "50px" }}
            alt="ucabGo logo"
          />
        </div>
        <h2 className="text-center">Registro Administrador</h2>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              {...register("name", { required: true })}
            />
          </div>
          {errors.name?.type === "required" && (
            <p className="text-warning">Nombre es requerido</p>
          )}

          <div className="form-group">
            <label>Correo</label>
            <input
              className="form-control"
              type="email"
              {...register("email", { required: true })}
            />
          </div>
          {errors.email?.type === "required" && (
            <p className="text-warning">No es un correo</p>
          )}

          <div className="form-group">
            <label>Contraseña</label>
            <input
              className="form-control"
              type="password"
              {...register("password", { required: true })}
            />
          </div>
          <div className="form-group">
            <label>Repita la Contraseña</label>
            <input
              className="form-control"
              type="password"
              {...register("password2", { required: true })}
            />
          </div>

          <br />
          <br />
          <button
            className="btn border-0 mb-3 w-100 font-weight-bold"
            style={{
              backgroundImage:
                "linear-gradient(45deg, rgb(255,197,38), rgb(255,150,38))",
            }}
            type="submit"
            value="submit"
          >
            Crear Cuenta
          </button>
        </form>
        <div className="text-center">
          <p>
            <a href="/login" style={{ color: "black" }}>
              Soy Cliente
            </a>
          </p>
          <a href="/loginstore" style={{ color: "black" }}>
            Soy Establecimiento
          </a>
        </div>
      </div>
    </div>
  );
};

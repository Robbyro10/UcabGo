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

    //TODO: Arreglar img
    startRegister({
      email,
      password,
      name,
    });
  };

  return (
    <div
      className="w-100"
      style={{
        backgroundImage: "linear-gradient(#000B18, #02386E)",
      }}
    >
      <div
        className="container mx-auto p-4 rounded"
        style={{ margin: "90px", background: "white", width: "450px" }}
      >
        <h1>Registro Administrador</h1>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              {...register("name", { required: true, maxLength: 20 })}
            />
            {errors.name?.type === "required" && (
              <p className="text-danger">El nombre es obligatorio</p>
            )}
            {errors.name?.type === "maxLength" && (
              <p className="text-danger">
                El nombre debe tener menos de 20 caracteres
              </p>
            )}
          </div>

          <div className="form-group">
            <label>Correo</label>
            <input
              className="form-control"
              type="email"
              {...register("email", { required: true })}
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              className="form-control"
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 15,
              })}
            />
          </div>
          {errors.password?.type === "required" && (
            <p className="text-danger">La contraseña es obligatoria</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-danger">Mínimo 6 caracteres</p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="text-danger">Máximo 15 caracteres</p>
          )}

          <div className="form-group">
            <label>Repita su contraseña</label>
            <input
              className="form-control"
              type="password"
              {...register("password2", {
                required: true,
                minLength: 6,
                maxLength: 15,
              })}
            />
          </div>
          {errors.password2?.type === "required" && (
            <p className="text-danger">Repita su contrasña</p>
          )}
          {errors.password2?.type === "minLength" && (
            <p className="text-danger">Mínimo 6 caracteres</p>
          )}
          {errors.password2?.type === "maxLength" && (
            <p className="text-danger">Máximo 15 caracteres</p>
          )}
          <br />
          <br />
          <button
            className="btn border-0 mb-3 w-100 text-white font-weight-bold"
            style={{
              backgroundImage: "linear-gradient(90deg, #000B18, #02386E)",
            }}
            type="submit"
            value="submit"
          >
            Crear Cuenta
          </button>
        </form>
        <div className="text-center">
          <p>
            <a href="/loginadmin" style={{ color: "black" }}>
              Ya tengo cuenta
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

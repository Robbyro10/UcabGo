import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useAuthStore } from "../../../hooks";

export const ClientRegisterPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { startRegister } = useAuthStore();

  const onSubmit = (data) => {
    const { email, password, password2, name, phone, img } = data;
    if (password !== password2) {
      Swal.fire("Error en registro", "Contraseñas no coinciden", "error");
      return;
    }

    startRegister({
      email,
      password,
      name,
      phone,
    });
  };

  return (
    <div
      className="w-100 d-flex align-items-center"
      style={{
        backgroundImage: "linear-gradient(rgb(64,180,229), rgb(64,140,229))",
        height: "1000px",
      }}
    >
      <div
        className="container mx-auto p-4 rounded bg-white"
        style={{ margin: "50px", width: "450px" }}
      >
        <div className="text-center m-3">
          <img
            src="docs/assets/circleBlue.png"
            style={{ width: "50px" }}
            alt="ucabGo logo"
          />
        </div>
        <h2 className="text-center">Registro Cliente</h2>
        <div className="p-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Nombre de Usuario</label>
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
              <label>Correo UCAB</label>
              <input
                className="form-control"
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /ucab.edu.ve/,
                })}
              />
              {errors.email?.type === "required" && (
                <p className="text-danger">El correo es obligatorio</p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="text-danger">No es un correo de la UCAB</p>
              )}
            </div>

            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label>Celular</label>
                  <input
                    className="form-control"
                    type="text"
                    {...register("phone", { required: true, maxLength: 15 })}
                  />
                  {errors.phone?.type === "required" && (
                    <p className="text-danger">El celular es obligatorio</p>
                  )}
                  {errors.phone?.type === "maxLength" && (
                    <p className="text-danger">
                      El nombre debe tener menos de 15 caracteres
                    </p>
                  )}
                </div>
              </div>
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
                backgroundImage:
                  "linear-gradient(60deg, rgb(64,150,229), rgb(64,120,229))",
              }}
              type="submit"
              value="submit"
            >
              Crear Cuenta
            </button>
          </form>
        </div>
        <div className="text-center">
          <p>
            <a href="/login" style={{ color: "black" }}>
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

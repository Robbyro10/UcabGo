import { useForm } from "react-hook-form";
import { useAuthStore } from "../../../hooks";

export const AdminLoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { startLogin } = useAuthStore("admins");

  const onSubmit = (data) => {
    const { email, password } = data;
    startLogin({ email, password });
  };

  return (
    <div
      className="w-100 h-100"
      style={{
        backgroundImage: "linear-gradient(#000B18, #02386E)",
      }}
    >
      <div
        className="container mx-auto bg-white p-4 rounded"
        style={{ margin: "150px", width: "400px" }}
      >
        <h2>Ingreso Administrador</h2>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
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
            Ingresar
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

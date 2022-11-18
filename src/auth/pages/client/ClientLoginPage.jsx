import { useForm } from "react-hook-form";
import { useAuthStore } from "../../../hooks";

export const ClientLoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { startLogin } = useAuthStore();

  const onSubmit = (data) => {
    const { email, password } = data;
    startLogin({ email, password });
  };

  return (
    <div
      className="w-100 h-100"
      style={{
        backgroundImage: "linear-gradient(#4b6cb7, #182848)",
      }}
    >
      <div
        className="container mx-auto bg-white p-4 rounded"
        style={{ margin: "20vh", width: "400px" }}
      >
        <h2>Ingresar a UCABGO</h2>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Correo UCAB</label>
            <input
              className="form-control"
              type="email"
              {...register("email", { required: true, pattern: /ucab.edu.ve/ })}
            />
          </div>
          {errors.email?.type === "required" && (
            <p className="text-danger">El correo es obligatorio</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="text-danger">No es un correo de la UCAB</p>
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
              backgroundImage: "linear-gradient(90deg, #4b6cb7, #182848)",
            }}
            type="submit"
            value="submit"
          >
            Ingresar
          </button>
        </form>
        <div className="text-center">
          <p>
            <a href="/register" style={{ color: "black" }}>
              No tengo cuenta
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

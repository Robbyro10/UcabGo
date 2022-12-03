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
        backgroundImage: "linear-gradient(rgb(3,187,255), rgb(3,30,255))",
      }}
    >
      <div
        className="container mx-auto bg-white p-4 rounded"
        style={{ margin: "15vh", width: "400px" }}
      >
        <div className="text-center m-3">
          <img
            src="/assets/cart.png"
            style={{ width: "40px" }}
            alt="ucabGo logo"
          />
        </div>
        <h2 className="text-center">Bienvenido a UcabGO</h2>
        <br />
        <div className="p-3">
          <form onSubmit={handleSubmit(onSubmit)}>
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
                backgroundImage:
                  "linear-gradient(90deg, rgb(3,120,255), rgb(3,70,255))",
              }}
              type="submit"
              value="submit"
            >
              Ingresar
            </button>
          </form>
        </div>
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

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
      className="container mx-auto text-white p-4 rounded"
      style={{ margin: "90px", background: "#0062cc", width: "400px" }}
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
        {errors.email?.type === "pattern" && (
          <p className="text-warning">No es un correo de la UCAB</p>
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
          className="btn btn-success mb-3 w-100"
          type="submit"
          value="submit"
        >
          Ingresar
        </button>
      </form>
      <div className="text-center">
        <p>
          <a href="/register" className="text-white">
            No tengo cuenta
          </a>
        </p>
        <a href="/loginstore" className="text-white">
          Soy Establecimiento
        </a>
      </div>
    </div>
  );
};

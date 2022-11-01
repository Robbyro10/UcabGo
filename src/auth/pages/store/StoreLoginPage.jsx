import { useForm } from "react-hook-form";
import { useAuthStore } from "../../../hooks";

export const StoreLoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { startLogin } = useAuthStore("stores");

  const onSubmit = (data) => {
    const { email, password } = data;
    startLogin({ email, password });
  };

  return (
    <div
      className="container mx-auto bg-success text-white p-4 rounded"
      style={{ margin: "90px", width: "400px" }}
    >
      <h2>Ingreso Establecimiento</h2>
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
          className="btn btn-primary mb-3 w-100"
          type="submit"
          value="submit"
        >
          Enviar
        </button>
      </form>
      <p className="text-center">
        <a href="/registerstore" className="text-white">
          No tengo cuenta
        </a>
      </p>
      <div className="text-center">
        <a href="/login" className="text-white">
          Soy Cliente
        </a>
      </div>
    </div>
  );
};

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
      className="w-100 h-100"
      style={{
        backgroundImage: "linear-gradient(#44a08d, #093637)",
      }}
    >
      <div
        className="container mx-auto bg-white p-4 rounded"
        style={{
          margin: "150px",
          width: "400px",
        }}
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
            className="btn border-0 mb-3 w-100 text-white font-weight-bold"
            style={{
              backgroundImage: "linear-gradient(90deg, #44a08d, #093637)",
            }}
            type="submit"
            value="submit"
          >
            Enviar
          </button>
        </form>
        <p className="text-center">
          <a href="/registerstore" style={{ color: "black" }}>
            No tengo cuenta
          </a>
        </p>
        <div className="text-center">
          <a href="/login" style={{ color: "black" }}>
            Soy Cliente
          </a>
        </div>
      </div>
    </div>
  );
};

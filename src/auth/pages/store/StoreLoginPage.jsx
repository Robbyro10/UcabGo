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
      className="w-100 h-100 d-flex align-items-center"
      style={{
        backgroundImage: "linear-gradient(rgb(4,119,50), rgb(4,80,50))",
      }}
    >
      <div
        className="container mx-auto bg-white p-4 rounded"
        style={{
          margin: "50px",
          width: "400px",
        }}
      >
        <div className="text-center m-3">
          <img
            src="/assets/circleGreen.png"
            style={{ width: "50px" }}
            alt="ucabGo logo"
          />
        </div>
        <h2 className="text-center">Ingreso Establecimiento</h2>
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
              backgroundImage:
                "linear-gradient(60deg, rgb(4,119,50), rgb(4,80,50))",
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

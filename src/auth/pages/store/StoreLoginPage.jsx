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
        backgroundImage: "linear-gradient(rgb(78,95,255), rgb(78,20,255))",
      }}
    >
      <div
        className="container mx-auto bg-white p-4 rounded"
        style={{
          margin: "20vh",
          width: "400px",
        }}
      >
        <div className="text-center m-3">
          <img
            src="/assets/cart.png"
            style={{ width: "40px" }}
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
                "linear-gradient(90deg, rgb(78,95,255), rgb(78,10,255))",
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

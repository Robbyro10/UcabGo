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

    //TODO: Arreglar img
    startRegister({
      email,
      password,
      name,
      phone,
      img: "",
    });
  };

  return (
    <div
      className="w-100 h-100 fixed-top"
      style={{
        backgroundImage: "linear-gradient(#4b6cb7, #182848)",
      }}
    >
      <div
        className="container mx-auto p-4 rounded"
        style={{ margin: "90px", background: "white", width: "450px" }}
      >
        <h1>Registro Cliente</h1>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Nombre y Apellido</label>
            <input
              className="form-control"
              type="text"
              {...register("name", { required: true, maxLength: 20 })}
            />
            {errors.name?.type === "required" && (
              <p className="text-warning">El nombre es obligatorio</p>
            )}
            {errors.name?.type === "maxLength" && (
              <p className="text-warning">
                El nombre debe tener menos de 20 caracteres
              </p>
            )}
          </div>

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
                  <p className="text-warning">El celular es obligatorio</p>
                )}
                {errors.phone?.type === "maxLength" && (
                  <p className="text-warning">
                    El nombre debe tener menos de 15 caracteres
                  </p>
                )}
              </div>
            </div>
            <div className="col">
              <div className="col">
                <label>Foto de Perfil</label>
                <input
                  className="form-control"
                  type="file"
                  accept=".png,.jpg"
                  //TODO: Arreglar esto
                  // {...register("img")}
                />
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
            <p className="text-warning">Mínimo 6 caracteres</p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="text-warning">Máximo 15 caracteres</p>
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
            <p className="text-warning">Mínimo 6 caracteres</p>
          )}
          {errors.password2?.type === "maxLength" && (
            <p className="text-warning">Máximo 15 caracteres</p>
          )}
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
            Crear Cuenta
          </button>
        </form>
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

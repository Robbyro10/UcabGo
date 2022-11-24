import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useAuthStore } from "../../../hooks/useAuthStore";

export const PasswordPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const checkpassword = watch("password");

  const {user} = useAuthStore();

  const { changePassword } = useAuthStore(user.type);

  const onSubmit = (data) => {
    if (data.password !== data.password2) {
      Swal.fire("Error", "Las contraseñas no son iguales", "error");
      return;
    }
    data = {
        password: data.password
    }

    console.log(data);

    changePassword(data)
  };
  return (
    <>
      <h1 style={{ paddingTop: "80px" }}>Cambiar Contraseña</h1>
      <hr />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Nueva Contraseña</label>
          <input
            className="form-control"
            type="password"
            {...register("password", { required: true, minLength: 6 })}
          />
        </div>
        {errors.password?.type === "required" && (
          <p className="text-danger">No has ingresado una nueva contraseña</p>
        )}
        {errors.password?.type === "minLength" && (
          <p className="text-danger">
            La contraseña debe tener mínimo 6 caracteres
          </p>
        )}

        <div className="form-group">
          <label>Repita Nueva Contraseña</label>
          <input
            className="form-control"
            type="password"
            {...register("password2", { required: true, minLength: 6 })}
          />
        </div>
        {errors.password2?.type === "required" && (
          <p className="text-danger">No has ingresado una contraseña</p>
        )}
        {errors.password2?.type === "minLength" && (
          <p className="text-danger">
            La contraseña debe tener mínimo 6 caracteres
          </p>
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
          Guardar Cambios
        </button>
      </form>
    </>
  );
};

import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuthStore } from "../../../hooks/useAuthStore";

export const PasswordPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const { user } = useAuthStore();

  const { changePassword } = useAuthStore(user.type);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.password !== data.password2) {
      Swal.fire("Error", "Las contraseñas no son iguales", "error");
      return;
    }
    data = {
      password: data.password,
    };
    changePassword(data);
    Swal.fire("¡Listo!", "Contraseña actualizada exitosamente.", "success");
    navigate("/profile");
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
        <button className="btn btn-primary mb-3" type="submit" value="submit">
          Guardar Cambios
        </button>
      </form>
      <Link to="/profile" className="btn btn-danger">
        Atrás
      </Link>
    </>
  );
};

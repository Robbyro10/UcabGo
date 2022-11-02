import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useAuthStore } from "../../../hooks";

export const StoreRegisterPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { startRegister } = useAuthStore("stores");

  const uploadImg = (data) => {
    const formData = new FormData();
    formData.append("file", data.img[0]);
    formData.append("upload_preset", "react-ucabgo");

    axios
      .post("https://api.cloudinary.com/v1_1/dwdimx0pg/image/upload", formData)
      .then((response) => {
        const imgUrl = response.data.url;
        data.img = imgUrl;
        Swal.fire("Registro Exitoso", "Espere unos segundos.", "success");
        startRegister(data);
      });
  };

  const onSubmit = (data) => {
    const {
      email,
      password,
      password2,
      name,
      phone,
      rif,
      desc,
      img,
      location,
    } = data;
    if (password !== password2) {
      Swal.fire("Error en registro", "Contraseñas no coinciden", "error");
      return;
    }
    // console.log(data);
    uploadImg(data);
  };

  return (
    <div
      className="w-100 h-100 fixed-top"
      style={{
        backgroundImage: "linear-gradient(#44a08d, #093637)",
      }}
    >
      <div
        className="container mx-auto bg-white p-4 rounded"
        style={{ margin: "50px", width: "550px" }}
      >
        <h1>Registro en UCABGO</h1>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Nombre del Establecimiento</label>
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
            <label>Correo</label>
            <input
              className="form-control"
              type="email"
              {...register("email", { required: true })}
            />
          </div>
          {errors.email?.type === "required" && (
            <p className="text-warning">El correo es obligatorio</p>
          )}

          <div className="form-group">
            <label>Descripción o Slogan del Establecimiento</label>
            <input
              className="form-control"
              type="text"
              {...register("desc", { required: true })}
            />
          </div>
          {errors.desc?.type === "required" && (
            <p className="text-warning">Campo obligatorio</p>
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
                    El celular debe tener menos de 15 caracteres
                  </p>
                )}
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Ubicación en la UCAB</label>
                <select
                  className="form-control"
                  {...register("location", { required: true })}
                >
                  <option value="Feria">Feria</option>
                  <option value="Cafetín">Cafertín</option>
                  <option value="Solarium">Solarium</option>
                  <option value="Canchas">Canchas</option>
                  <option value="Cincuentenario">Cincuentenario</option>
                  <option value="Otro">Otro</option>
                </select>
                {errors.location?.type === "required" && (
                  <p className="text-warning">La ubicacion es obligatoria</p>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="form-group">
                <label>RIF</label>
                <input
                  className="form-control"
                  type="text"
                  {...register("rif", { required: true, maxLength: 15 })}
                />
                {errors.rif?.type === "required" && (
                  <p className="text-warning">El RIF es obligatorio</p>
                )}
                {errors.phone?.type === "maxLength" && (
                  <p className="text-warning">
                    El nombre debe tener menos de 15 caracteres
                  </p>
                )}
              </div>
            </div>
            <div className="col">
              <label>Foto/Logo</label>
              <input
                className="form-control"
                type="file"
                accept=".png,.jpg"
                {...register("img")}
              />
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
        <div className="text-center">
          <p>
            <a href="/loginstore" style={{ color: "black" }}>
              Ya tengo cuenta
            </a>
          </p>
          <a href="/register" style={{ color: "black" }}>
            Soy Cliente
          </a>
        </div>
      </div>
    </div>
  );
};

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuthStore, useUcabGoStore } from "../../../hooks";

export const ProfilePage = () => {
  const { user } = useAuthStore();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      location: user.location,
      desc: user.desc,
      rif: user.rif,
      img: user.img,
    },
  });

  const [notEditing, setNotEditing] = useState(true);

  const { updateUser } = useAuthStore(user.type);

  const uploadImg = (data) => { 
    const formData = new FormData();
    formData.append("file", data.img[0]);
    formData.append("upload_preset", "react-ucabgo");

    axios
      .post("https://api.cloudinary.com/v1_1/dwdimx0pg/image/upload", formData)
      .then((response) => {
        const imgUrl = response.data.url;
        data.img = imgUrl;
        console.log(data);
        updateUser(data);
      });
  }

  const onSubmit = (data) => {
    Swal.fire({
      title: "¿Guardar Cambios?",
      confirmButtonText: "Guardar",
      showDenyButton: true,
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        setNotEditing(true);
        data.uid = user.uid;
        data.type = user.type;
        if (typeof(data.img) === "string" || user.type === 'clients') {
          data.img = user.img;
          updateUser(data);
          return;
        } else {
          uploadImg(data);
          Swal.fire('Listo!', 'Sus datos se estan actualizando', 'success')
        }
      }
    });
  };

  return (
    <div style={{paddingTop: "80px"}}>
      <div className="row">
        <div className="col">
          <h1>Perfil</h1>
        </div>
        <div className="col text-right">
          <button
            className="btn btn-primary mt-2"
            disabled={!notEditing}
            onClick={() => setNotEditing(!notEditing)}
          >
            Editar Pefil &nbsp;
            <i className="fa-solid fa-pencil"></i>
          </button>
        </div>
      </div>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Nombre y Apellido</label>
          <input
            className="form-control"
            readOnly={notEditing}
            type="text"
            {...register("name", { required: true, maxLength: 20 })}
          />
          {errors.name?.type === "required" && (
            <p className="text-danger">El nombre es obligatorio</p>
          )}
          {errors.name?.type === "maxLength" && (
            <p className="text-danger">
              El nombre debe tener menos de 20 caracteres
            </p>
          )}
        </div>

        {user.type === "stores" && (
          <div className="form-group">
            <label>Descripción</label>
            <input
              className="form-control"
              type="text"
              readOnly={notEditing}
              {...register("desc", { required: true })}
            />
            {errors.desc?.type === "required" && (
              <p className="text-danger">La Descripción es obligatoria</p>
            )}
          </div>
        )}

        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>Celular</label>
              <input
                className="form-control"
                type="text"
                readOnly={notEditing}
                {...register("phone", { required: true, maxLength: 15 })}
              />
              {errors.phone?.type === "required" && (
                <p className="text-danger">El celular es obligatorio</p>
              )}
              {errors.phone?.type === "maxLength" && (
                <p className="text-danger">
                  El nombre debe tener menos de 15 caracteres
                </p>
              )}
            </div>
          </div>
          {user.type === "stores" && (
            <div className="col">
              <div className="form-group">
                <label>Ubicación en la UCAB</label>
                <select
                  className="form-control"
                  disabled={notEditing}
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
                  <p className="text-danger">La ubicacion es obligatoria</p>
                )}
              </div>
            </div>
          )}
        </div>

        {user.type === "stores" && (
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label>RIF</label>
                <input
                  className="form-control"
                  type="text"
                  readOnly={notEditing}
                  {...register("rif", { required: true, maxLength: 15 })}
                />
                {errors.rif?.type === "required" && (
                  <p className="text-danger">El RIF es obligatorio</p>
                )}
                {errors.phone?.type === "maxLength" && (
                  <p className="text-danger">
                    El nombre debe tener menos de 15 caracteres
                  </p>
                )}
              </div>
            </div>
            <div className="col">
              <label>Cambiar Imagen</label>
              <input
                className="form-control"
                disabled={notEditing}
                type="file"
                accept=".png,.jpg"
                {...register("img")}
              />
            </div>
          </div>
        )}

        <br />
        {!notEditing && (
          <button className="btn btn-success mb-2" type="submit" value="submit">
            Guardar
          </button>
        )}
      </form>

      <Link to="/" className="btn btn-primary">
        Atrás
      </Link>
    </div>
  );
};

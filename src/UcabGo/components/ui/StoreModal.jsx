import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import Swal from "sweetalert2";
import { useUcabGoStore, useUiStore } from "../../../hooks";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const StoreModal = ({ store }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { isProductModalOpen, closeProductModal } = useUiStore();
  const { startSavingProduct, activeProduct } = useUcabGoStore();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onCloseModal = () => {
    closeProductModal();
  };

  const uploadImg = (img, data) => {
    const formData = new FormData();
    formData.append("file", img);
    formData.append("upload_preset", "react-ucabgo");

    axios
      .post("https://api.cloudinary.com/v1_1/dwdimx0pg/image/upload", formData)
      .then((response) => {
        const imgUrl = response.data.url;
        data.img = imgUrl;
        startSavingProduct(data);
      });
  };

  const onSubmit = (data) => {
    setFormSubmitted(true);
    data.store = store;
    Swal.fire("¡Listo!", "Producto agregado exitosamente", "success");
    uploadImg(data.img[0], data);

    closeProductModal();
    setFormSubmitted(false);
  };

  return (
    <Modal
      isOpen={isProductModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMs={200}
    >
      <h1> Nuevo Producto </h1>
      <hr />
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-2">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            autoComplete="off"
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

        <div className="form-group mb-2">
          <label>Precio ($)</label>
          <input
            type="number"
            className="form-control"
            placeholder="Precio"
            {...register("price", { required: true })}
          />
          {errors.price?.type === "required" && (
            <p className="text-warning">El precio es obligatorio</p>
          )}
        </div>

        <hr />
        <div className="form-group">
          <label>Descripcion</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            style={{ resize: "none" }}
            {...register("desc", { required: true, maxLength: 100 })}
          />
          {errors.desc?.type === "required" && (
            <p className="text-warning">La descripcion es obligatoria</p>
          )}
          {errors.desc?.type === "maxLength" && (
            <p className="text-warning">
              La descripcion debe tener maximo 100 caracteres
            </p>
          )}
        </div>

        <div className="form-group mb-4">
          <label className="form-label">Imagen del Producto</label>
          <input
            className="form-control"
            type="file"
            accept="image/png, image/jpeg"
            {...register("img")}
          />
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};

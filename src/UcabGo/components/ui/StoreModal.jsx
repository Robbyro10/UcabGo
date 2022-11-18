import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useUcabGoStore, useUiStore } from "../../../hooks";
import { onSetActiveProduct } from "../../../store/ucabGo/ucabGoSlice";

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
  const { isProductModalOpen, closeProductModal } = useUiStore();
  const { startSavingProduct, activeProduct, startDeleteProduct } =
    useUcabGoStore();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const onCloseModal = () => {
    closeProductModal();
    dispatch(onSetActiveProduct(null));
  };

  useEffect(() => {
    setValue("name", activeProduct?.name);
    setValue("price", activeProduct?.price);
    setValue("desc", activeProduct?.desc);
    setValue("img", activeProduct?.img);
  }, [activeProduct]);

  const uploadImg = (img, data) => {
    if (activeProduct) {
      data.id = activeProduct.id;
    }
    if (typeof img === "object") {
      const formData = new FormData();
      formData.append("file", img);
      formData.append("upload_preset", "react-ucabgo");

      axios
        .post(
          "https://api.cloudinary.com/v1_1/dwdimx0pg/image/upload",
          formData
        )
        .then((response) => {
          const imgUrl = response.data.url;
          data.img = imgUrl;
          startSavingProduct(data);
          location.reload();
        });
      return;
    }
    startSavingProduct(data);
  };

  const onSubmit = (data) => {
    setFormSubmitted(true);
    data.store = store;
    if (!activeProduct) {
      Swal.fire("¡Listo!", "Producto agregado exitosamente", "success");
    }
    uploadImg(data.img[0], data);
    dispatch(onSetActiveProduct(null));
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
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col">
          {activeProduct ? (
            <h1> Editar Producto </h1>
          ) : (
            <h1> Agregar Producto </h1>
          )}
        </div>
        <div className="col-fluid">
          <button onClick={onCloseModal} className="btn mr-2 mt-2">
            <i className="far fa-x"></i>
          </button>
        </div>
      </div>
      <hr />
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
            <p className="text-danger">El nombre es obligatorio</p>
          )}
          {errors.name?.type === "maxLength" && (
            <p className="text-danger">
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
            <p className="text-danger">El precio es obligatorio</p>
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
            <p className="text-danger">La descripcion es obligatoria</p>
          )}
          {errors.desc?.type === "maxLength" && (
            <p className="text-danger">
              La descripcion debe tener maximo 100 caracteres
            </p>
          )}
        </div>

        <div className="form-group mb-4">
          <div className="row">
            <div className="col-8">
              {activeProduct ? (
                <label className="form-label">Cambiar Imagen</label>
              ) : (
                <label className="form-label">
                  Imagen del Producto{" "}
                  <small className="text-muted">(Obligatorio)</small>
                </label>
              )}
              <input
                className="form-control"
                type="file"
                accept="image/png, image/jpeg"
                {...register("img")}
              />
            </div>
            <div className="col">
              {activeProduct?.img && (
                <img
                  className="rounded img-fluid float-right"
                  style={{ maxHeight: "70px" }}
                  src={activeProduct.img}
                  alt={activeProduct.desc}
                />
              )}
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          {activeProduct ? <span> Actualizar </span> : <span> Guardar </span>}
        </button>
      </form>
    </Modal>
  );
};

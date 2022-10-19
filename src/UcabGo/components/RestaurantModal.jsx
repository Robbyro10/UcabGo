import { useState } from "react";
import Modal from "react-modal";
import { useUiStore } from "../../hooks";

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

export const RestaurantModal = () => {
  const { isProductModalOpen, closeProductModal } = useUiStore();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formValues, setFormValues] = useState({
    nombre: "Holy Burger",
    precio: 10,
    desc: "Una descripcion basica del producto",
  });

  const onInputChanged = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onCloseModal = () => {
    closeProductModal();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    console.log(formValues);
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
      <form className="container" onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            autoComplete="off"
            name="nombre"
            value={formValues.nombre}
            onChange={onInputChanged}
          />
        </div>

        <div className="form-group mb-2">
          <label>Precio</label>
          <input
            type="number"
            className="form-control"
            placeholder="Precio"
            name="precio"
            value={formValues.precio}
            onChange={onInputChanged}
          />
        </div>

        <hr />
        <div className="form-group">
          <label>Descripcion</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="desc"
            style={{ resize: "none" }}
            value={formValues.desc}
            onChange={onInputChanged}
          ></textarea>
        </div>

        <div className="form-group mb-4">
          <label className="form-label">Imagen del Producto</label>
          <input
            className="form-control"
            type="file"
            accept="image/png, image/jpeg"
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

import { useState } from "react";
import Modal from "react-modal";

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
  const [isOpen, setIsOpen] = useState(true);
  const onCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMs={200}
    >
      <h1> Nuevo Producto </h1>
      <hr />
      <form className="container">
        <div className="form-group mb-2">
          <label>Nombre</label>
          <input className="form-control" placeholder="Nombre" />
        </div>

        <div className="form-group mb-2">
          <label>Precio</label>
          <input className="form-control" placeholder="Precio" />
        </div>

        <hr />
        <div className="form-group">
          <label>Descripcion</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            style={{ resize: "none" }}
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

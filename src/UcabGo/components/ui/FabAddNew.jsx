import { useUiStore } from "../../../hooks";

export const FabAddNew = () => {
  const { openProductModal } = useUiStore();

  const handleClickNew = () => {
    openProductModal();
  };

  return (
    <button
      className="btn btn-primary fab"
      onClick={handleClickNew}
      style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
    >
      <i className="fas fa-plus"></i>
    </button>
  );
};

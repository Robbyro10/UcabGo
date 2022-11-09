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
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;" }}
    >
      <i className="fas fa-plus"></i>
    </button>
  );
};

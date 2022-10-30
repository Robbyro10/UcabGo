import { useUiStore } from "../../../hooks";

export const FabAddNew = () => {
  const { openProductModal } = useUiStore();

  const handleClickNew = () => {
    openProductModal();
  };

  return (
    <button className="btn btn-primary fab" onClick={handleClickNew}>
      <i className="fas fa-plus"></i>
    </button>
  );
};

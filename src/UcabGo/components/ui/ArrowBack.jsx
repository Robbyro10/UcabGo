import { useNavigate } from "react-router-dom";

export const ArrowBack = ({ route }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(route);
  };

  return (
    <button
      className="btn btn-primary fab-back"
      onClick={handleBack}
      style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
    >
      <i className="fa-solid fa-arrow-left-long"></i>
    </button>
  );
};

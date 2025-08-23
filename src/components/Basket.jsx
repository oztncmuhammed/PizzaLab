import { useNavigate } from "react-router-dom";

function Basket({ basketItemCount }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="fs-4"
      style={{ border: "none", background: "transparent" }}
      onClick={() => navigate("/basket")}
    >
      <i className="bi bi-cart"></i>
      {basketItemCount > 0 && (
        <span className="badge bg-danger ms-1">{basketItemCount}</span>
      )}
    </button>
  );
}

export default Basket;

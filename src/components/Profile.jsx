import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="fs-4"
      style={{ border: "none", background: "transparent" }}
      onClick={() => navigate("/login")}
    >
      <i className="bi bi-person ms-1"></i>
    </button>
  );
}

export default Profile;

import Profile from "./Profile";
import Basket from "../components/Basket";
import BasketList from "../pages/BasketList";
import { useNavigate } from "react-router-dom";
import Login from "../pages/Login";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary m-"
      style={{ backgroundColor: "#000000ff" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          PizzaLab
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row">
            <li className="nav-item mx-3">
              <a
                className="nav-link active"
                href="#"
                aria-current="page"
                onClick={() => navigate("/home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item mx-3">
              <a
                className="nav-link active"
                href="#"
                onClick={() => navigate("/about")}
              >
                About
              </a>
            </li>

            <Basket onclick={BasketList} />
            <Profile onclick={Login} />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

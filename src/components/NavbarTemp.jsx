import Basket from "../components/Basket";

function Navbar({ basketItemCount }) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{ backgroundColor: "#000000ff" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Burgerlab
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                Sepet
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link disabled" aria-disabled="true">
                Menu
              </a>
            </li>
            <Basket basketItemCount={basketItemCount} />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

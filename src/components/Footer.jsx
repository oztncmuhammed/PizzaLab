import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <h5>Footer Content</h5>
            <p>Some description about your website or company.</p>
          </div>
          <div className="col-md-6">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="text-light text-decoration-none"
                  onClick={() => navigate("/home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light text-decoration-none"
                  onClick={() => navigate("/about")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light text-decoration-none"
                  onClick={() => navigate("/contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-light" />
        <p className="mb-0">&copy; 2025 YourWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

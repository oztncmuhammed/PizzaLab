import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
function Login() {
  const navigate = useNavigate();
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-5 shadow-lg w-100"
        style={{ maxWidth: "450px", borderRadius: "2rem" }}
      >
        <h2 className="text-center mb-4 fw-bold">Giriş Yap</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="loginEmail" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              className="form-control rounded-pill"
              id="loginEmail"
              placeholder="example@gmail.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="loginPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-pill"
              id="loginPassword"
              placeholder="********"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 rounded-pill mt-3"
          >
            Giriş Yap
          </button>
        </form>

        <p className="mt-4 text-center">
          Hesabın yok mu?{" "}
          <a
            href="#"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Kayıt Ol
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;

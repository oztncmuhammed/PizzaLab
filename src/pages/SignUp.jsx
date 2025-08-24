import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h3 className="text-center mb-4">Kayıt Ol</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="registerName" className="form-label">
              Ad Soyad
            </label>
            <input
              type="text"
              className="form-control"
              id="registerName"
              placeholder="Adınız Soyadınız"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="registerEmail" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="registerEmail"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="registerPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="registerPassword"
              placeholder="********"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="registerConfirm" className="form-label">
              Şifre Tekrar
            </label>
            <input
              type="password"
              className="form-control"
              id="registerConfirm"
              placeholder="********"
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Kayıt Ol
          </button>
        </form>
        <p className="mt-3 text-center">
          Zaten hesabın var mı?{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/login");
            }}
          >
            Giriş Yap
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;

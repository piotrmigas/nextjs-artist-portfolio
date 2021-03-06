import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">
            <span className="fw-bold mb-0">Emilia Kina</span>
          </a>
        </Link>
        <button
          className="navbar-toggler float-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse" id="navbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/">
                <a className={`nav-link ${router.pathname == "/" ? "active" : ""}`}>About/Contact</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/works">
                <a className={`nav-link ${router.pathname == "/works" ? "active" : ""}`}>Works</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/exhibitions">
                <a className={`nav-link ${router.pathname == "/exhibitions" ? "active" : ""}`}>Exhibition Views</a>
              </Link>
            </li>
            <li className="nav-item">
              <a href="https://www.instagram.com/emilia_kina" className="nav-link" aria-label="Instagram">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

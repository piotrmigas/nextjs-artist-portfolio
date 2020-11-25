import Head from "./Head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Head />
        <Navbar />
        <div className="container">{children}</div>
        <div className="alert text-center cookiealert" role="alert">
          This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy.
          <button type="button" className="btn btn-primary btn-sm acceptcookies">
            Ok
          </button>
        </div>
        <script src="https://cdn.jsdelivr.net/gh/Wruczek/Bootstrap-Cookie-Alert@gh-pages/cookiealert.js"></script>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

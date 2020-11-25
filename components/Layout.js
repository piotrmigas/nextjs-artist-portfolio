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
          <b>Do you like cookies?</b> &#x1F36A; We use cookies to ensure you get the best experience on our website.{" "}
          <a href="https://cookiesandyou.com/" target="_blank">
            Learn more
          </a>
          <button type="button" className="btn btn-primary btn-sm acceptcookies">
            I agree
          </button>
        </div>
        <script src="https://cdn.jsdelivr.net/gh/Wruczek/Bootstrap-Cookie-Alert@gh-pages/cookiealert.js"></script>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

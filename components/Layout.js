import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Head>
          <title>Emilia Kina's Portfolio</title>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:site_name" content="Emilia Kina's Portfolio" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/images/works/25.jpg" />
          <meta name="description" content="Emilia Kina's Portfolio" />
          <meta property="og:description" content="Emilia Kina's Portfolio" />
          <meta property="og:title" content="Emilia Kina's Portfolio" />
          <meta google-site-verification="google3243b8247a579621" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
            integrity="sha512-xA6Hp6oezhjd6LiLZynuukm80f8BoZ3OpcEYaqKoCV3HKQDrYjDE1Gu8ocxgxoXmwmSzM4iqPvCsOkQNiu41GA=="
            crossOrigin="anonymous"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-CuOF+2SnTUfTwSZjCXf01h7uYhfOBuxIhGKPbfEJ3+FqH/s6cIFN9bGr1HmAg4fQ"
            crossOrigin="anonymous"
          />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-popRpmFF9JQgExhfw5tZT4I9/CI5e2QcuUZPOVXb1m7qUmeR2b50u+YFEYe1wgzy"
            crossOrigin="anonymous"
          ></script>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/Wruczek/Bootstrap-Cookie-Alert@gh-pages/cookiealert.css"
          />
        </Head>
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

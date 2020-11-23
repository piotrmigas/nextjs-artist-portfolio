import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import SimpleReactLightbox from "simple-react-lightbox";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const options = {
    buttons: {
      showDownloadButton: false,
      showFullscreenButton: false,
      showThumbnailsButton: false,
      showAutoplayButton: false,
    },
    settings: {
      disablePanzoom: true,
      disableWheelControls: true,
    },
    thumbnails: {
      showThumbnails: false,
    },
    caption: {
      captionColor: "#b9bbc0",
      captionFontStyle: "italic",
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
    >
      <div className="page-container">
        <div className="content-wrap">
          <Head>
            <title>Emilia Kina's Portfolio</title>
            <link rel="icon" href="/favicon.ico" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="keywords" content="emilia kina" />
            <meta name="description" content="Emilia Kina's Portfolio" />
            <meta google-site-verification="google3243b8247a579621" />
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
          <div className="container">
            <SimpleReactLightbox>
              <Component {...pageProps} options={options} />
            </SimpleReactLightbox>
          </div>
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
    </motion.div>
  );
}

export default MyApp;

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
            <meta name="description" content="Emilia Kina's Portfolio" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet" />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
              integrity="sha512-xA6Hp6oezhjd6LiLZynuukm80f8BoZ3OpcEYaqKoCV3HKQDrYjDE1Gu8ocxgxoXmwmSzM4iqPvCsOkQNiu41GA=="
              crossOrigin="anonymous"
            />
            <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
              integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
              crossOrigin="anonymous"
            />
            <script
              src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
              integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
              crossOrigin="anonymous"
            ></script>
            <script
              src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
              integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
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

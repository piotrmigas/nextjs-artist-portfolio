import "../styles/globals.css";

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

  return <Component {...pageProps} options={options} />;
}

export default MyApp;

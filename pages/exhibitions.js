import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Loader from "react-loader-spinner";
import { exhibitionCaptions } from "./api/exhibitionCaptions";
import axios from "axios";

const ExhibitionViews = ({ options }) => {
  const [loaded, setLoaded] = React.useState(false);
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    const getImgs = async () => {
      try {
        const { data } = await axios("/api/exhibitions");
        setImages(data);
      } catch (err) {
        throw new Error(err);
      }
    };

    getImgs();
  }, []);

  return (
    <>
      <h5 className="pt-4 pb-3 text-center">
        Exhibition Views{" "}
        <Loader
          type="Watch"
          height={20}
          width={20}
          style={{ visibility: !loaded ? "visible" : "hidden", display: "inline" }}
        />
      </h5>
      <SRLWrapper customCaptions={exhibitionCaptions} options={options}>
        <div className="text-center mb-4">
          {images.map(({ id, src }) => (
            <img src={src} alt="" key={id} onLoad={() => setLoaded(true)} className="p-1" />
          ))}
        </div>
      </SRLWrapper>
    </>
  );
};

export default ExhibitionViews;

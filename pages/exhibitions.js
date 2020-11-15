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
      const { data } = await axios("/api/exhibition");
      setImages(data);
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

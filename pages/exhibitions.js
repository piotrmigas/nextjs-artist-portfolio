import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Loader from "react-loader-spinner";
import { exhibitionImgs } from "../data/exhibitionImgs";

const ExhibitionViews = ({ options }) => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <SimpleReactLightbox>
      <h5 className="pt-4 pb-3 text-center">
        Exhibition Views{" "}
        <Loader
          type="Watch"
          height={20}
          width={20}
          style={{ visibility: !loaded ? "visible" : "hidden", display: "inline" }}
        />
      </h5>
      <SRLWrapper customCaptions={exhibitionImgs} options={options}>
        <div className="text-center mb-4">
          {exhibitionImgs.map(({ id, src }) => (
            <img src={src} alt="" key={id} onLoad={() => setLoaded(true)} className="p-1" />
          ))}
        </div>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
};

export default ExhibitionViews;

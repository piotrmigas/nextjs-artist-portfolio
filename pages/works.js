import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Loader from "react-loader-spinner";
import { worksImgs } from "../data/worksImgs";

const Works = ({ options }) => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <SimpleReactLightbox>
      <h5 className="pt-4 pb-3 text-center">
        Works{" "}
        <Loader
          type="Watch"
          height={20}
          width={20}
          style={{ visibility: !loaded ? "visible" : "hidden", display: "inline" }}
        />
      </h5>
      <SRLWrapper customCaptions={worksImgs} options={options}>
        <div className="text-center mb-4">
          {worksImgs.map(({ id, src }) => (
            <img src={src} alt="" key={id} onLoad={() => setLoaded(true)} className="p-1" />
          ))}
        </div>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
};

export default Works;

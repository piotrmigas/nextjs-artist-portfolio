import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Loader from "react-loader-spinner";
import { exhibitionImgs } from "../data/exhibitionImgs";
import Layout from "../components/Layout";

const ExhibitionViews = ({ options }) => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <Layout>
      <h5 className="pt-4 pb-3 text-center">
        Exhibition Views{" "}
        <Loader
          type="Watch"
          height={20}
          width={20}
          style={{ visibility: !loaded ? "visible" : "hidden", display: "inline" }}
        />
      </h5>
      <SimpleReactLightbox>
        <SRLWrapper customCaptions={exhibitionImgs} options={options}>
          <div className="text-center mb-4">
            {exhibitionImgs.map(({ id, src }) => (
              <img src={src} alt="" key={id} onLoad={() => setLoaded(true)} className="p-1" />
            ))}
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </Layout>
  );
};

export default ExhibitionViews;

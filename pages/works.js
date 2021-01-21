import { useState, useRef } from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Loader from "react-loader-spinner";
import { worksImgs } from "../data/worksImgs";
import Layout from "../components/Layout";

const Works = ({ options }) => {
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);

  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= worksImgs.length) {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <h5 className="pt-4 pb-3 text-center">
        Works{" "}
        <Loader
          type="Watch"
          height={20}
          width={20}
          style={{ visibility: loading ? "visible" : "hidden", display: "inline" }}
        />
      </h5>
      <SimpleReactLightbox>
        <SRLWrapper customCaptions={worksImgs} options={options}>
          <div className="text-center mb-4" style={{ display: loading ? "none" : "block" }}>
            {worksImgs.reverse().map(({ id, src }) => (
              <img src={src} alt="" key={id} onLoad={imageLoaded} className="p-1" />
            ))}
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </Layout>
  );
};

export default Works;

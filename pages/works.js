import { useState, useRef } from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Loader from "react-loader-spinner";
import { worksImgs } from "../data/worksImgs";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

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
    <Layout title="Works">
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
              {worksImgs.reverse().map(({ id, src }) => (
                <img src={src} alt="" key={id} onLoad={imageLoaded} className="p-1" />
              ))}
            </motion.div>
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </Layout>
  );
};

export default Works;

import { motion } from "framer-motion";
import Layout from "../components/Layout";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Emilia Kina's Portfolio" />
        <meta property="og:description" content="Emilia Kina's Portfolio" />
        <meta property="og:title" content="Emilia Kina's Portfolio" />
        <meta property="og:url" content="https://emiliakina.vercel.app/" />
      </Head>
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
        <Layout>
          <div className="row justify-content-center">
            <div className="col-sm-11">
              <h5 className="text-center pt-4 pb-3">About</h5>
              <p>
                Born in 1990. In 2010-2015, she studied at the Jan Matejko Academy of Fine Arts in Krakow. Her
                graduation work was completed in Prof. Adam Bricken’s studio and the graduation work annex in
                photography in Tomas Agat Błoński’s studio. She works primarily in painting and photography. Her works
                spring from theoretical considerations and are rich in references to traditional painting. The motif of
                image-curtain which Emilia employs is a clear reference to the Renaissance concept of a painting as a
                window onto the world. The theme of opening is replaced with the self-covering image, at once
                manifesting its physicality. Emilia is interested in the materiality of the image, a simple form arising
                from complex problems.
              </p>
              <div className="row">
                <div className="col-sm-12">
                  <h5 className="pt-3">SOLO EXHIBITIONS:</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">2020 : Screen : Raster Gallery : Warszawa : PL</li>
                    <li className="list-group-item">2016 : Peekaboo : Henryk Gallery : Kraków : PL</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <h5 className="pt-4">GROUP EXHIBITIONS:</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      2020 : NADA Miami x Warsaw 2020 : Raster Gallery : Warszawa : PL
                    </li>
                    <li className="list-group-item">
                      2020 : Time and foam : Academy of Fine Arts Gallery : Kraków : PL
                    </li>
                    <li className="list-group-item">2019 : Innocent Eyes, Weak Arm : Šopa Gallery : Koszyce : SK</li>
                    <li className="list-group-item">2019 : Dwelling : Gallery Grey House : Kraków : PL</li>
                    <li className="list-group-item">
                      2019 : Humanist greets the day with no smile : Piotrowska/Szczęśniak Atelier : Kraków : PL
                    </li>
                    <li className="list-group-item">2019 : Cracow Art Salon : Pałac Sztuki : Kraków : PL</li>
                    <li className="list-group-item">
                      2019 : Young Polish painting : Pałac Opatów : National Museum in Gdańsk : Gdańsk : PL
                    </li>
                    <li className="list-group-item">2019 : Changing Views : Kunst im Hafen : Düsseldorf : DE</li>
                    <li className="list-group-item">
                      2019 : Primal Fantasies : BWA Contemporary Art Gallery in Katowice : Katowice : PL
                    </li>
                    <li className="list-group-item">2019 : Mirage Travel : Wozownia Art Gallery : Torun : PL</li>
                    <li className="list-group-item">
                      2018 : Stand-off : BWA Contemporary Art Gallery in Katowice : Katowice : PL
                    </li>
                    <li className="list-group-item">2018 : Déjà vu : Henryk Gallery : Kraków : PL</li>
                    <li className="list-group-item">2018 : Non-Place : High5 : Kraków : PL</li>
                    <li className="list-group-item">
                      2017 : Lord's favour is no inheritance : Henryk Gallery : Kraków : PL
                    </li>
                    <li className="list-group-item">2017 : Triangle : KulturforumAltePost Neuss : Düsseldorf : DE</li>
                    <li className="list-group-item">2017 : Triangle : SITTart : Düsseldorf : DE</li>
                    <li className="list-group-item">
                      2017 : Triange : Polnisches Institut Düsseldorf : Düsseldorf : DE
                    </li>
                    <li className="list-group-item">
                      2017 : TANCEBA : BWA Art Gallery in Bielsko Biała : Bielsko Biała : PL
                    </li>
                    <li className="list-group-item">2017 : Pre-Lock-Up Stage: Gdańsk City Gallery : Gdańsk : PL</li>
                    <li className="list-group-item">
                      2017 : Her white plumage, shone on by rays of light, gleamed like the sun itself : Henryk Gallery
                      : Kraków : PL
                    </li>
                    <li className="list-group-item">
                      2017 : Samotna umowność : Galeria na najwyższym poziomie : Rzeszów : PL
                    </li>
                    <li className="list-group-item">
                      2016 : Song and Dance Ensemble Henryk : Henryk Gallery : Kraków: PL
                    </li>
                    <li className="list-group-item">
                      2016 : Artists from Kraków. Generation 1980-1990 : Museum of Contemporary Art in Krakow – MOCAK :
                      Kraków : PL
                    </li>
                    <li className="list-group-item">2016 : Ostatki – drawing diplomas : Wrocław : PL</li>
                    <li className="list-group-item">
                      2015 : Academys of Fine Arts, best diplomas 2015 : Stara Zbrojownia : Gdańsk : PL
                    </li>
                    <li className="list-group-item">2015 : Best diplomas 2014/2015 ASP : Pałac Sztuki : Kraków: PL</li>
                    <li className="list-group-item">
                      2015 : Minus one : Academy of Fine Art in Cracow Gallery : Kraków : PL
                    </li>
                    <li className="list-group-item">
                      2015 : Liban : Gallery Of Contemporary Art : Gorzów Wielkopolski : PL
                    </li>
                    <li className="list-group-item">
                      2015 : PROMOCJE 2015 25. National Review of Young Painting : Legnica : PL
                    </li>
                  </ul>
                </div>
              </div>
              <p className="fw-bold pt-4 pb-4">
                Contact:{" "}
                <a href="mailto:kinaemila@gmail.com" className="email">
                  kinaemila@gmail.com
                </a>
                <a href="https://www.instagram.com/emilia_kina" className="align-middle ml-2">
                  <i className="fab fa-instagram fa-2x" />
                </a>
              </p>
            </div>
          </div>
        </Layout>
      </motion.div>
    </>
  );
};

export default Home;

import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  // Popup
  const [popup, setPopup] = useState(false);

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Teaching</span>
            <p align="left">
              1.F2022, <a href="https://people.eecs.berkeley.edu/~alexch/classes/CS459-F2022.html">CS459: Foundations of Probabilistic Proofs</a><br></br>
              2.S2022, <a href="https://people.eecs.berkeley.edu/~alexch/classes/CS602-S2022.html">CS602: Foundations of Probabilistic Proofs</a><br></br>
              3.F2021, on teaching leave <br></br>
              4.S2021, <a href="https://cs170.org/">CS170: Efficient Algorithms and Intractable Problems</a><br></br>
              5.F2020, <a href="https://people.eecs.berkeley.edu/~alexch/classes/CS294-F2020.html">CS294: Foundations of Probabilistic Proofs</a><br></br>
              6.S2020, <a href="https://inst.eecs.berkeley.edu/~cs170/sp20/">CS170: Efficient Algorithms and Intractable Problems</a><br></br>
              7.F2019, on teaching leave at the Simons Institute<br></br>
              8.S2019, <a href="https://people.eecs.berkeley.edu/~alexch/classes/CS294-S2019.html">CS294: Probabilistically Checkable and Interactive Proof Systems</a><br></br>
              9.F2018, <a href="https://inst.eecs.berkeley.edu/~cs170/fa18/">CS170: Efficient Algorithms and Intractable Problems</a><br></br>
              10.S2018, <a href="https://inst.eecs.berkeley.edu//~cs170/sp18/">CS170: Efficient Algorithms and Intractable Problems</a><br></br>
              11.F2017, <a href="https://people.eecs.berkeley.edu/~alexch/classes/CS276-F2017.html"> CS276: Cryptography</a><br></br>
              12.S2017, <a href="https://people.eecs.berkeley.edu/~alexch/classes/CS294-S2017.html">CS294:Probabilistically Checkable and Interactive Proof Systems</a><br></br>
              13.F2016, <a href="https://people.eecs.berkeley.edu/~alexch/classes/CS294-F2016.html">CS294: Property Testing</a><br></br>
              14.S2016, <a href="https://inst.eecs.berkeley.edu//~cs170/sp16/">CS170: Efficient Algorithms and Intractable Problems</a><br></br>
              15.F2015, <a href="https://people.eecs.berkeley.edu/~alexch/classes/CS276-F2015.html">CS276:Cryptography</a><br></br>
              <span>Activities</span><br></br>
              1.Workshop on <a href="https://bertinoro-proofs.github.io/"> Efficient Probabilistic Proofs</a> @ Bertinoro, Italy (July 2022) <br></br>
              2.MSRI Summer School on <a href="https://www.msri.org/summer_schools/931">Foundations and Frontiers of Probabilistic Proofs</a> (July 2021) <br></br>
              3.Reunion Workshop on <a href="https://simons.berkeley.edu/workshops/proofs-consensus-and-decentralizing-society-reunion">Reunion Workshop on </a> @ the Simons Institute for the Theory of Computing (December 2020) <br></br>
              4.Semester Program on <a href="https://simons.berkeley.edu/programs/proofs2019">Proofs, Consensus, and Decentralizing Society</a> @ the Simons Institute for the Theory of Computing (Fall 2019) <br></br>
              5.Workshop on <a href="https://crypto.iacr.org/2018/affevents/cryptocurrencies/page.html">Decentralized Cryptocurrencies and Blockchains</a>@ CRYPTO 2018 <br></br>
              6.Workshop on<a href="https://people.eecs.berkeley.edu/~alexch/pcpip-stoc17.html">Probabilistically Checkable and Interactive Proofs</a>@ STOC 2017 Theory Fest <br></br>
              7.<a href="http://itcs-conf.org/">ITCS 2017</a> (8th Innovations in Theoretical Computer Science Conference) <br></br>
              8.<a href="https://bacrypto.github.io/">Bay Area Cryto Day</a><br></br>
              <span>Program Committees</span><br></br>
              1.<a href="https://www.iacr.org/conferences/">CRYPTO 2019</a> (39th International Cryptology Conference) <br></br>
              2.<a href="https://www.ieee-security.org/TC/SP2019/">S&P 2019</a> (40th IEEE Symposium on Security and Privacy) <br></br>
              3.<a href="https://eurocrypt.iacr.org/2018/">EUROCRYPT 2018</a> (37th IACR International Conference on the Theory and Applications of Cryptographic Techniques) <br></br>
              4.<a href="https://www.iacr.org/workshops/tcc2017/">TCC 2017</a> (15th IACR Theory of Cryptography Conference) <br></br>
              5.<a href="http://itcs-conf.org/">ITCS 2017</a> (8th Innovations in Theoretical Computer Science Conference) <br></br>
              6.<a href="http://tcc2016b.sklois.cn/">TCC 2016-B</a> (14th IACR Theory of Cryptography Conference) <br></br>
              7.<a href="https://www.sigsac.org/ccs/CCS2016/index.php/">CCS 2016</a> (23rd ACM Conference on Computer and Communications Security) <br></br>
            </p>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("youtube")}`}
                  onClick={handleFilterKeyChange("youtube")}
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("vimeo")}`}
                  onClick={handleFilterKeyChange("vimeo")}
                >
                  Vimeo
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("soundcloud")}`}
                  onClick={handleFilterKeyChange("soundcloud")}
                >
                  Soundcloud
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("popup")}`}
                  onClick={handleFilterKeyChange("popup")}
                >
                  Popup
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer  ${activeBtn("detail")}`}
                  onClick={handleFilterKeyChange("detail")}
                >
                  Detail
                </a>
              </li>
            </ul>
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Mockup Shape"
                    data-category="Youtube"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/embed/7e90gBu4pas?autoplay=1"
                    >
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/1.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Mockup Shape</h3>
                    <span>Youtube</span>
                  </div>
                </div>
              </li>
              <li className="vimeo grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Ave Bottle"
                    data-category="Vimeo"
                  >
                    <a
                      className="popup-vimeo"
                      href="https://player.vimeo.com/video/337293658?autoplay=1"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/2.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Ave Bottle</h3>
                    <span>Vimeo</span>
                  </div>
                </div>
              </li>
              <li className="soundcloud grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Magic Art"
                    data-category="Soundcloud"
                  >
                    <a
                      className="soundcloude_link mfp-iframe audio"
                      href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    >
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/3.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Magic Art</h3>
                    <span>Soundcloud</span>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Scott Felix"
                    data-category="Popup"
                  >
                    <a className="zoom" href="img/portfolio/5.jpg">
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/5.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Blue Lemon</h3>
                    <span>Popup</span>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Art Stone"
                    data-category="Popup"
                  >
                    <a className="zoom" href="img/portfolio/4.jpg">
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/4.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Art Stone</h3>
                    <span>Popup</span>
                  </div>
                </div>
              </li>

              <li className="detail grid-item" onClick={() => setPopup(true)}>
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Global Evolution"
                    data-category="Detail"
                  >
                    <a className="portfolio_popup" href="#">
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/6.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Global Evolution</h3>
                    <span>Detail</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;

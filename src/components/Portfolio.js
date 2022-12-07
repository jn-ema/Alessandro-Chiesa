import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";

const portfolio = () => {
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
    return () => isotope.current;
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current({ filter: `*` })
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
            <span>Research</span>
            <br></br>
            <br></br>
            <div>
              <h4>Current</h4>
              <ul>
                <li><a href="https://ic-people.epfl.ch/~bordage/">Sarah Bordage</a> (Postdoc)</li>
                <li><a href="https://it.linkedin.com/in/giacomo-fenzi">Giacomo Fenzi</a> (PhD Student)</li>
                <li><a href="https://ziyiguan.github.io/">Ziyi Guan</a> (PhD Student)</li>
                <li><a href="https://siqi-l.github.io/">Siqi Liu</a> (PhD Student)</li>
                <li><a href="https://fermima.com/">Fermi Ma</a> (Postdoc)</li>
                <li><a href="https://scholar.google.ch/citations?user=Dj4bd0EAAAAJ">Ngoc Khanh Nguyen</a> (Postdoc)</li>
                <li><a href="https://www.di.ens.fr/~orru/">Michele Orrù</a> (Postdoc)</li>
                <li><a href="https://sotiraki.com/">Katerina Sotiraki</a> (Postdoc)</li>
              </ul>
              <br></br>
              <br></br>
              <br></br>
              <h4>Alumni</h4>
              <ul>
                <li><a href="https://jbootle.github.io/">Jonathan Bootle</a> (Postdoc → Researcher at IBM Research Zurich)</li>
                <li><a href="https://dblp.org/pid/143/4392.html">Lynn Chua</a> (PhD student → Facebook)</li>
                <li><a href="https://www.dcs.warwick.ac.uk/~tomgur/">Tom Gur</a> (Postdoc → Professor at University of Warwick)</li>
                <li><a href="https://huyuncong.com/">Yuncong Hu</a> (PhD Student → Shanghai Jiao Tong University)</li>
                <li><a href="https://www.cs.cmu.edu/~pmanohar/">Peter Manohar</a> (Undergraduate Student → PhD Student at CMU)</li>
                <li><a href="https://people.eecs.berkeley.edu/~pratyushmishra/">Pratyush Mishra</a> (PhD Student → Aleo)</li>
                <li><a href="https://twitter.com/valardragon">Dev Ojha</a> (Undergraduate Student → Sikka)</li>
                <li><a href="https://www.cs.sfu.ca/~ishinkar/">Igor Shinkar</a> (Postdoc → Professor at Simon Fraser University)</li>
                <li><a href="https://spooner.cc/">Nick Spooner</a> (PhD student → Professor at University of Warwick)</li>
                <li>Psi Vesely (Research Assistant → PhD Student at UCSD)</li>
                <li>Jiahao Wang (MS Student → Google)</li>
                <li><a href="https://people.eecs.berkeley.edu/~npward/index.html">Nicholas Ward</a> (MS Student → Mir)</li>
                <li><a href="https://twitter.com/1howardwu">Howard Wu</a> (MS Student → Aleo)</li>
              </ul>
            </div>
              </div>
            </div>

          </div>

          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="">
              <li className="youtube grid item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Mockup Shape"
                    data-category="Youtube"
                  >

                  </div>
                  <div className="mobile_title">

                    <span></span>
                  </div>
                </div>
              </li>
              <li className="vimeo grid item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Ave Bottle"
                    data-category="Vimeo"
                  >

                  </div>
                  <div className="mobile_title">

                  </div>
                </div>
              </li>
              <li className="soundcloud grid-item">
                <div className="inner">

                  <div className="mobile_title">

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

                  </div>
                  <div className="mobile_title">

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

                  </div>
                  <div className="mobile_title">

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

                  </div>
                  <div className="mobile_title">

                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

  );
};
export default portfolio;

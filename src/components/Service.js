import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
import ServicePopup from "./popup/ServicePopup";

const Service = ({ dark }) => {
  const [data, setData] = useState([]);
  const [popupdata, setPopupdata] = useState({});
  const [popup, setPopup] = useState(false);
  useEffect(async () => {
    setData(await fatchData("/static/service.json"));
    setTimeout(() => {
      let VanillaTilt = require("vanilla-tilt");
      VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
        maxTilt: 6,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 500,
        transition: true,
      });
    }, 1000);
  }, []);

  const onClick = (index) => {
    setPopup(true);
    setPopupdata(data && data[index]);
  };

  return (
    <div className="dizme_tm_section" id="service">
      <ServicePopup
        data={popupdata}
        open={popup}
        close={() => setPopup(false)}
      />
      <div className="dizme_tm_services">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Short Bio</span>
            <h3>Alessandro Chiesa</h3>
            <p align="left">
              I joined <a href="https://www.epfl.ch/en/"> EPFL'</a>s faculty in the summer of 2021, and <a href="https://www.berkeley.edu/">UC Berkeley'</a>s faculty in the summer of 2015.<br></br>
              Prior to that, I spent one year as a postdoctoral researcher at <a href="https://ethz.ch/de.html">ETH Zürich</a>; my host was Prof. <a href="url">Thomas Holenstein</a>.<br></br>
              I earned my Ph.D. in the <a href="https://toc.csail.mit.edu/l">Theory of Computation</a> group in <a href="https://www.csail.mit.edu/">CSAIL</a> at <a href="https://people.eecs.berkeley.edu/~alexch/www.mit.edu">MIT</a>; my doctoral thesis advisor was Prof. <a href="http://people.csail.mit.edu/silvio/">Silvio Micali</a>.<br></br>
              I earned my M.Eng. in the same group; my master's thesis advisors were Prof. <a href="http://www.cs.tau.ac.il/~tromer/">Eran Tromer</a> and Prof. <a href="url">Ron Rivest</a>.<br></br>
              I earned my S.B. in <a href="https://math.mit.edu/">Mathematics</a> and my S.B. in <a href="https://www.eecs.mit.edu/">Computer Science</a> at MIT; outside of classes and labs, I rowed for the heavyweight varsity <a href="mitathletics.com/sports/m-crewhvy/">crew team</a> at MIT.<br></br>
              A list of my old coursework while at MIT can be found <a href="https://people.eecs.berkeley.edu/~alexch/coursework.html">here</a>.<br></br>
              Before coming to MIT, I lived in <a href="https://www.comune.varese.it/hh/index.php">Varese</a>, Italy, where I was born in 1987. While in Italy, I attended the <a href="https://www.eurscva.eu/">European School of Varese</a> from kindergarten through high school; this school is part of the system of <a href="www.eursc.eu">European Schools</a>, which awards students the European Baccalaureate.<br></br>
              I enjoy many outdoor sports, including biking, climbing, mountaineering, and running.
            </p>
          </div>
          <div className="service_list">
            <ul>
              {data &&
                data.map(
                  (data, i) =>
                    data && (
                      <li
                        className={`wow ${
                          (i * 1) % 2 === 0 ? "fadeInLeft" : "fadeInRight"
                        }`}
                        data-wow-duration="1s"
                        key={i}
                        onClick={() => onClick(i)}
                      >
                        <div className="list_inner tilt-effect">
                          <span className="icon">
                            {parse(data.icon.svg)}
                            {dark ? (
                              <img
                                className="back"
                                src={data.icon.iconBgDark}
                                alt="image"
                              />
                            ) : (
                              <img
                                className="back"
                                src={data.icon.iconBg}
                                alt="image"
                              />
                            )}
                          </span>
                          <div className="title">
                            <h3>{data.title}</h3>
                            <span className="price">
                              Starts from <span>${data.price}</span>
                            </span>
                          </div>
                          <div className="text">
                            <p>{data.shortDec}</p>
                          </div>
                          <a className="dizme_tm_full_link" href="#" />
                          <img
                            className="popup_service_image"
                            src="img/service/1.jpg"
                            alt="image"
                          />
                        </div>
                      </li>
                    )
                )}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/service/5.png" alt="image" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/service/6.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Service;

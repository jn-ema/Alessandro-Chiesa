import Counter from "./Counter";
const About = ({ dark }) => {
  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <img src={`https://www.lib.berkeley.edu/sites/default/files/inline-images/_MG_3288.jpg`} alt="image" />


              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`I'm an Associate Professor`}</span>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>I am on leave at the <a href="https://www.epfl.ch/schools/ic/">École polytechnique fédérale de Lausanne</a> (EPFL).I am an associate professor in the <a href="http://www.eecs.berkeley.edu/">EECS Department</a> at <a href="http://www.berkeley.edu/">UC Berkeley</a>,
                  affiliated with the <a href="http://theory.cs.berkeley.edu/">Theory</a> and <a href="http://security.cs.berkeley.edu/">Security</a> research groups.</p>
                <p>I am an author of <a href="https://github.com/scipr-lab">several zkSNARK libraries</a> (such as <a href="https://github.com/scipr-lab/libsnark">libsnark</a>) and <a href="https://github.com/arkworks-rs">arkworks</a>.I am a co-inventor of <a href="http://zerocash-project.org/">Zerocash</a>, co-founder of <a href="https://z.cash/">Zcash</a>, and co-founder of <a href="http://www.starkware.co/">StarkWare Industries</a>.My work has been recognized by a <a href="https://sloan.org/fellowships/2021-Fellows">Sloan Research Fellowship</a> (2021), an <a href="http://www.okawa-foundation.or.jp/en/activities/research_grant/list.html">Okawa Foundation Research Grant</a> (2020), a nomination in <a href="https://www.innovatorsunder35.com/the-list/alessandro-chiesa/">MIT's TR35</a> (2018), and Google Faculty Research Awards (<a href="https://research.google/outreach/past-programs/faculty-research-awards/?category=2018">2018</a> and <a href="https://research.google/outreach/past-programs/faculty-research-awards/?category=2017">2017</a></p>
                <p>Please use this <a href="docs/short-bio.txt">bio</a> and <a href="assets/img/alessandro-chiesa-announce.jpg">photo</a> for announcements.</p>
              </div>

            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default About;

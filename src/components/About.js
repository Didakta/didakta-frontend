import "../styles/about.css";

import teacher from "../images/farnoush-shamsian.jpg";
import webdev from "../images/mrclcyn.jpg";
import advisor from "../images/gregory-crane.jpg";
import designer from "../images/faxte-shamsian.jpg";

import Header from "../components/Header";
import BackToTop from "./BackToTop";

const About = () => {
  return (
    <>
      <Header />
      <div className="about-ct">
        <div className="about-rows">
          <div className="about-row-ct">
            <div className="about-row">
              <h1>Who we are</h1>
            </div>
          </div>

          {/* 2ND ROW */}
          <div
            className="about-row-ct"
            style={{ backgroundColor: "rgb(21, 50, 59)" }}
          >
            <div className="about-row">
              <div className="about-row-cell col-6">
                <div className="about-card-ct">
                  <img
                    className="about-card-img"
                    src={teacher}
                    alt="Farnoush Shamsian"
                  />
                  <h2>Farnoush Shamsian</h2>
                  <p>Content Provider</p>
                </div>
              </div>
              <div className="about-row-cell col-6">
                <div className="about-card-ct">
                  <img
                    className="about-card-img"
                    src={webdev}
                    alt="Arsalan Moharrebi"
                  />
                  <h2>Arsalan Moharrebi</h2>
                  <p>Web Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3RD ROW */}
          <div
            className="about-row-ct"
            style={{ backgroundColor: "rgb(73, 27, 27)" }}
          >
            <div className="about-row">
              <div className="about-row-cell col-6">
                <div className="about-card-ct">
                  <img
                    className="about-card-img"
                    src={advisor}
                    alt="Dr. Gregory Crane"
                  />
                  <h2>Dr. Gregory Crane</h2>
                  <p>Reasearch Advisor</p>
                </div>
              </div>
              <div className="about-row-cell col-6">
                <div className="about-card-ct">
                  <img
                    className="about-card-img"
                    src={designer}
                    alt="Faxte Shamsian"
                  />
                  <h2>Faxte Shamsian</h2>
                  <p>Graphic Design</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4TH ROW */}
          <div
            className="about-row-ct"
            style={{ backgroundColor: "rgb(110, 124, 139)" }}
          >
            <div className="about-row">
              <p className="about-thanks">
                We are thankful to{" "}
                <a
                  href="https://github.com/TariqYousef"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tariq Yousef
                </a>{" "}
                for his help with integrating the translation alignments, and to
                the{" "}
                <a
                  href="https://en.pedalion.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pedalion
                </a>{" "}
                project that has been a great source of inspiration to us.
              </p>
            </div>
          </div>
          <div className="about-row-head-ct"></div>

          {/* 5TH ROW */}
          <div
            className="about-row-ct"
            style={{ backgroundColor: "rgb(122, 88, 88)" }}
          >
            <div className="about-row">
              <h2 className="about-ref-title">
                List of the sources and references of the Homeric Greek course
              </h2>
              <ul className="about-ref-ul">
                <li className="about-ref-li">
                  Pharr, C. (1920). Homeric Greek: a book for beginners. D. C.
                  Heath & Co.
                </li>
                <li className="about-ref-li">
                  Smyth, H. W. (1920) A Greek Grammar for Colleges, United
                  States: Harvard university press
                </li>
                <li className="about-ref-li">
                  Gildersleeve, B. L. (1900). Syntax of Classical Greek from
                  Homer to Demosthenes. New York. American Book Company
                </li>
                <li className="about-ref-li">
                  Goodwin, W. (2010). Syntax of the Moods and Tenses of the
                  Greek Verb (Cambridge Library Collection - Classics).
                  Cambridge: Cambridge University Press.
                  doi:10.1017/CBO9780511697777
                </li>
                <li className="about-ref-li">
                  Chantraine, P. (2013) Grammaire homérique. Syntaxe. Tome II.
                  Paris: Librairie C. Klincksieck.
                </li>
                <li className="about-ref-li">
                  Emde, B. E., Rijksbaron, A., Huitink, L., & Bakker, M. .
                  (2019). The Cambridge grammar of classical Greek. Newyork:
                  Cambridge University Press
                </li>
                <li className="about-ref-li">
                  Allan, R. (2019). The Middle Voice in Ancient Greek. Leiden,
                  The Netherlands: Brill. doi:
                  https://doi.org/10.1163/9789004409064
                </li>
                <li className="about-ref-li">
                  Monro, D. B (1891). A grammar of the Homeric dialect. Oxford :
                  Clarendon Press
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <BackToTop />
    </>
  );
};

export default About;

{
  /* <div>
        <p>
          Didakta does not use non-authentic texts. Every text and exercise in
          Didakta is taken from the selected corpus and you will be reading
          authentic Greek texts from the very first lesson. If your goal is to
          fluently read an Ancient Greek text, what better way than actually
          reading Greek to help you reach your goal. Didakta integrates the
          traditional sources and textbooks into the corpus-based syllabus. It’s
          free, open-source and only uses open data. More importantly, it is
          designed to be localizable with minimum effort. A Persian version is
          almost ready, and we hope to add other languages soon. If you would
          like to contribute another translation, please contact us!
        </p>
        
      </div> */
}

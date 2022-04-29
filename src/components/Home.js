import "../styles/home.css";
import BackToTop from "./BackToTop";
import HomeNavBar from "./HomeNavBar";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const start = () => {
    if (localStorage.usertoken) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <HomeNavBar id="home-top" />
      <div className="home-container">
        <div className="home-rows">
          {/*/////////////////////////// FIRST ROW ///////////////////////////*/}
          <div className="home-row-1-ct">
            <div className="home-row-1">
              <div className="home-row-1-left col-6">
                <div className="home-logo-container"></div>
              </div>
              <div className="home-row-1-right col-6">
                <div className="home-row-1-text">
                  A free online platform for data-driven learning of Ancient
                  Greek
                </div>
              </div>
            </div>
          </div>

          {/*/////////////////////////// SECOND ROW /////////////////////////// */}
          <div className="home-row-2-ct">
            <div className="home-row-2">
              <div className="home-row-2-left col-6">
                <div className="block-ct">
                  <h1>Homeric Greek Course</h1>
                  <p>Learn Greek by reading the Iliad</p>
                  <button className="home-yellow-btn" onClick={start}>
                    {localStorage.usertoken ? "Your Dashboard" : "Start Here"}
                  </button>
                </div>
              </div>
              <div className="home-row-2-right col-6">
                <div className="home-img-container"></div>
              </div>
            </div>
          </div>

          {/*/////////////////////////// THIRD ROW /////////////////////////// */}
          <div className="home-row-3-ct">
            <div className="home-row-3">
              Not sure if Homeric Greek is what you want to learn?
              <br />
              Learn a little bit about different periods of the Greek language
              <br />
              <button className="home-green-btn">here</button>
            </div>
          </div>

          {/*/////////////////////////// FOURTH ROW /////////////////////////// */}
          <div className="home-row-4-ct">
            <div className="home-row-4">
              <div className="home-row-4-left col-6">
                <div className="home-img-container"></div>
              </div>
              <div className="home-row-4-right col-6">
                <div className="block-ct">
                  <h1>Why Didakta?</h1>
                  <p>Learn more about our method of teaching</p>
                  <button
                    className="home-red-btn"
                    onClick={() => {
                      navigate("/about");
                      scrollToTop();
                    }}
                  >
                    Discover
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/*/////////////////////////// FIFTH ROW /////////////////////////// */}
          <div className="home-row-5-ct">
            <div className="home-row-5">
              <div className="home-row-5-left col-6">
                <div className="block-ct">
                  <h1>About us</h1>
                  <p>Learn more about the Didakta team</p>
                  <button
                    className="home-blue-btn"
                    onClick={() => {
                      navigate("/about");
                      window.scrollTo({
                        top: 1300,
                        behavior: "smooth",
                      });
                    }}
                  >
                    Discover
                  </button>
                </div>
              </div>
              <div className="home-row-5-right col-6">
                <div className="home-img-container"></div>
              </div>
            </div>
          </div>

          {/*/////////////////////////// SIXTH ROW /////////////////////////// */}
          <div className="home-row-6-ct">
            <div className="home-row-6">
              <h2>Browse our resources</h2>
              <ul>
                <li>
                  <a href="#">Modular Grammar</a>
                </li>
                <li>
                  <a href="#">Glossary for Iliad One</a>
                </li>
                <li>
                  <a href="#">Pinakedon: Greek Morphology</a>
                </li>
              </ul>
            </div>
          </div>

          {/*/////////////////////////// SEVENTH ROW /////////////////////////// */}

          <div className="home-row-7-ct">
            <div className="home-row-7"></div>
          </div>

          {/*/////////////////////////// EIGHTH ROW /////////////////////////// */}
          <div className="home-row-8-ct">
            <div className="home-row-8">
              <p>
                We’re always looking forward to expand Didakta to other
                languages.
                <br />
                Interested in contributing a translation to Didakta?
              </p>
              <button className="home-sky-btn">Get in touch!</button>
            </div>
          </div>
        </div>
        <BackToTop />
      </div>
    </>
  );
};

export default Home;

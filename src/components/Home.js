import { useState, useEffect } from "react";
import "../styles/home.css";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [userToken, setUserToken] = useState();

  const getUserToken = async () => {
    const token = await localStorage.usertoken;
    if (token) {
      return token;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    setUserToken(getUserToken());
  }, []);
  console.log(userToken);

  const start = () => {
    if (userToken !== 0) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="home-container">
      <div className="home-rows">
        {/*/////////////////////////// FIRST ROW ///////////////////////////*/}
        <div className="home-row-1-ct">
          <div className="home-row-1">
            <div
              className="home-row-1-left col-6"
              onClick={() => navigate("/")}
            >
              <div className="home-logo-container"></div>
            </div>
            <div className="home-row-1-right col-6">
              <div className="home-row-1-text">
                A free online platform for data-driven learning of Ancient Greek
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
                  {userToken === 0 ? "Start Here" : "Your Dashboard"}
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
                <button className="home-red-btn">Discover</button>
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
                <button className="home-blue-btn">Discover</button>
              </div>
            </div>
            <div className="home-row-5-right col-6">
              <div className="home-img-container"></div>
            </div>
          </div>
        </div>

        {/*/////////////////////////// FIFTH ROW /////////////////////////// */}
        <div className="home-row-6-ct">
          <div className="home-row-6">
            <h2>Browse our resources:</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
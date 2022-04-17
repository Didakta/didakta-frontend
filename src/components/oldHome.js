import logo from "../images/icon-red.png";
import ugarit from "../images/ugarit.png";
import perseus from "../images/Perseus.jpg";

import { useNavigate } from "react-router-dom";

import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();

  const startLearning = () => {
    if (localStorage.usertoken) {
      navigate("/dashboard");
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="homeContainer">
      <div className="homeImageContainer">
        <h1>Learn Ancient Greek</h1>
        <h2>A master class provided for you by Didakta</h2>
        <button onClick={startLearning} className="startLearning">
          START LEARNING
        </button>
      </div>
      <div className="homeTextContainer">
        <h1>About Didakta</h1>
        <p className="homeP">
          Didakta is a platform for data-driven learning of the Ancient Greek
          Language. It uses treebank data to form a frequency-based syllabus by
          calculating which word forms are the most common. Each course begins
          with the most common forms in a chosen body of text (for example,
          Homeric epics) and each lesson includes frequency statistics so you
          can spend your time learning the most recurrent words and forms.
          <details>
            <summary>Learn more ...</summary>
            <p></p>
            <p className="homeP">
              Didakta does not use non-authentic texts. Every text and exercise
              in Didakta is taken from the selected corpus and you will be
              reading authentic Greek texts from the very first lesson. If your
              goal is to fluently read an Ancient Greek text, what better way
              than actually reading Greek to help you reach your goal. Didakta
              integrates the traditional sources and textbooks into the
              corpus-based syllabus. It’s free, open-source and only uses open
              data. More importantly, it is designed to be localizable with
              minimum effort. A Persian version is almost ready, and we hope to
              add other languages soon. If you would like to contribute another
              translation, please contact us!
            </p>
            <p className="homeP">
              Implemented by <span id="webdev">Arsalan Moharrebi</span> &{" "}
              <span id="webdev">Deborah Wright</span>
              <br />
              Content by <span id="webdev">Farnoosh Shamsian</span>
            </p>
            <p className="homeP">
              We’re thankful for the invaluable contributions of Tariq Yousef
            </p>
          </details>
        </p>
      </div>
      <div className="ugaritLink">
        <a href="http://ugarit.ialigner.com/" target="_blank">
          <img className="ugarit" src={ugarit} />
        </a>
        <a href="https://scaife.perseus.org/" target="_blank">
          <img className="perseus" src={perseus} />
        </a>
      </div>
    </div>
  );
};

export default Home;

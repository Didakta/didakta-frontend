import logo from "../images/icon-red.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <Link to="/register">
        <img
          id="Logo"
          width="100"
          padding-top="5"
          src={logo}
          alt="Didakta Logo"
          style={{ pt: "10px", mt: "20px", pl: 8 }}
        />
      </Link>

      <h1>About DIDAKTA</h1>
      <div>
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
        <p>
          Content by Farnoosh Shamsian
          <br />
          Implemented by Arsalan Moharrebi and Deborah Wright
        </p>
        <p>We’re thankful for the invaluable contributions of Tariq Yousef</p>
      </div>
    </div>
  );
}

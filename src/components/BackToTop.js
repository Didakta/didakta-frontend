import dkIcon from "../images/icon-red.png";
import "../styles/backtotop.css";
import { useState, useEffect } from "react";

const BackToTop = () => {
  const [goTop, setGoTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 600) {
        setGoTop(true);
      } else {
        setGoTop(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div className="back-to-top-ct">
      {goTop && (
        <div className="back-to-top" onClick={scrollToTop}>
          <img className="back-to-top-btn" src={dkIcon} alt="Didakta icon" />
          <p className="back-to-top-text"></p>
        </div>
      )}
    </div>
  );
};

export default BackToTop;

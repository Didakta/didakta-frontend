import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <>
      <Header />
      <div
        style={{
          backgroundColor: "rgb(110, 124, 139)",
          color: "lightgray",
          textAlign: "center",
          fontSize: "4vw",
          padding: "15vw 0 15vw",
        }}
      >
        Page Not Found
        <button
          style={{
            display: "block",
            border: "none",
            color: "rgb(48, 41, 52)",
            textDecoration: "none",
            margin: "30px auto",
            background: "transparent",
            cursor: "pointer",
            fontSize: "2vw",
          }}
          onClick={() => navigate(-1)}
        >
          Go Back!
        </button>
      </div>
    </>
  );
};

export default NotFound;

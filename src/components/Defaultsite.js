import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

//IONOS redirects didakta.org to "didakta.vercel.app/defaultsite". This is to redirect back to "didakta.vercel.app/".
const Defaultsite = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  });

  return <></>;
};

export default Defaultsite;

import axios from "axios";
import { useState, useEffect, createContext } from "react";

export const ApiContext = createContext();

export const ApiController = (props) => {
  const [lessons, setLessons] = useState();
  const [loading, setLoading] = useState(true);

  const lessonsUrl = `https://didakta-backend.herokuapp.com/lesson`;

  const fetchAllLessons = async () => {
    try {
      const { data } = await axios.get(lessonsUrl);
      setLessons({ __html: data.data });
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllLessons();
  }, []);

  return (
    <ApiContext.Provider value={[lessons, setLessons]}>
      {!loading && props.children}
    </ApiContext.Provider>
  );
};

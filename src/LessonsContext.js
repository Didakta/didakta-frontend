import { useState, useEffect, createContext } from "react";

import { fetchLessons } from "./functions/userFunctions";

export const ApiContext = createContext();

const LessonsContext = (props) => {
  const [lessons, setLessons] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLessons(setLessons, setLoading);
  }, []);

  return (
    <ApiContext.Provider value={[lessons, setLessons]}>
      {!loading && props.children}
    </ApiContext.Provider>
  );
};

export default LessonsContext;

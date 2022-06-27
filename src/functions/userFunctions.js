import axios from "axios";
import jwtDecode from "jwt-decode";

const backendUri = process.env.REACT_APP_BACKEND_URI;

export const fetchLessons = async (setLessons, setLoading) => {
  try {
    const { data } = await axios.get(`${backendUri}/lesson`, {
      headers: {
        "authentication-token": process.env.REACT_APP_ADMIN_TOKEN,
      },
    });
    setLessons({ __html: data.data });
    setLoading(false);
  } catch (err) {
    console.log(err);
  }
};

export const fetchUserData = async (userId, setUser, setLoading) => {
  try {
    const { data } = await axios.get(`${backendUri}/user/${userId}`, {
      headers: {
        "authentication-token": localStorage.usertoken,
      },
    });
    setUser(data.data);
    setLoading(false);
  } catch (err) {
    console.log(err);
  }
};

export const register = async (userData) => {
  return await axios
    .post(
      `${backendUri}/user/register`,
      {
        first: userData.first,
        last: userData.last,
        email: userData.email,
        password: userData.password,
      },
      {
        hearders: {
          "authentication-token": localStorage.usertoken,
        },
      }
    )
    .catch((err) => console.error(err));
};

export const login = async (user) => {
  return await axios
    .post(
      `${backendUri}/user/login`,
      {
        email: user.email,
        password: user.password,
      },
      {
        hearders: {
          "authentication-token": localStorage.usertoken,
        },
      }
    )
    .then((res) => {
      localStorage.setItem("usertoken", res.data.token);
      localStorage.setItem("lessonProgress", res.data.data.lessonProgress);
      return res.data;
    })
    .catch((err) => console.error(err));
};

export const logOut = async (event, navigate) => {
  event.preventDefault();
  const userToken = localStorage.usertoken;

  const decodedToken = jwtDecode(userToken);

  await axios.put(
    `${backendUri}/user/${decodedToken.id}/progress/update`,
    {
      lessonProgress: localStorage.lessonProgress,
    },
    {
      headers: {
        "authentication-token": userToken,
      },
    }
  );
  localStorage.removeItem("lessonProgress");
  localStorage.removeItem("usertoken");
  localStorage.removeItem("score");
  localStorage.removeItem("useranswers");
  localStorage.removeItem("scoreOLD");
  localStorage.removeItem("userOLDanswers");

  navigate(`/`);
};

export const updateUserFirstName = async (newFirst, userId) => {
  return await axios
    .put(
      `${backendUri}/user/${userId}/update`,
      {
        first: newFirst,
      },
      {
        headers: {
          "authentication-token": localStorage.usertoken,
        },
      }
    )
    .catch((err) => console.error(err));
};

export const updateUserLastName = async (newLast, userId) => {
  return await axios
    .put(
      `${backendUri}/user/${userId}/update`,
      {
        last: newLast,
      },
      {
        headers: {
          "authentication-token": localStorage.usertoken,
        },
      }
    )
    .catch((err) => console.error(err));
};

export const updateUserEmail = async (newEmail, userId) => {
  return await axios
    .put(
      `${backendUri}/user/${userId}/update`,
      {
        email: newEmail,
      },
      {
        headers: {
          "authentication-token": localStorage.usertoken,
        },
      }
    )
    .catch((err) => console.error(err));
};

export const updateUserPassword = async (newPass, userId) => {
  return await axios
    .put(
      `${backendUri}/user/${userId}/update`,
      {
        password: newPass,
      },
      {
        headers: {
          "authentication-token": localStorage.usertoken,
        },
      }
    )
    .then((res) => {
      return res.data.success;
    })
    .catch((err) => console.error(err));
};

export const getUserId = () => {
  const userToken = localStorage.usertoken;
  const user = jwtDecode(userToken);
  return user.id;
};

export const getUserToken = async () => {
  const userToken = (await localStorage.usertoken)
    ? localStorage.usertoken
    : null;
  if (userToken !== null) {
    return userToken;
  } else {
    return null;
  }
};

export const getUserProgress = async (userId, token) => {
  return await axios
    .get(`${backendUri}/user/${userId}`, {
      headers: {
        "authentication-token": localStorage.usertoken,
      },
    })
    .then((res) => {
      const userProgress = {
        lessonProgress: res.data.data.lessonProgress,
        quizProgress: res.data.data.quizProgress,
      };
      return userProgress;
    })
    .catch((err) => console.error(err));
};

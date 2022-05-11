import axios from "axios";
import jwtDecode from "jwt-decode";

export const register = async (userData) => {
  return await axios
    .post("https://didakta.herokuapp.com/user/register", {
      first: userData.first,
      last: userData.last,
      email: userData.email,
      password: userData.password,
    })
    .then((res) => res)
    .catch((err) => console.error(err));
};

export const login = async (user) => {
  return await axios
    .post("https://didakta.herokuapp.com/user/login", {
      email: user.email,
      password: user.password,
    })
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
    `https://didakta.herokuapp.com/user/${decodedToken.user._id}/progress/update`,
    {
      lessonProgress: localStorage.lessonProgress,
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

export const updateProfile = async (userData, userId) => {
  // !!! the function does NOT work !!! ////////////////////////////////
  return await axios
    .put(`https://didakta.herokuapp.com/user/profile/${userId}`, {
      first: userData.first,
      last: userData.last,
      email: userData.email,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

export const getUserToken = async () => {
  const token = await localStorage.usertoken;
  if (token) {
    return token;
  } else {
    return 0;
  }
};

export const getUserProfile = async (setUserData) => {
  const token = await localStorage.usertoken;
  // console.log(token);
  const decodedToken = await jwtDecode(token);
  setUserData({
    first: decodedToken.first,
    last: decodedToken.last,
    email: decodedToken.email,
    id: decodedToken.id,
    admin: decodedToken.admin,
  });
};

export const getUserProgress = async (userId, token) => {
  return await axios
    .get(`https://didakta.herokuapp.com/user/${userId}`, {
      headers: {
        "authentication-token": token,
      },
    })
    .then((res) => {
      const userProgress = {
        lessonProgress: res.data.data.lessonProgress,
        chapterProgress: res.data.data.chapterProgress,
        quizProgress: res.data.data.quizProgress,
      };
      return userProgress;
    })
    .catch((err) => console.error(err));
};

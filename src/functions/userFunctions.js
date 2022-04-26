import axios from "axios";
import jwtDecode from "jwt-decode";

export const register = (userData) => {
  return axios
    .post("https://didakta-backend.herokuapp.com/user/register", {
      first: userData.first,
      last: userData.last,
      email: userData.email,
      password: userData.password,
    })
    .then((res) => res)
    .catch((err) => console.error(err));
};

export const login = (user) => {
  return axios
    .post("https://didakta-backend.herokuapp.com/user/login", {
      email: user.email,
      password: user.password,
    })
    .then((res) => {
      localStorage.setItem("usertoken", res.data.token);
      return res.data;
    })
    .catch((err) => console.error(err));
};

export const updateProfile = (userData, userId) => {
  // !!! the function does NOT work !!! ////////////////////////////////
  return axios
    .put(`https://didakta-backend.herokuapp.com/user/profile/${userId}`, {
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

export const getUserProgress = (userId, token) => {
  return axios
    .get(`https://didakta-backend.herokuapp.com/user/${userId}`, {
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

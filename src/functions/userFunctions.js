import axios from "axios";

export const register = async (userData) => {
  try {
    const { successData } = await axios.post(
      "https://didakta-backend.herokuapp.com/user/register",
      {
        first: userData.first,
        last: userData.last,
        email: userData.email,
        password: userData.password,
      }
    );
    console.log("Successfully registered");
    return successData;
  } catch (err) {
    console.log(err);
  }
};

export const login = (user) => {
  return axios
    .post("https://didakta-backend.herokuapp.com/user/login", {
      email: user.email,
      password: user.password,
    })
    .then((res) => {
      localStorage.setItem("usertoken", res.data.token); // sets a usertoken into the localstorage coming from res.data
      return res.data;
    })
    .catch((err) => console.error(err));
};

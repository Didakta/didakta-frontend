import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

const Profile = () => {
  const [userData, setUserData] = useState({
    first: "",
    last: "",
    email: "",
    id: "",
    regDate: Date().now,
    quizProgress: {
      firstTimeScore: 0,
      quiz: "",
    },
    lessonProgress: "",
    chapterProgress: "",
  });

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const token = await localStorage.usertoken;
    const decoded = await jwtDecode(token);
    setUserData({
      first: decoded.user.first,
      last: decoded.user.last,
      email: decoded.user.email,
      id: decoded.user._id,
      regDate: decoded.user.regDate,
      quizProgress: decoded.user.quizProgress,
      lessonProgress: decoded.user.lessonProgress,
      chapterProgress: decoded.user.chapterProgress,
    });
  };
  console.log(userData);

  return (
    <div>
      <p>Hello {userData.first}</p>
    </div>
  );
};

export default Profile;

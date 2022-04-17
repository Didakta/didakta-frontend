import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getUserToken,
  getUserProgress,
  getUserProfile,
  updateProfile,
} from "../functions/userFunctions";

const Profile = () => {
  const [userEmail, setUserEmail] = useState("");
  const [editableElement, setEditableElement] = useState(false);
  const [userProgress, setUserProgress] = useState({
    lessonProgress: "",
    chapterProgress: "",
    quizProgress: [],
  });
  const [userData, setUserData] = useState({
    first: "",
    last: "",
    email: "",
    id: "",
    admin: false,
  });
  const { userId } = useParams();

  useEffect(() => {
    getUserProfile(setUserData);
    const progress = async () => {
      const token = await getUserToken();
      setUserProgress(await getUserProgress(userId, token));
    };
    progress();
  }, []);

  // console.log(userProgress);

  // const handleUserData = (e) => {
  //   setUserData({
  //     first: userData.first,
  //     last: userData.last,
  //     email: e.currentTarget.textContent,
  //     id: userData.id,
  //     admin: userData.admin,
  //   });
  //   console.log(userData);
  // };

  return (
    <div>
      <div>{userData.email}</div>
    </div>
  );
};

export default Profile;

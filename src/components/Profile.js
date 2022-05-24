import "../styles/profile.css";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import Header from "./Header";
import NotFound from "./NotFound";

import { ApiContext } from "../LessonsContext";
import {
  fetchUserData,
  updateUserFirstName,
  updateUserLastName,
  updateUserEmail,
  updateUserPassword,
} from "../functions/userFunctions";

const Profile = () => {
  const { userId } = useParams();
  const [lessons] = useContext(ApiContext);

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const [newFirst, setNewFirst] = useState();
  const [editableFirst, setEditableFirst] = useState(false);

  const [newLast, setNewLast] = useState();
  const [editableLast, setEditableLast] = useState(false);

  const [newEmail, setNewEmail] = useState();
  const [editableEmail, setEditableEmail] = useState(false);

  const [newPass, setNewPass] = useState();
  const [newPassRepeat, setNewPassRepeat] = useState();

  const [changePass, setChangePass] = useState(false);

  const [passwordError, setPasswordError] = useState(false);
  const [passUnSuccess, setPassUnSuccess] = useState(false);
  const [passSuccess, setPassSuccess] = useState(false);

  const submitPassword = async () => {
    if (newPass === newPassRepeat && newPass !== "") {
      setPasswordError(false);
      const passUpdated = await updateUserPassword(newPass, userId);
      if (passUpdated) {
        setPassUnSuccess(false);
        setPassSuccess(true);
        setChangePass(false);
      } else {
        setPassUnSuccess(true);
        setPassSuccess(false);
      }
    } else {
      setPasswordError(true);
    }
  };

  useEffect(() => {
    fetchUserData(userId, setUser, setLoading);
  }, [userId]);

  if (!localStorage.usertoken) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      {!loading && (
        <div className="profile-ct">
          <div className="profile-title">
            <h2>Hi {user.first}</h2>
            <h3>
              Here you can see and edit your personal information and review
              your quiz results
            </h3>
          </div>
          <div className="user-data-ct">
            {/**************** FIRST NAME ****************/}
            <div className="user-first-ct">
              <div className="user-first">First name</div>
              {!editableFirst ? (
                <span className="user-first-name">{user.first}</span>
              ) : (
                <input
                  className="user-first-input"
                  type="text"
                  onChange={(e) => setNewFirst(e.target.value)}
                  placeholder={user.first}
                />
              )}
              <button
                className="edit-first-btn"
                onClick={() =>
                  editableFirst
                    ? setEditableFirst(false)
                    : setEditableFirst(true)
                }
              >
                {!editableFirst ? "Edit" : "Cancel"}
              </button>
              {editableFirst && (
                <button
                  className="save-first-btn"
                  onClick={async () => {
                    if (newFirst !== "") {
                      await updateUserFirstName(newFirst, userId);
                      await fetchUserData(userId, setUser, setLoading);
                      setEditableFirst(false);
                    } else {
                      setEditableFirst(false);
                    }
                  }}
                >
                  Save
                </button>
              )}
            </div>

            {/**************** LAST NAME ****************/}
            <div className="user-last-ct">
              <div className="user-last">Last name</div>
              {!editableLast ? (
                <span className="user-last-name">{user.last}</span>
              ) : (
                <input
                  className="user-last-input"
                  type="text"
                  onChange={(e) => setNewLast(e.target.value)}
                  placeholder={user.last}
                />
              )}
              <button
                className="edit-last-btn"
                onClick={() =>
                  editableLast ? setEditableLast(false) : setEditableLast(true)
                }
              >
                {!editableLast ? "Edit" : "Cancel"}
              </button>
              {editableLast && (
                <button
                  className="save-last-btn"
                  onClick={async () => {
                    if (newLast !== "") {
                      await updateUserLastName(newLast, userId);
                      await fetchUserData(userId, setUser, setLoading);
                      setEditableLast(false);
                    } else {
                      setEditableLast(false);
                    }
                  }}
                >
                  Save
                </button>
              )}
            </div>

            {/**************** EMAIL ****************/}
            <div className="user-email-ct">
              <div className="user-email">Email address</div>
              {!editableEmail ? (
                <span className="user-email-address">{user.email}</span>
              ) : (
                <form
                  className="user-email-form"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    await updateUserEmail(newEmail, userId);
                    await fetchUserData(userId, setUser, setLoading);
                    setEditableEmail(false);
                  }}
                >
                  <input
                    className="user-email-input"
                    type="email"
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder={user.email}
                    required
                  />
                  <button
                    className="edit-email-btn"
                    onClick={() => setEditableEmail(false)}
                  >
                    Cancel
                  </button>
                  <input
                    type="submit"
                    className="save-email-btn"
                    value="save"
                  />
                </form>
              )}
              <button
                style={
                  editableEmail ? { display: "none" } : { dosplay: "inline" }
                }
                className="edit-email-btn"
                onClick={() => setEditableEmail(true)}
              >
                Edit
              </button>
            </div>

            {/**************** PASSWORD ****************/}
            <div className="user-pass-ct">
              <div className="account-password">Account Password</div>
              <button
                className="change-pass-btn"
                onClick={() =>
                  changePass ? setChangePass(false) : setChangePass(true)
                }
              >
                {changePass ? "Cancel" : "Change your password"}
              </button>
              <p
                className="user-pass-feedback"
                style={
                  passSuccess
                    ? { display: "block", color: "green" }
                    : { display: "none" }
                }
              >
                Password successfully updated
              </p>
              <p
                className="user-pass-feedback"
                style={
                  passUnSuccess ? { display: "block" } : { display: "none" }
                }
              >
                There was a problem updating your password. Please try again
                later
              </p>

              <div
                className="new-pass-ct"
                style={changePass ? { display: "block" } : { display: "none" }}
              >
                <p
                  className="user-pass-feedback"
                  style={
                    passwordError ? { display: "block" } : { display: "none" }
                  }
                >
                  Passwords don't match. Please try again.
                </p>
                <div className="new-pass">New Password</div>
                <input
                  className="new-pass-input"
                  type="password"
                  autoComplete="new-password"
                  onChange={(e) => setNewPass(e.target.value)}
                />
                <div className="new-pass-repeat">Confirm New Password</div>
                <input
                  className="new-pass-repeat-input"
                  type="password"
                  autoComplete="new-password"
                  onChange={(e) => setNewPassRepeat(e.target.value)}
                />
                <button
                  className="new-pass-submit-btn"
                  onClick={() => submitPassword()}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;

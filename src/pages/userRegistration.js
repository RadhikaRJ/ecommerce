import "../styles/userRegistration.css";
import "../styles/input.css";
import "../styles/button.css";
import { useEffect, useState } from "react";
import axios from "axios";

function UserRegistration() {
  const [registrationStatus, setRegistrationStatus] = useState(false);

  const [userRegistrationCreds, setUserRegistrationCreds] = useState({
    email: "",
    username: "",
    password: "",
    status: true,
  });

  const [passwords, setPasswords] = useState({ p1: "", p2: "" });

  async function registerNewUSer(data) {
    const response = await axios.post(
      "http://localhost:3000/user/register",
      data,
      {
        headers: { "content-type": "application/json" },
      }
    );

    if (response.data.success) {
      setRegistrationStatus(true);
    }
  }

  function verifyIfPasswordsMatch(p1, p2) {
    if (p1 === p2) {
      setUserRegistrationCreds({
        ...userRegistrationCreds,
        password: passwords.p1,
      });
    }
  }

  function handleRegisterationClick() {
    const newUserData = JSON.stringify(userRegistrationCreds);
    registerNewUSer(newUserData);
  }

  return (
    <div>
      {!registrationStatus && (
        <form>
          <label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              onChange={(event) => {
                setUserRegistrationCreds({
                  ...userRegistrationCreds,
                  email: event.target.value,
                });
              }}
            />
          </label>
          <label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              onChange={(event) => {
                setUserRegistrationCreds({
                  ...userRegistrationCreds,
                  username: event.target.value,
                });
              }}
            />
          </label>

          <label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              onChange={(event) =>
                setPasswords({ ...passwords, p1: event.target.value })
              }
            />
          </label>
          <label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="confirm password"
              onChange={(event) => {
                setPasswords({ ...passwords, p2: event.target.value });
                verifyIfPasswordsMatch(passwords.p1, event.target.value);
              }}
            />
          </label>

          <button
            className="btn btn-text btn-size-large btn-reverse-style-color btn-round-edges "
            onClick={handleRegisterationClick}
          >
            Register!
          </button>
        </form>
      )}
      {registrationStatus && (
        <div>
          <h2>
            You are now a registered member! Login with your credentials to
            continue.
          </h2>
        </div>
      )}
    </div>
  );
}

export default UserRegistration;

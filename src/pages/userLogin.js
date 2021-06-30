import "../styles/userRegistration.css";
import "../styles/input.css";
import "../styles/button.css";
import { useEffect, useState } from "react";
import axios from "axios";

function UserLogin() {
  const [loginStatus, setLoginStatus] = useState(false);

  const [userLoginCreds, setUserLoginCreds] = useState({
    email: "",
    password: "",
  });

  function handleUserLogin() {
    const data = JSON.stringify(userLoginCreds);

    loginRegisteredUser(data);
  }

  async function loginRegisteredUser(data) {
    const response = await axios
      .post("http://localhost:3000/user/login", data, {
        headers: { "content-type": "application/json" },
      })
      .then((response) => {
        if (response.data.user) {
          const val = response.data.user;
          localStorage.setItem("TOKEN", val);
          setLoginStatus(true);
        }
      });
  }
  return (
    <div>
      {!loginStatus && (
        <form>
          <label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              onChange={(event) => {
                setUserLoginCreds({
                  ...userLoginCreds,
                  email: event.target.value,
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
              onChange={(event) => {
                setUserLoginCreds({
                  ...userLoginCreds,
                  password: event.target.value,
                });
              }}
            />
          </label>
          <button
            className="btn btn-text btn-size-large btn-reverse-style-color btn-round-edges"
            type="submit"
            onClick={handleUserLogin}
          >
            Log In!
          </button>
        </form>
      )}
      {loginStatus && (
        <div>
          {" "}
          <h2>You are logged In!</h2>
        </div>
      )}
    </div>
  );
}
export default UserLogin;

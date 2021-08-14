import "../styles/userRegistration.css";
import "../styles/input.css";
import "../styles/button.css";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/authcontext";
import { LOG_IN } from "../constants/constants";
import { useNavigate, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

function UserLogin() {
  const navigate = useNavigate();

  const { dispatch } = useAuth();

  const [userLoginCreds, setUserLoginCreds] = useState({
    email: "",
    password: "",
  });

  const handleUserLogin = async (e) => {
    e.preventDefault();
    loginRegisteredUser();
  };

  async function loginRegisteredUser() {
    const credentials = JSON.stringify(userLoginCreds);
    try {
      const response = await axios.post(
        "http://localhost:3000/user/login",
        credentials,
        {
          headers: { "content-type": "application/json" },
        }
      );

      dispatch({ type: LOG_IN, payload: response.data.user });
      navigate("/products");
      toast.success("You are Successfully Logged In!");
    } catch (error) {
      console.log(error);
      toast.error("Login failed! Please try again with valid credentials.");
    }
  }

  return (
    <div>
      {localStorage.getItem("TOKEN") ? (
        <Navigate to="/products" />
      ) : (
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
    </div>
  );
}
export default UserLogin;

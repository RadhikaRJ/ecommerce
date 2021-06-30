import "../styles/userRegistration.css";
import "../styles/input.css";
import "../styles/button.css";
import { useEffect, useState } from "react";
import UserLogin from "./userLogin";
import UserRegistration from "./userRegistration";

function LoginPage() {
  const [isMember, setIsMember] = useState(true);

  return (
    <div className="user-registration-container apply-shadow">
      <h2>
        {isMember ? "Sign In!" : "Sign Up!"}
        <span>
          {isMember ? (
            <button
              className="btn  btn-text btn-reverse-style-color btn-round-edges"
              onClick={() => setIsMember((isMember) => !isMember)}
            >
              Or Register Now!
            </button>
          ) : (
            <button
              className="btn  btn-text btn-reverse-style-color btn-round-edges"
              onClick={() => setIsMember((isMember) => !isMember)}
            >
              Already a Member?
              <br /> Sign In!
            </button>
          )}
        </span>
      </h2>
      <hr></hr>
      {isMember ? <UserLogin /> : <UserRegistration />}
    </div>
  );
}
export default LoginPage;

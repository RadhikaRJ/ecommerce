import "../styles/userRegistration.css";
import "../styles/input.css";
import "../styles/button.css";
import { useState } from "react";
function UserRegistration() {
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
      {isMember ? (
        <form>
          <label for="email">
            <input type="email" id="email" name="email" placeholder="email" />
          </label>
          <label for="password">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
            />
          </label>
          <button className="btn btn-text btn-size-large btn-reverse-style-color btn-round-edges ">
            Log In!
          </button>
        </form>
      ) : (
        <form>
          <label for="email">
            <input type="email" id="email" name="email" placeholder="email" />
          </label>
          <div className="grouped-inputs">
            <label for="firstname">
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="first name"
              />
            </label>
            <label for="lastname">
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="last name"
              />
            </label>
          </div>

          <label for="password">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
            />
          </label>
          <label for="confirm-password">
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="confirm password"
            />
          </label>

          <button className="btn btn-text btn-size-large btn-reverse-style-color btn-round-edges ">
            Register!
          </button>
        </form>
      )}
    </div>
  );
}

export default UserRegistration;

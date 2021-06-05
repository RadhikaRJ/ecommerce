import "../../styles/user-details.css";
import userDetailSideImage from "../../images/user-detail-side-image.jpg";

import "../../styles/input.css";
import "../../styles/button.css";

function UserDetails() {
  return (
    <div className="user-details-main-container ">
      <h2>User Profile</h2>

      <div className="user-details-sub-container apply-shadow">
        <div className="user-details-section-container apply-shadow">
          <img src={userDetailSideImage} className="user-details-side-image" />
        </div>
        <div className="user-details-section-container">
          <h2>
            {" "}
            <span class="material-icons span-space">info</span>User Details
          </h2>

          <div className="form-container">
            <form>
              <div className="details-with-icon-container">
                <div>
                  {" "}
                  <span class="material-icons md-24 adjust-icon span-space">
                    face
                  </span>
                </div>
                <div className="inputs-horizontal-placement">
                  <label for="username">
                    <input type="text" id="username" />
                  </label>
                </div>
              </div>
              <div className="details-with-icon-container">
                <div>
                  {" "}
                  <span class="material-icons md-24 adjust-icon span-space">
                    badge
                  </span>
                </div>
                <div className="inputs-horizontal-placement">
                  <label for="firstname">
                    <input type="text" id="firstname" placeholder="firstname" />
                  </label>
                  <label for="lastname">
                    <input type="text" id="lastname" placeholder="lastname" />
                  </label>
                </div>
              </div>
              <div className="details-with-icon-container">
                <div className="inputs-horizontal-placement">
                  <div className="input-icon-horizontal-placement">
                    <div>
                      {" "}
                      <span class="material-icons md-24 adjust-icon span-space">
                        email
                      </span>
                    </div>
                    <div>
                      {" "}
                      <label for="email">
                        <input type="email" id="email" placeholder="email" />
                      </label>
                    </div>
                  </div>
                  <div className="input-icon-horizontal-placement">
                    <div>
                      {" "}
                      <span class="material-icons md-24 adjust-icon span-space">
                        phone
                      </span>
                    </div>
                    <div>
                      <label for="tel">
                        <input
                          type="tel"
                          id="tel"
                          placeholder="contact number"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <h4>Address</h4>
              <div className="details-with-icon-container">
                <div className="inputs-horizontal-placement">
                  <div className="input-icon-horizontal-placement">
                    <div>
                      {" "}
                      <span class="material-icons md-24 adjust-icon span-space">
                        flag
                      </span>
                    </div>
                    <div>
                      {" "}
                      <label for="country">
                        <input type="text" id="country" placeholder="country" />
                      </label>
                    </div>
                  </div>
                  <div className="input-icon-horizontal-placement">
                    <div>
                      {" "}
                      <span class="material-icons md-24 adjust-icon span-space">
                        location_city
                      </span>
                    </div>
                    <div>
                      {" "}
                      <label for="state">
                        <input type="text" id="state" placeholder="state" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="details-with-icon-container">
                <div className="inputs-horizontal-placement">
                  <div className="input-icon-horizontal-placement">
                    <div>
                      {" "}
                      <span class="material-icons md-24 adjust-icon span-space">
                        area_chart
                      </span>
                    </div>
                    <div>
                      {" "}
                      <label for="area">
                        <input type="text" id="area" placeholder="area" />
                      </label>
                    </div>
                  </div>

                  <div className="input-icon-horizontal-placement">
                    <div>
                      {" "}
                      <span class="material-icons md-24 adjust-icon span-space">
                        room
                      </span>
                    </div>
                    <div>
                      {" "}
                      <label for="pincode">
                        <input
                          type="number"
                          id="pincode"
                          placeholder="pincode"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-text btn-reverse-style-color btn-round-edges btn-size-large">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;

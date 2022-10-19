import React from "react";
import "./Form.css";
import Avator from "../../assets/avator.png";

import Eye from "../../assets/Show.png";

const Form = () => {
  return (
    <>
      <div className="center">
        <div>
          <img src={Avator} alt="avator" className="avator" />
          <p className="personal-acc">Personal Account</p>
          <p className="account-name">Andrew@polka.io</p>
        </div>
        <div className="wrap">
          <form>
            <div className="caption">
              <p className="caption-content">Password</p>
            </div>
            <div className="input-area">
              <input
                type="password"
                id="password-form"
                className="password-input"
              />
              <span>
                <img src={Eye} alt="eye-icon" className="eye-icon" />
              </span>
            </div>

            <span className="forget">Forgot password?</span>
            <span className="reset">Reset</span>
            <div className="signin">
              <div className="signin-wrapper">
                <span className="checkbox-wrapper">
                  <input type="checkbox" name="stay-signedin" id="checkbox" />
                  <label for="stay-signedin">Stay signed in</label>
                </span>

                <button className="btn-signin">
                  <span className="btn-content">Sign in</span>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div>
          <p className="info">
            This site is protected by reCAPTCHA and the Google
          </p>
          <p className="info">Privacy Policy and Terms of Service apply.</p>
        </div>
      </div>
    </>
  );
};

export { Form };

import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <>
      <div className="center">
        <div>
          <div className="back-btn">
            <img src="/assets/Arrow.png" alt="back-arrow" />
          </div>
          <img src="/assets/avator.png" alt="avator" className="avator" />
          <p className="personal-acc">Personal Account</p>
          <h2 className="account-name">Andrew@polka.io</h2>
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
                <img
                  src="/assets/Show.png"
                  alt="eye-icon"
                  className="eye-icon"
                />
              </span>
            </div>

            <span className="forget">Forgot password?</span>
            <span className="reset">Reset</span>
            <div className="signin">
              <div className="signin-wrapper">
                <span className="checkbox-wrapper">
                  <input type="checkbox" name="stay-signedin" id="checkbox" />
                  <label htmlFor="stay-signedin">Stay signed in</label>
                </span>

                <button className="btn-signin">
                  <span className="btn-content">Sign in</span>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="info-wrapper">
          <p className="info">
            This site is protected by reCAPTCHA and the Google
          </p>
          <p className="info">
            <u>Privacy Policy</u> and <u>Terms of Service</u> apply.
          </p>
        </div>
      </div>
    </>
  );
};

export { Form };

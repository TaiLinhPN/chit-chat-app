import { useState } from "react";
import "../assets/css/authStyle.css";
import RegisterForm from "../layout/Auth/RegisterForm";
import OtpFrom from "../layout/Auth/OtpForm";
import LoginForm from "../containers/LoginContainer";

function LoginPage() {
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  function handlePanelChange() {
    setIsSignUp(!isSignUp);
  }

  return (
    <div className="login-body">
      <div className={isSignUp ? "container right-panel-active" : "container"}>
        <div className="form-container sign-up-container">
          {!showOtpInput ? (
            <RegisterForm />
          ) : (
            <OtpFrom setShowOtpInput={setShowOtpInput} />
          )}
        </div>

        <LoginForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="hear-welcome-light">welcome!</h1>
              <p className="sub-he">
                Enter a little your personal information and let's start
                chatting right away!
              </p>
              <div className="login-button-group">
                <p className="mar-10">If not have a account?</p>

                <button
                  onClick={handlePanelChange}
                  className={"button-login btn-ghost"}
                  id="signUp"
                >
                  Log in
                </button>
              </div>
            </div>
            <div className="overlay-panel overlay-right">
              <div>
                <p className="hear-welcome">Chit Chat</p>
                <p className="sub-he">
                  Welcome Back! let's start chatting right away!
                </p>
              </div>
              <div className="login-button-group">
                <p className="mar-10">If not have a account?</p>
                <button
                  className={"button-login btn-ghost"}
                  onClick={handlePanelChange}
                  id="signIn"
                >
                  Register now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

import "../assets/css/authStyle.css";
import RegisterForm from "../containers/RegisterFormContainer";
import OtpFrom from "../containers/OtpFromContainer";
import LoginForm from "../containers/LoginFormContainer";

interface LoginPageProps {
  isSignUp: boolean;
  showOtpInput: boolean;
  setIsSignUp: (x: boolean) => void;
}
const LoginPage = ({ showOtpInput, isSignUp, setIsSignUp }: LoginPageProps) => {
  const handlePanelChange = () => {
    console.log(123123);
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="login-body">
      <div
        className={
          isSignUp ? "containerLogin right-panel-active" : "containerLogin"
        }
      >
        <div className="form-container sign-up-container">
          {!showOtpInput ? <RegisterForm /> : <OtpFrom />}
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
};

export default LoginPage;

import { connect } from "react-redux";
import { RootState } from "../redux/store";
import LoginPage from "../pages/LoginPage";
import { setIsSignUp } from "../redux/slice/stateLoginPageSlice";

const mapActionToLogin = {
  setIsSignUp,
};
const mapStateToProps = (
  state: RootState
) => {
    return {
      isSignUp: state.stateLoginPage.isSignUp,
      showOtpInput: state.stateLoginPage.showOtpInput
    };
};

export default connect(mapStateToProps, mapActionToLogin)(LoginPage);
import { connect } from "react-redux";
import { RootState } from "../redux/store";
import OtpFrom from "../layout/Auth/OtpForm";
import { setIsSignUp, setShowOtpInput } from "../redux/slice/stateLoginPageSlice";

const mapActionToLogin = {
  setShowOtpInput,
  setIsSignUp,
};
const mapStateToProps = (state: RootState) => {
  return { email: state.stateLoginPage.user.email };
};

export default connect(mapStateToProps, mapActionToLogin)(OtpFrom);

import { connect } from "react-redux";
import LoginPage from "../pages/LoginPage";
import { login } from "../redux/slice/authSlice";

// import { RootState } from "../redux/store";

const mapActionToLogin = {
  login,
};
const mapStateToProps = (
  // state: RootState
) => {
    return {
    //   isLogin: state.auth.isLogin
  };
};

export default connect(mapStateToProps, mapActionToLogin)(LoginPage);
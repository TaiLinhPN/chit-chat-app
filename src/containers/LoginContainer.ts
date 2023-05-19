import { connect } from "react-redux";
import LoginForm from "../layout/Auth/LoginForm";
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

export default connect(mapStateToProps, mapActionToLogin)(LoginForm);
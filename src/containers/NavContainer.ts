import { connect } from "react-redux";
import LoginPage from "../pages/LoginPage";
import { logout } from "../redux/slice/authSlice";

const mapActionToLogin = {
  logout,
};
const mapStateToProps = () => {
    return {
    //   isLogin: state.auth.isLogin
  };
};

export default connect(mapStateToProps, mapActionToLogin)(LoginPage);
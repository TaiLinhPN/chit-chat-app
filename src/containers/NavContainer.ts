import { connect } from "react-redux";
import Nav from "../layout/Nav";
import { logout } from "../redux/slice/authSlice";

const mapActionToLogin = {
  logout,
};
const mapStateToProps = () => {
    return {
    //   isLogin: state.auth.isLogin
  };
};

export default connect(mapStateToProps, mapActionToLogin)(Nav);
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../containers/LoginPageContainer";
import PrivateRoute from "../containers/PrivateRouteContainer";

const Router = () => {
  return (
    <Routes>
      <Route path="/chit-chat-app">
        <Route
          path=""
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default Router;

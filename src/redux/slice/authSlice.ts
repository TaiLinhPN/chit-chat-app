import { createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
  isLogin: boolean
}

const initialState: initialStateProps = {
  isLogin: false
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
     setLogin: (state) => {
      state.isLogin = true;
    },
    setLogOut: (state) => {
      state.isLogin = false;
    },
  }
})

const { setLogin, setLogOut } = authSlice.actions;

export const login = () => async (dispatch: Function) => {
  dispatch(setLogin());
};
export const logout = () => async (dispatch: Function) => {
  dispatch(setLogOut());
};
export default authSlice
import { createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
  user: {
    name: string;
    email: string;
  };
  showOtpInput: boolean;
  isSignUp: boolean;
}
const initialState: initialStateProps = {
  user: {
    name: "",
    email: "",
  },
  showOtpInput: false,
  isSignUp: false,
};

const stateLoginPageSlice = createSlice({
  name: "stateLoginPage",
  initialState,
  reducers: {
    setNameReducer: (state, action) => {
      state.user.name = action.payload;
    },
    setEmailReducer: (state, action) => {
      state.user.email = action.payload;
    },
    setShowOtpInputReducer: (state, action) => {
      state.showOtpInput = action.payload;
    },
    setIsSignUpReducer: (state, action) => {
      state.isSignUp = action.payload;
    },
  },
});

const { setEmailReducer, setShowOtpInputReducer, setIsSignUpReducer } =
  stateLoginPageSlice.actions;

export const setEmail = (email: string) => async (dispatch: Function) => {
  dispatch(setEmailReducer(email));
};

export const setIsSignUp =
  (showOtpInput: boolean) => async (dispatch: Function) => {
    console.log('log lg');
    
    dispatch(setIsSignUpReducer(showOtpInput));
  };

export const setShowOtpInput =
  (isSignUp: boolean) => async (dispatch: Function) => {
    dispatch(setShowOtpInputReducer(isSignUp));
  };

export default stateLoginPageSlice;

interface LoginProp{
  login: ()=> void
}

const LoginPage = (prop: LoginProp) => {
 
  return (
    <div>
      <p>LoginPage</p>
      <button onClick={prop.login}>click</button>
    </div>
  );
};

export default LoginPage
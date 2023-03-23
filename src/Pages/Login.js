import React from "react";
import Container from "../Component/Container";
import LoginForm from "../Component/LoginForm";
function Login() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center h-[500px]">
        <p className="text-2xl text-center font-semibold text-greeen my-5">
          Login
        </p>
        <LoginForm />
        {/* <Link to="/login">Have Account? Login </Link> */}
      </div>
    </Container>
  );
}

export default Login;

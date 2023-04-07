import React from "react";

import Container from "../Component/Container";
import LoginForm from "../Component/LoginForm";

function Login() {
  return (
    <div className="bg-gray-50">
      {/* <Container> */}
      <div className="grid grid-cols-2 gap-5 pt-16 justify-between items-center">
        <img
          className="w-full h-[600px] object-cover"
          alt="candle"
          src="https://images.unsplash.com/photo-1612293905607-b003de9e54fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <div className="lg:ml-10">
          <p className="text-2xl font-semibold text-greeen my-5">Login</p>
          <LoginForm />
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
}

export default Login;

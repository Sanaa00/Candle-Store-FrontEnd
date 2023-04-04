import React from "react";

import Container from "../Component/Container";
import CreateAccountForm from "../Component/CreateAccountForm";

function CreateAcount() {
  return (
    <div className="bg-gray-50 ">
      <Container>
        <div className="grid grid-cols-2 gap-5 justify-between items-center py-16 ">
          <img
            className="w-full h-[600px] object-cover"
            alt="candle"
            src="https://images.unsplash.com/photo-1612293905607-b003de9e54fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <div className="lg:ml-10">
            {" "}
            <p className="text-2xl font-semibold text-greeen mb-5 mt-5">
              Create Your Account
            </p>
            <CreateAccountForm />
          </div>

          {/* <Link to="/login">Have Account? Login </Link> */}
        </div>
      </Container>
    </div>
  );
}

export default CreateAcount;

import React from "react";
import Container from "../Component/Container";
import CreateAccountForm from "../Component/CreateAccountForm";
function CreateAcount() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl text-center font-semibold text-greeen mb-5 mt-10">
          Create Your Account
        </p>
        <CreateAccountForm />
        {/* <Link to="/login">Have Account? Login </Link> */}
      </div>
    </Container>
  );
}

export default CreateAcount;

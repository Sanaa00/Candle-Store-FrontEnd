import React from "react";

import ContactForm from "../Component/ContactForm";
import Container from "../Component/Container";
import Button from "../Component/Button";
function Contact() {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-5 justify-between items-center my-10">
        <img
          className="w-full h-[600px] object-cover"
          alt="candle"
          src="https://images.unsplash.com/photo-1612293905607-b003de9e54fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <div className="grid grid-cols-1 ml-10">
          <p className="text-2xl font-semibold text-greeen ">Contact Us</p>
          <ContactForm />
          {/* <Button text="Send" width={96} /> */}
        </div>
      </div>
    </Container>
  );
}

export default Contact;

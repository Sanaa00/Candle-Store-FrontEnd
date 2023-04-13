import React from "react";

import ContactForm from "../Component/ContactForm";

function Contact() {
  return (
    <div className="bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between items-center pt-16 ">
        {/* <Container> */}

        <img
          className="w-full h-[600px] object-cover"
          alt="candle"
          src="https://images.unsplash.com/photo-1612293905607-b003de9e54fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <div className="px-6 sm:px-10 md:px-14 lg:px-0 mb-5 lg:mb-0 grid grid-cols-1 lg:ml-10">
          <p className="text-2xl font-semibold text-greeen ">Contact Us</p>
          <ContactForm />
          {/* <Button text="Send" width={96} /> */}
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
}

export default Contact;

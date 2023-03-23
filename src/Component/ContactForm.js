import React from "react";
import InputField from "./InputField";
function ContactForm() {
  return (
    <div className="grid grid-cols-1">
      <InputField placeholder="Name" name="Name" value="" />
      <InputField placeholder="Email" name="Email" value="" />
      <textarea
        cols={20}
        rows={5}
        placeholder="Message"
        name="message"
        value=""
        className="w-96 border-2 border-greeen focus:outline-none my-10 px-1 py-1"
      />
    </div>
  );
}

export default ContactForm;

import React, { useState } from "react";
import Button from "./Button";

function Review() {
  const [review, setReview] = useState("");
  const reviewHandler = (e) => {
    setReview(e.target.value);
    console.log(review);
  };
  return (
    <div className="border-greeen border-2 my-5 mx-5">
      <span className="my-4 px-4 w-full text-gray-800">Your Feedback</span>
      <textarea
        cols={20}
        rows={5}
        // placeholder="Message"
        id="message"
        name="message"
        onChange={reviewHandler}
        className="w-full lg:w-full xl:w-full border-none focus:outline-none px-4 py-1"
      />
      <Button type="submit" text="Send" width="full" />
    </div>
  );
}

export default Review;

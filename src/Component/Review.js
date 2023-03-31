import React, { useState } from "react";
import Button from "./Button";

function Review() {
  const [review, setReview] = useState("");
  const reviewHandler = (e) => {
    setReview(e.target.value);
    console.log(review);
  };
  const widthOfButton = () => {
    if (window.innerWidth < 640) {
      return "full";
    } else if (window.innerWidth < 768) {
      return "full";
    } else if (window.innerWidth < 1280) {
      return "full";
    } else {
      return 96;
    }
  };
  return (
    <div className="border-greeen border  w-96">
      <span className="pt-4 px-4 w-full text-gray-800">Your Feedback</span>
      <textarea
        cols={20}
        rows={3}
        id="message"
        name="message"
        onChange={reviewHandler}
        className="w-full lg:w-full xl:w-full border-none focus:outline-none px-4 py-1 resize-none"
      />
      <Button type="submit" text="Send" width={widthOfButton()} />
    </div>
  );
}

export default Review;

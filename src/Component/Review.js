import React, { useState } from "react";
import Button from "./Button";
import { useReviewMutation } from "../features/api/review";
function Review({ id }) {
  const [review, setReview] = useState("");
  const [addReview] = useReviewMutation();
  const reviewHandler = (e) => {
    setReview(e.target.value);
  };
  const addreviewHandler = () => {
    addReview({ message: review, product: id });
  };
  const widthOfButton = () => {
    return 40;
  };
  return (
    <div className="flex flex-col w-full h-fit rounded-sm py-5">
      <p className="text-lg font-semibold text-gray-800 my-2">
        {" "}
        Give u s your feedback
      </p>
      <div className="flex flex-col justify-end items-end">
        <textarea
          cols={20}
          rows={3}
          id="message"
          name="message"
          onChange={reviewHandler}
          className="w-full focus:outline-none focus:border-greeen rounded-sm px-4 py-1 resize-none mb-2 bg-gray-50 border-2 border-gray-200"
        />

        <Button
          type="submit"
          text="Send"
          width={widthOfButton()}
          onClick={addreviewHandler}
        />
      </div>
    </div>
  );
}

export default Review;

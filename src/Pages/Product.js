import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../Component/Button";
import Container from "../Component/Container";
import Counter from "../Component/Counter";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/candleSlice";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import data from "../Data";
import Recomendation from "../Component/Recomendation";
function Product() {
  const { id } = useParams();
  const [candles, setCandles] = useState([]);
  const quantity = useSelector((state) => state.candle.candle);
  const dispatch = useDispatch();
  useEffect(() => {
    for (const d of data) {
      if (d.id.toString() === id) {
        setCandles(d);
      }
    }
  }, []);
  return (
    <Container>
      <div
        key={candles.id}
        className="grid grid-cols-2 justify-between items-center bg-greeen bg-opacity-10"
      >
        <div className="flex justify-center items-center">
          {" "}
          <img
            className="w-[400px] h-[500px] object-cover"
            alt="product"
            src={candles.url}
          />
        </div>

        <div className="ml-5 text-gray-800 flex flex-col justify-between">
          <div className=" mr-32">
            <p className="text-xl font-semibold">
              {candles.name}
              {id}
            </p>
            <p className="text-greeen mt-5 mb-1">{candles.category}</p>
          </div>
          <p className="my-5">candle description here</p>
          <div className="mb-5">radio buttons here</div>
          <div className="mb-5">Colors here</div>
          <p className="mb-5">{candles.price}</p>
          <div className="flex justify-between items-center">
            {" "}
            <Button text="Buy" onClick={() => dispatch(addToCart(candles))} />
            {/* <Counter data={quantity} /> */}
          </div>
        </div>
      </div>
      {/* {candles.map((candle) => {
        return (
         
        );
      })} */}
      <Recomendation />
    </Container>
  );
}

export default Product;

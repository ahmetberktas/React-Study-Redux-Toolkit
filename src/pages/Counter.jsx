import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, reset } from "../redux/slices/counterSlice";
import { Button } from "react-bootstrap";

const Counter = () => {
  const state = useSelector((store) => store.counterSlice);
  const dispatch = useDispatch();
  return (
    <div className="d-flex gap-2">
      <Button onClick={() => dispatch(decrease())}>Azalt</Button>
      <p className="fw-bold fs-1 px-4">{state.count}</p>
      <button onClick={() => dispatch(increase())} className="bg-success">
        Arttır
      </button>
      <button onClick={() => dispatch(reset())} className="bg-secondary">
        Sıfırla
      </button>
    </div>
  );
};

export default Counter;

import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/index";
import "./StepCounter.css";

const StepCounter = () => {
  const counter = useSelector((state) => {
    return state.counter.counter;
  });

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const resetHandler = () => {
    dispatch(counterActions.reset());
  };

  return (
    <div className="container">
      <h1>You have walked {counter} steps today!</h1>
      <div className="button-group">
        <button className="btn-1" onClick={incrementHandler}>
          Add a step{" "}
        </button>
        <button className="btn-2" onClick={resetHandler}>
          Reset Steps{" "}
        </button>
      </div>
    </div>
  );
};

export default StepCounter;

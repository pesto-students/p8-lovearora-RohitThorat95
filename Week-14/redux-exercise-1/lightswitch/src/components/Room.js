import { useSelector, useDispatch } from "react-redux";

import { lightActions } from "../store/index";

import "./Room.style.css";

const Room = () => {
  const lightedness = useSelector((state) => {
    return state.light.isLightOn;
  });

  const dispatch = useDispatch();

  const toggleLightHandler = () => {
    dispatch(lightActions.toggle());
  };

  const lightValue = lightedness ? "lit" : "dark";

  return (
    <div className={`room ${lightValue}`}>
      the room is {lightValue}
      <br />
      <button onClick={toggleLightHandler}>Flip</button>
    </div>
  );
};

export default Room;

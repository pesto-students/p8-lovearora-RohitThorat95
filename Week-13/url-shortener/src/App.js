import Header from "./components/Header";
import InputShortener from "./components/InputShortener";

import "./App.css";
import LinkResult from "./components/LinkResult";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState();
  return (
    <div>
      <Header />
      <div className="container">
        <InputShortener onSetInputValue={setInputValue} />
        <LinkResult inputValue={inputValue} />
      </div>
    </div>
  );
}

export default App;

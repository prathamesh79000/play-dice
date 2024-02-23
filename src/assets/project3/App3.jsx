import "./App3.css";
import GamePlay from "./components/GamePlay";
import StartGame from "./components/StartGame";
import { useState } from "react";

const App3 = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
      
    </>
  );
};

export default App3;

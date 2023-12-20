import "./App.css";
import Alert from "./Alert";
import Button from "./components/Button";
import { useState } from "react";
import Like from "./Like";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: { name: "John" },
  });

  const handleClick = () => {
    setGame({ ...game, player: { name: "Bob" } });
  };

  return (
    <div>
      <Message items={names} heading="Names" onSelectItem={handleSelectItem} />
      <Button onButtonClick={handleButtonClick}>Click me</Button>
      {buttonClicked ? (
        <Alert closeButton={handleButtonClick}>
          Some <b>Alert</b>
        </Alert>
      ) : (
        <></>
      )}
      <div className="likeButton">
        <Like />
      </div>
    </div>
  );
}

export default App;

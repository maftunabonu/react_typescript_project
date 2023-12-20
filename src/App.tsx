import Message from "./Message";
import "./App.css";
import Alert from "./Alert";
import Button from "./components/Button";
import { useState } from "react";
import Like from "./Like";

function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const [buttonClicked, setButtonClicked] = useState(false);

  const names = ["Maria", "Aisha", "Leyla", "Bonu"];
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

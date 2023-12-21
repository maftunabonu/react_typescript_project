import "./App.css";
import { useState } from "react";
import ExpandableText from "./ExpandableText";

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
      <button onClick={handleClick}>Change the name to BOB</button>
      <p>{game.player.name}</p>
      <ExpandableText maxChars={10}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
        provident, pariatur tempore commodi velit aliquam explicabo laborum
        exercitationem excepturi officiis, sint, eaque minus molestias
        perferendis ut eum hic dolor! Unde.
      </ExpandableText>
    </div>
  );
}

export default App;

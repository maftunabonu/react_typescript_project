import { useState } from "react";
import ListGroups from "./components/ListGroups";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function Message({ items, heading, onSelectItem }: Props) {
  const [selectedList, setSelectedList] = useState(-1);
  return (
    <div>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              index == selectedList
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedList(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <ListGroups />
    </div>
  );
}

export default Message;

import { useState } from "react";
import styled from "styled-components";
import { AiFillLike } from "react-icons/ai";

const List = styled.ul`
  background-color: rgb(241, 143, 15);
`;
interface ListProps {
  active: boolean;
}
const ListItem = styled.li`
  background: ${(active: ListProps) => (active ? "blue" : "none")};
`;
const ListGroups = () => {
  const items = ["pen", "pencil", "notebook"];
  const [activeList, setActiveList] = useState(-1);
  return (
    <div>
      <List>
        {items.map((item, index) => (
          <ListItem
            active={activeList === index}
            onClick={() => setActiveList(index)}
            key={index}
          >
            {item}
            <AiFillLike />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ListGroups;

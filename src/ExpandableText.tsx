import { useState } from "react";

interface Props {
  maxChars: number;
  children: string;
}

const ExpandableText = ({ maxChars, children }: Props) => {
  const slicedText = children.slice(0, maxChars) + "...";
  const [expanded, setExpanded] = useState(false);
  const [text, setText] = useState(slicedText);

  const handleRestrict = () => {
    setExpanded(false);
    setText(slicedText);
  };
  const handleExpand = () => {
    setExpanded(true);
    setText(children);
  };
  return (
    <div>
      <p>
        {text}
        {expanded ? (
          <button onClick={handleRestrict}>Less</button>
        ) : (
          <button onClick={handleExpand}>More</button>
        )}
      </p>
    </div>
  );
};

export default ExpandableText;

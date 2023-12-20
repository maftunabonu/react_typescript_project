import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";

const Like = () => {
  const [liked, setLiked] = useState(false);
  const toggle = () => {
    setLiked(!liked);
    console.log("clicked");
  };
  return (
    <div>
      {liked ? (
        <AiFillHeart color="#ff6b8f" size={20} onClick={toggle} />
      ) : (
        <IoMdHeartEmpty size={20} onClick={toggle} />
      )}
    </div>
  );
};

export default Like;

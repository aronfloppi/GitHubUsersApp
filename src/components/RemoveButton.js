import React from "react";

const RemoveButton = props => {
  const handleClick = () => {
    props.onClick();
  };
  return <button onClick={handleClick}>Remove card</button>;
};

export default RemoveButton;

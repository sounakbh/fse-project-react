import React from "react";

const InputSearchResult = ({ item }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("HEY!");
  };
  return (
    <button
      href="#"
      className="list-group-item"
      onClick={handleClick}
      style={{
        textAlign: "center",
        color: "black",
        backgroundColor: "white",
        width: "90%",
        border: "none",
        cursor: "pointer",
        borderBottom: "0.5px solid lightgray",
      }}
    >
      {item.name}
    </button>
  );
};

export default InputSearchResult;

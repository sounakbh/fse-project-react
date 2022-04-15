import React from "react";

const InputSearchResult = ({ item }) => {
  return (
    <li
      href="#"
      className="list-group-item"
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
    </li>
  );
};

export default InputSearchResult;

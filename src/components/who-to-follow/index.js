import WhoToFollowListItem from "./WhoToFollowListItem";
import React from "react";
// import { useSelector } from "react-redux";
import who from "./who.json";

const WhoToFollowList = () => {
  //   const who = useSelector((state) => state.who);
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="row" style={{ fontSize: "13px", color: "white" }}>
          <b>Who to follow</b>
        </div>
      </li>
      {who.map((who) => (
        <WhoToFollowListItem who={who} />
      ))}
    </ul>
  );
};

export default WhoToFollowList;

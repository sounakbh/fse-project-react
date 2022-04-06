import React from "react";
import Tuits from ".";

const TuitStats = ({ tuit, likeTuit = () => {}, dislikeTuit = () => {} }) => {
  return (
    <>
      <span
        className="ttr-like-tuit-click"
        onClick={() => likeTuit(tuit)}
        style={{ color: "white" }}
      >
        {tuit.stats && tuit.stats.likes && tuit.stats.likes > 0 && (
          <i className="fa fa-thumbs-up me-1" style={{ color: "red" }}></i>
        )}
        {tuit.stats && tuit.stats.likes && tuit.stats.likes <= 0 && (
          <i className="fa fa-thumbs-up me-1"></i>
        )}
        <span className="ttr-stats-likes">
          {tuit.stats && tuit.stats.likes == 0 ? "0" : tuit.stats.likes}
        </span>
      </span>

      <span
        className="ttr-dislike-tuit-click"
        onClick={() => dislikeTuit(tuit)}
        style={{ color: "white" }}
      >
        {tuit.stats && tuit.stats.dislikes && tuit.stats.dislikes > 0 && (
          <i className="fa fa-thumbs-down me-1" style={{ color: "black" }}></i>
        )}
        <span className="ttr-stats-dislikes">
          {tuit.stats && tuit.stats.dislikes}
        </span>
      </span>
    </>
  );
};
export default TuitStats;

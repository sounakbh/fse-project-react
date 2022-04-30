import React from "react";
const WhoToFollowListItem = ({
  who = {
    avatarIcon: "../../images/nasa.png",
    userName: "NASA",
    handle: "NASA",
  },
}) => {
  return (
    <li className="list-group-item">
      <div className="row" style={{ fontSize: "13px" }}>
        <div
          className="col-2"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ height: "40px", width: "40px", objectFit: "cover" }}
            className="rounded-circle"
            src={who.avatarIcon}
            alt=""
          />
        </div>
        <div className="col-7" style={{ paddingLeft: "0px", color: "white" }}>
          <b>{who.userName}</b> &nbsp;
          <i className="fa fa-check-circle" aria-hidden="true"></i>
          <br />
          <span className="text-secondary">@{who.handle}</span>
        </div>
        <div
          className="col-3"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="btn btn-primary btn-sm"
            style={{ borderRadius: "25px" }}
          >
            Follow
          </div>
        </div>
      </div>
    </li>
  );
};
export default WhoToFollowListItem;

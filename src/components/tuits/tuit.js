import React from "react";
import TuitStats from "./tuit-stats";
import TuitImage from "./tuit-image";
import TuitVideo from "./tuit-video";
import { useNavigate, Link } from "react-router-dom";

const Tuit = ({ tuit, deleteTuit, likeTuit, dislikeTuit }) => {
  const navigate = useNavigate();
  const daysOld = (tuit) => {
    const now = new Date();
    const nowMillis = now.getTime();
    const posted = new Date(tuit.postedOn);
    const postedMillis = posted.getTime();
    const oldMillis = nowMillis - postedMillis;
    let old = 0.0;
    const secondsOld = oldMillis / 1000.0;
    const minutesOld = secondsOld / 60.0;
    const hoursOld = minutesOld / 60.0;
    const daysOld = hoursOld / 24.0;
    if (daysOld > 1) {
      old = Math.round(daysOld) + "d";
    } else if (hoursOld > 1) {
      old = Math.round(hoursOld) + "h";
    } else if (minutesOld > 1) {
      old = Math.round(minutesOld) + "m";
    } else if (secondsOld > 1) {
      old = Math.round(secondsOld) + "s";
    }
    return old;
  };

  const embedTagLinks = (tuit) => {
    const tags = tuit.match(/#[a-z]+/gi);
    tags?.forEach((tag) => {
      tuit = tuit.replace(
        tag,
        `<a href='/api/tags/${tag.slice(1)}'>${tag}</a>`
      );
    });
    return tuit;
  };

  return (
    <>
      <li
        className="list-group-item"
        style={{
          borderRadius: "none",
        }}
      >
        <div className="row">
          <div
            className="col-1"
            style={{
              margin: 0,
              padding: 0,
            }}
          >
            <img
              src={tuit.postedBy?.profilePhoto}
              alt=""
              style={{
                marginTop: "10px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </div>

          <div
            className="col-11"
            style={{ paddingLeft: "15px", color: "white" }}
          >
            <div>
              <span>
                <b>{tuit.postedBy?.username}</b> &nbsp;
                {tuit.verified ? (
                  <i className="fa fa-check-circle" aria-hidden="true"></i>
                ) : (
                  ""
                )}
              </span>{" "}
              &nbsp;
              <span className="text-muted">@{tuit.postedBy?.username}</span>
              <i
                onClick={() => deleteTuit(tuit._id)}
                className="fas fa-remove fa 
                fa-pull-right"
              ></i>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: embedTagLinks(tuit.tuit) }}
            />
            <div className="mt-2">
              {tuit.attachments && tuit.attachments.image ? (
                <img
                  src={tuit.attachments.image}
                  style={{
                    borderRadius: "15px",
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                  }}
                  alt=""
                />
              ) : (
                ""
              )}

              <div className="p-2 d-flex justify-content-between text-muted">
                <div style={{ color: "#FAF9F6" }}>
                  <i
                    className="fa fa-comment"
                    aria-hidden="true"
                    style={{ marginRight: "5px" }}
                  ></i>
                  {tuit.stats?.replies}
                </div>
                <div style={{ color: "#FAF9F6" }}>
                  <i
                    className="fa fa-retweet"
                    aria-hidden="true"
                    style={{ marginRight: "5px" }}
                  ></i>
                  {tuit.stats?.retuits}
                </div>
                <TuitStats
                  tuit={tuit}
                  likeTuit={likeTuit}
                  dislikeTuit={dislikeTuit}
                />
                <div style={{ color: "#FAF9F6" }}>
                  <i className="fa fa-upload" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
export default Tuit;

import React from "react";
import Tuits from "../tuits";
import * as service from "../../services/tuits-service";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const { uid } = useParams();
  const [tuits, setTuits] = useState([]);
  const [tuit, setTuit] = useState("");
  // const [whatsHappening, setWhatsHappening] = useState("");
  const userId = uid;
  const findTuits = () =>
    service.findAllTuits().then((tuits) => setTuits(tuits));
  useEffect(() => {
    let isMounted = true;
    findTuits();
    return () => {
      isMounted = false;
    };
  }, []);
  const createTuit = () => service.createTuit("my", { tuit }).then(findTuits);
  return (
    <div className="ttr-home">
      <div className="row">
        <div className="col-2">
          <img
            src="../../../images/day5-vault.png"
            alt=""
            style={{
              marginTop: "10px",
              width: "80%",
              borderRadius: "50%",
            }}
          />
        </div>
        <div className="col-10">
          <textarea
            onChange={(e) => setTuit(e.target.value)}
            placeholder="What's happening?"
            style={{
              width: "100%",
              backgroundColor: "black",
              border: "none",
              color: "white",
            }}
          ></textarea>
          <hr />
          <div>
            <i
              className="fa fa-camera text-primary"
              aria-hidden="true"
              style={{ marginRight: "25px", fontSize: "20px", color: "white" }}
            ></i>
            <i
              className="fa fa-line-chart text-primary"
              aria-hidden="true"
              style={{ marginRight: "25px", fontSize: "20px" }}
            ></i>
            <i
              className="fa fa-hashtag text-primary"
              aria-hidden="true"
              style={{ marginRight: "25px", fontSize: "20px" }}
            ></i>
            <i
              className="fa fa-calendar text-primary"
              aria-hidden="true"
              style={{ marginRight: "25px", fontSize: "20px" }}
            ></i>
            <button
              className="btn btn-primary rounded-pill"
              style={{ float: "right" }}
              onClick={createTuit}
            >
              Tweet
            </button>
          </div>
          <br />
          <br />
        </div>
      </div>
      <Tuits tuits={tuits} refreshTuits={findTuits} />
    </div>
  );
};
export default Home;

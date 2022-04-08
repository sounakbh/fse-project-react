import React from "react";
import Tuits from "../tuits";
import * as service from "../../services/tuits-service";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const Explore = () => {
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
      <div className="row mb-4 position-relative">
        <div className="input-group">
          <input
            className="form-control"
            type="search"
            placeholder="Search Twitter"
            style={{ borderRadius: "25px", paddingLeft: "10%" }}
          />
          <i
            className="fa fa-search position-absolute"
            style={{
              bottom: "8px",
              left: "30px",
              color: "lightgray",
              zIndex: "100",
              fontSize: "20px",
            }}
          ></i>
        </div>
      </div>
      <Tuits tuits={tuits} refreshTuits={findTuits} />
    </div>
  );
};
export default Explore;

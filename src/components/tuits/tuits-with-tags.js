import { useEffect, useState } from "react";
import * as service from "../../services/tuits-service";
import { useParams } from "react-router-dom";
import Tuit from "./tuit";

const TuitsWithTagsScreen = () => {
  //   const [tuit, setTuit] = useState({});
  const { tagname } = useParams();
  //   const findTuitById = () =>
  //     service.findTuitById(tid).then((tuit) => setTuit(tuit));
  //   useEffect(findTuitById, []);
  return (
    <div>
      <h1>Tuits with tag: {tagname}</h1>
      {/* <Tuit tuit={tuit} likeTuit={() => {}} /> */}
    </div>
  );
};
export default TuitsWithTagsScreen;

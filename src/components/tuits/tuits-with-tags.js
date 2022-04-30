import { useEffect, useState } from "react";
import * as service from "../../services/tuits-service";
import * as likesService from "../../services/likes-service";
import * as dislikesService from "../../services/dislikes-service";
import { useParams } from "react-router-dom";
import Tuits from ".";

const TuitsWithTagsScreen = () => {
  const [tuits, setTuits] = useState({});
  const { tagname } = useParams();
  const getAllTuitsWithTags = () =>
    service.getAllTuitsWithTags(tagname).then((tuit) => setTuits(tuit));

  useEffect(getAllTuitsWithTags, []);
  return (
    <div>
      <Tuits tuits={tuits} refreshTuits={getAllTuitsWithTags} />
    </div>
  );
};
export default TuitsWithTagsScreen;

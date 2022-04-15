import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Tuits from "../tuits";
import InputSearchResult from "./inputSearchResult";
import * as service from "../../services/tuits-service";
import * as tagsService from "../../services/tags-service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Explore = () => {
  const { uid } = useParams();

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log("Onselect fired", item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
    setIsFocused(true);
  };

  const [tuits, setTuits] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [trendingTags, setTrendingTags] = useState([]);
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

  useEffect(async () => {
    const currentTags = await tagsService.findTrendingTags();
    setTrendingTags(currentTags);
    // setTrendingTags();
  }, [trendingTags]);

  return (
    <div className="ttr-home">
      {/* <div>
        <ReactSearchAutocomplete
          items={items}
          onSearch={handleOnSearch}
          onHover={formatResult}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          // autoFocus
          formatResult={formatResult}
        />
      </div> */}

      <div className="row mb-3 position-relative">
        <div className="input-group">
          <input
            className="form-control"
            type="search"
            onFocus={handleOnFocus}
            onBlur={() => setIsFocused(false)}
            placeholder="Search Twitter"
            style={{ borderRadius: "25px", paddingLeft: "10%", height: "50px" }}
          />
          <i
            className="fa fa-search position-absolute"
            style={{
              bottom: "15px",
              left: "30px",
              color: "lightgray",
              zIndex: "100",
              fontSize: "20px",
            }}
          ></i>
        </div>
        <div className="list-group" style={{ alignItems: "center" }}>
          {isFocused &&
            trendingTags.map((item) => (
              <InputSearchResult key={item.id} item={item} />
            ))}
        </div>
      </div>

      <Tuits tuits={tuits} refreshTuits={findTuits} />
    </div>
  );
};
export default Explore;

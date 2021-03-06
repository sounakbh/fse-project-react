import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Tuits from "../tuits";
import * as service from "../../services/tuits-service";
import * as tagsService from "../../services/tags-service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InputGroup, Dropdown, DropdownButton, Button } from "react-bootstrap";

const Explore = () => {
  const { uid } = useParams();
  const [tuits, setTuits] = useState([]);
  const [trendingTags, setTrendingTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const userId = uid;
  const findTuits = () =>
    service.findAllTuits().then((tuits) => setTuits(tuits));

  const findTrendingTuits = () =>
      service.findTrendingTuits().then((tuits) => setTuits(tuits));

  useEffect(() => {
    let isMounted = true;
    findTrendingTuits();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(async () => {
    const currentTags = await tagsService.findTrendingTags();
    setTrendingTags(currentTags);
  }, []);

  const findTuitsBasedOnTagSearch = () => {
    if(inputValue && inputValue !== ""){
      service.getAllTuitsWithTags(inputValue).then((tuits) => setTuits(tuits));
    } else {
      findTuits();
    }
  }

  return (
    <div className="ttr-home">
      <InputGroup className="mb-3">
        <input
          className="form-control"
          aria-label="Text input with dropdown button"
          defaultValue={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <Button id="button-addon1" onClick={findTuitsBasedOnTagSearch}>Search</Button>

        <DropdownButton
          variant="outline-secondary"
          title="Trending"
          id="input-group-dropdown-1"
        >
          {trendingTags &&
            trendingTags.map((tag) => (
              <Dropdown.Item
                key={tag._id}
                onClick={(e) => {
                  console.log(e.target.textContent);
                  setInputValue(e.target.textContent);
                }}
              >
                {tag.tag}
              </Dropdown.Item>
            ))}
        </DropdownButton>
      </InputGroup>

      <Tuits tuits={tuits} refreshTuits={findTrendingTuits} />
    </div>
  );
};
export default Explore;

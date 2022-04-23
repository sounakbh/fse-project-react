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
  useEffect(() => {
    let isMounted = true;
    findTuits();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(async () => {
    const currentTags = await tagsService.findTrendingTags();
    console.log(currentTags);
    setTrendingTags(currentTags);
  }, []);

  return (
    <div className="ttr-home">
      <InputGroup className="mb-3">
        <input
          className="form-control"
          aria-label="Text input with dropdown button"
          defaultValue={inputValue}
          onChange={(e) => console.log(e.target.value)}
        />

        <Button id="button-addon1">Search</Button>

        <DropdownButton
          variant="outline-secondary"
          title="Trendiing"
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

      <Tuits tuits={tuits} refreshTuits={findTuits} />
    </div>
  );
};
export default Explore;

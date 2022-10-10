import { Mic, Search } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Searched.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Searched({ hideButtons = false }) {
  const [{}, dispach] = useStateValue();

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();

    console.log("You hit the search button >>", input);

    dispach({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    // do something with input.. come back and fix
    navigate("/search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <Search className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <Mic />
      </div>

      {hideButtons ? (
        <div className="search__buttons">
          <button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </button>

          <button className="search__buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </button>
        </div>
      ) : (
        <div className="search__buttons">
          <button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </button>
          <a href="https://www.google.com/doodles">
            <button className="search__buttonsHidden" variant="outlined">
              I'm Feeling Lucky
            </button>
          </a>
        </div>
      )}
    </form>
  );
}

export default Searched;

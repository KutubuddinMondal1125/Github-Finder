import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchUsers, clearUsers, showClear, showAlert }) => {
  const [ text, setText ] = useState("");

  const onChange = (e) => {
    setText( e.target.value );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      return showAlert("Please enter something", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

    return (
      <div>
        <form className="form" onSubmit={onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search User....."
            onChange={onChange}
            value={text}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button
            className="btn btn-light btn-block"
            onClick={clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
};

export default Search;
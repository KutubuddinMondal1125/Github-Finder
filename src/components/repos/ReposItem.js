import React from "react";
import PropTypes from "prop-types";

const ReposItem = ({ repo }) => {
  return (
    <div>
      <div className="card">
        <h4>
          <a href={repo.html_url}>{repo.name}</a>
        </h4>
      </div>
    </div>
  );
};

ReposItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default ReposItem;

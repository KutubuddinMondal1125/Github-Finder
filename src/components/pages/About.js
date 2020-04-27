import React, { Fragment } from "react";

const About = () => {
  return (
    <div>
      <h2>About This App</h2>
      <p className="my-1" style={{ fontSize: "22px" }}>
        This is an React App to find Github Users, view their Profiles, Github
        Profiles, latest 5 Repos...
      </p>
      <p className="bg-light p-1">
        <strong>Version:</strong>
        <span className="badge badge-dark">
          <strong>1.0.0</strong>
        </span>
      </p>
      <div className="bg-danger my-2 p-1">
        <strong>Designed & Created by:</strong>
        <div style={{ marginTop: "15px", marginBottom: "15px" }}>
          <span className="badge badge-success">Name:</span>
          <a href="https://github.com/KutubuddinMondal1125">
            <span className="badge badge-light">
              <strong>Kutubuddin Mondal</strong>
            </span>
          </a>
        </div>
        <div>
          <span className="badge badge-success">Email:</span>
          <span className="badge badge-light">
            <strong>kutubuddin2528@gmail.com</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;

import React, { useState, useEffect } from "react";

const gitHubUrl = "https://musicbrainz.org/ws/2/";

function Data() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

  const getGitHubUserWithFetch = async () => {
    
     const response = await fetch(gitHubUrl);
  const jsonData = await response.json();
  setUserData(jsonData);
  };

  return (
    <div className="data">
      <header className="App-header">
        <h2>GitHub User Data</h2>
      </header>
      <div className="user-container">
        <h5 className="info-item">{userData.artist}</h5>
      </div>
    </div>
  );
}

export default Data;

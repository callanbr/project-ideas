import React from 'react';

import projects from './projects.json';

let projectsToDisplay = projects;

const randomProject = () => {
  const randomIndex = Math.floor(Math.random() * projects.length);
  document.getElementById('projectName').innerHTML = projects[randomIndex].name;
  document.getElementById('projectDescription').innerHTML =
    projects[randomIndex].description;
};

export const App = () => {
  return (
    <>
      <h2>Project Ideas!</h2>
      <button onClick={() => randomProject()}>Random Project</button>
      <h3 id='projectName'></h3>
      <p id='projectDescription'></p>
      <a href='https://github.com/callanbr/project-ideas'>GitHub</a>
      <hr />
      <h2>Project list:</h2>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </>
  );
};

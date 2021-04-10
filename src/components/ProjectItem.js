import React from "react";

function ProjectItem({ name, about, technologies }) {
    const technologyArray = technologies.map((technology) =>{
      return <span key={technology}>{technology}</span>
    })
    return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologyArray}

      </div>
    </div>
  );
}

export default ProjectItem;

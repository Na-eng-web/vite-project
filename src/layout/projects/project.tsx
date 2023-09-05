import { Children } from "react";
import { SectionHeading } from "../../componant/sectionHeading";
import { projects } from "../../profile";
import ProjectCard from "./projectCard";
import style from "./style.module.css";

export const Projects = () => {
  return (
    <div>
      <SectionHeading
        heading="Projects"
        subHeading="Projects that I have created"
      />
      <div className={style.project_container}>
        {Children.toArray(
          projects.map((project) => (
            <ProjectCard heading={project.heading} image={project.image} />
          ))
        )}
      </div>
    </div>
  );
};

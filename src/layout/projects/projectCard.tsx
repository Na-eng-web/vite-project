// ProjectCard.js

import style from "./style.module.css";

const ProjectCard = ({
  image,
  heading,
}: {
  image: string;
  heading: string;
}) => {
  return (
    <div className={style.project_card}>
      <div className={style.image}>
        <img src={image} alt="Project" />
      </div>
      <div className={style.context}>{heading}</div>
    </div>
  );
};

export default ProjectCard;

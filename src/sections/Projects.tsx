import data from "../data/projects.json";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const Projects = () => {
  const projects = data.map((project, index) => (
    <div className="image-wrapper" key={`project-${index}`}>
      <img src={project.image} alt={project.title} />
      <div className="content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          Visit website <ChevronRightRoundedIcon sx={{ fontSize: "1rem" }} />
        </a>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          View on Github
          <ChevronRightRoundedIcon sx={{ fontSize: "1rem" }} />
        </a>
      </div>
    </div>
  ));

  return (
    <>
      <h1>Some of my recent works</h1>
      <div className="projects">{projects}</div>
    </>
  );
};

export default Projects;

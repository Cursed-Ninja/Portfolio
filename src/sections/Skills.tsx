import data from "../data/skills.json";
import Skill from "../components/Skill";

const Skills = () => {
  const skill = data.map((skill, index1) => (
    <Skill key={`skill-title-${index1}`} skill={skill} index1={index1} />
  ));
  return (
    <>
      <h1>Skills</h1>
      <div className="skills">{skill}</div>
    </>
  );
};

export default Skills;

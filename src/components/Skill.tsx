import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import MiscellaneousServicesRoundedIcon from "@mui/icons-material/MiscellaneousServicesRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";

interface IProps {
  skill: {
    name: string;
    data: string[];
  };
  index1: number;
}

const Skill = ({ skill, index1 }: IProps) => {
  const icon = () => {
    switch (index1) {
      case 0:
        return <CodeRoundedIcon sx={{ fontSize: "2.5rem" }} className="icon" />;
      case 1:
        return (
          <LibraryBooksRoundedIcon
            sx={{ fontSize: "2.5rem" }}
            className="icon"
          />
        );
      case 2:
        return (
          <MiscellaneousServicesRoundedIcon
            sx={{ fontSize: "2.5rem" }}
            className="icon"
          />
        );
      case 3:
        return (
          <StorageRoundedIcon sx={{ fontSize: "2.5rem" }} className="icon" />
        );
      default:
        return <CodeRoundedIcon sx={{ fontSize: "2.5rem" }} className="icon" />;
    }
  };

  return (
    <div className="skills-container">
      <div className="skill-title">{skill.name}</div>
      <div className="skill-icon">{icon()}</div>
      <div className="skill-container">
        {skill.data.map((skill, index2) => (
          <div className="skill" key={`skill-item-${index1}-${index2}`}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;

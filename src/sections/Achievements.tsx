import achievements from "../data/achievements.json";

const Achievements = () => {
  return (
    <>
      <h1>Achievements</h1>
      <div className="achievements-container">
        {achievements.map((achievement, index) => {
          return (
            <p className="achievements-font" key={index}>
              {achievement}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Achievements;

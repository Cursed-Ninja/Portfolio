import { useState } from "react";
import data from "../data/experiences.json";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Experiences = () => {
  return (
    <>
      <h1>Experience</h1>
      <div className="experience-container">
        {data.map((experience, index) => {
          const [showFull, setShowFull] = useState(false);
          const descp = experience.description;
          const shortDescp = descp.substring(0, 250);

          return (
            <>
              <div key={`experience-${index}`} className="experience">
                <h2>
                  {experience.company} - {experience.jobTitle}
                </h2>
                <h4>
                  {experience.startDate} - {experience.endDate}
                </h4>
                <h3>Tech Stack: {experience.techStack}</h3>
                <p>
                  {showFull || descp.length === shortDescp.length
                    ? descp
                    : shortDescp + "..."}
                </p>
                {descp.length > shortDescp.length && (
                  <span
                    className="icon-wrapper"
                    onClick={() => setShowFull((prev) => !prev)}
                  >
                    {showFull ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </span>
                )}
              </div>
              {index !== data.length - 1 && <hr />}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experiences;

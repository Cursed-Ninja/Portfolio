import React, { useState, useEffect } from "react";
import { getLeetcodeData } from "../actions/getData";
import Loader from "./Loader";

const Leetcode = () => {
  const [leetcodeData, setLeetcodeData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await getLeetcodeData();
      setLeetcodeData({
        handle: "Cursed_Ninja",
        numberOfProblemsSolved: res.total_problems_solved,
        acceptanceRate: res.acceptance_rate,
        easyProblemSolved: res.easy_questions_solved,
        mediumProblemSolved: res.medium_questions_solved,
        hardProblemSolved: res.hard_questions_solved,
      });
    };
    getData();
  }, []);
  return (
    <>
      {leetcodeData ? (
        <div className="coding-profile leetcode">
          <h2 className="platform">Leetcode</h2>
          <h4 className="username">USERNAME: {leetcodeData.handle}</h4>
          <h4>ACCEPTANCE RATE: {leetcodeData.acceptanceRate}</h4>
          <h4>
            NUMBER OF PROBLEMS SOLVED: {leetcodeData.numberOfProblemsSolved}
          </h4>
          <div className="sub-problems">
            <h5>EASY PROBLEMS SOLVED: {leetcodeData.easyProblemSolved}</h5>
            <h5>MEDIUM PROBLEMS SOLVED: {leetcodeData.mediumProblemSolved}</h5>
            <h5>HARD PROBLEMS SOLVED: {leetcodeData.hardProblemSolved}</h5>
          </div>
          <a
            href="https://leetcode.com/Cursed_Ninja/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Profile Link
          </a>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Leetcode;

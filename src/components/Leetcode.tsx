import { useState, useEffect } from "react";
import { getLeetcodeData } from "../actions/getData";
import ApiError from "./ApiError";
import Loader from "./Loader";
import { CodingProfileProps as IProp } from "../types/interfaces";
import { API } from "../constants/constants";
import { LeetcodeData } from "../types/types";

const Leetcode = ({ username }: IProp) => {
  const [leetcodeData, setLeetcodeData] = useState<null | LeetcodeData>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await getLeetcodeData(username);
        if (res === undefined || res.status === API.FAILED)
          throw new Error("Error in fetching data");
        setLeetcodeData({
          handle: "Cursed_Ninja",
          rating: res.rating,
          maxRating: res.max_rating,
          globalRanking: res.global_ranking,
          topPercentage: res.top_percentage,
          numberOfProblemsSolved: res.total_problems_solved,
          easyProblemSolved: res.easy_questions_solved,
          mediumProblemSolved: res.medium_questions_solved,
          hardProblemSolved: res.hard_questions_solved,
          contestBadge: res.contest_badge,
        });
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <>
      {leetcodeData ? (
        <div className="coding-profile leetcode">
          <h2 className="platform">Leetcode</h2>
          <h4 className="username">USERNAME: {leetcodeData.handle}</h4>
          {leetcodeData.contestBadge && (
            <h4>CONTEST BADGE: {leetcodeData.contestBadge.toUpperCase()}</h4>
          )}
          <div className="rating">
            <h4>CURRENT RATING: {leetcodeData.rating}</h4>
            <h4>MAX RATING: {leetcodeData.maxRating}</h4>
          </div>
          <div className="ranking">
            <h4>CONTEST RANKING: {leetcodeData.globalRanking}</h4>
            <h4>TOP PERCENTAGE: {leetcodeData.topPercentage}%</h4>
          </div>
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
      ) : loading ? (
        <Loader />
      ) : (
        <ApiError />
      )}
    </>
  );
};

export default Leetcode;

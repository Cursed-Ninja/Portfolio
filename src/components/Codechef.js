import React, { useState, useEffect } from "react";
import { getCodechefData } from "../actions/getData";
import Loader from "./Loader";

const Codechef = () => {
  const [codechefData, setCodechefData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await getCodechefData();
      setCodechefData({
        handle: res.user_details.username,
        rating: res.rating,
        maxRating: res.highest_rating,
        stars: res.stars.slice(0, -1),
        globalRank: res.global_rank,
        countryRank: res.country_rank,
        numberOfProblemsSolved:
          res.fully_solved.count + res.partially_solved.count,
      });
    };
    getData();
  }, []);
  
  return (
    <>
      {codechefData ? (
        <div className="coding-profile codechef">
          <h2 className="platform">Codechef</h2>
          <h4 className="username">USERNAME: {codechefData.handle}</h4>
          <h4>STARS: {codechefData.stars}🌟</h4>
          <div className="ranking">
            <h4>Global Rank: {codechefData.globalRank}</h4>
            <h4>Country Rank: {codechefData.countryRank}</h4>
          </div>
          <div className="rating">
            <h4>Current Rating: {codechefData.rating}</h4>
            <h4>Max Rating: {codechefData.maxRating}</h4>
          </div>
          <h4>
            Total Number of Problems Solved:{" "}
            {codechefData.numberOfProblemsSolved}
          </h4>
          <a
            href="https://www.codechef.com/users/shivam23434545"
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

export default Codechef;

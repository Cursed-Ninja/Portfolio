import React, { useState, useEffect } from "react";
import { getCodeforcesData } from "../actions/getData";
import Loader from "./Loader";

const Codeforces = () => {
  const [codeforcesData, setCodeforcesData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await getCodeforcesData();
      setCodeforcesData({
        handle: res.result[0].handle,
        rating: res.result[0].rating,
        maxRating: res.result[0].maxRating,
        rank: res.result[0].rank,
        maxRank: res.result[0].maxRank,
      });
    };
    getData();
  }, []);
  return (
    <>
      {codeforcesData ? (
        <div className="coding-profile codeforces">
          <h2 className="platform">Codeforces</h2>
          <h4 className="username">USERNAME: {codeforcesData.handle}</h4>
          <div className="ranking">
            <h4>Current Rank: {codeforcesData.rank}</h4>
            <h4>Max Rank: {codeforcesData.maxRank}</h4>
          </div>
          <div className="rating">
            <h4>Current Rating: {codeforcesData.rating}</h4>
            <h4>Max Rating: {codeforcesData.maxRating}</h4>
          </div>
          <a
            href="https://codeforces.com/profile/Cursed_Ninja"
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

export default Codeforces;

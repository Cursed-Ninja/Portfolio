import React, { useState, useEffect } from "react";
import { getAtcoderData } from "../actions/getData";
import Loader from "./Loader";

const Atcoder = () => {
  const [atcoderData, setAtcoderData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await getAtcoderData();
      setAtcoderData({
        handle: res.username,
        rating: res.rating,
        maxRating: res.highest,
        rank: res.rank,
        level: res.level,
      });
    };
    getData();
  }, []);
  return (
    <>
      {atcoderData ? (
        <div className="coding-profile atcoder">
          <h2 className="platform">Atcoder</h2>
          <h4 className="username">USERNAME: {atcoderData.handle}</h4>
          <h4>LEVEL: {atcoderData.level}</h4>
          <h4>GLOBAL RANK: {atcoderData.rank}</h4>
          <div className="rating">
            <h4>Current Rating: {atcoderData.rating}</h4>
            <h4>Max Rating: {atcoderData.maxRating}</h4>
          </div>
          <a
            href="https://atcoder.jp/users/Cursed_Ninja"
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

export default Atcoder;

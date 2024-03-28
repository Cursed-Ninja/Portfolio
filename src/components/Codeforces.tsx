import { useState, useEffect } from "react";
import { getCodeforcesData } from "../actions/getData";
import ApiError from "./ApiError";
import Loader from "./Loader";
import { CodeforcesData } from "../types/types";
import { CodingProfileProps as IProp } from "../types/interfaces";
import { API } from "../constants/constants";

const Codeforces = ({ username, number }: IProp) => {
  const [codeforcesData, setCodeforcesData] = useState<null | CodeforcesData>(
    null
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await getCodeforcesData(username);
        if (res === undefined || res.status === API.FAILED)
          throw new Error("Error fetching data");
        setCodeforcesData({
          handle: res.result[0].handle,
          rating: res.result[0].rating,
          maxRating: res.result[0].maxRating,
          rank: res.result[0].rank,
          maxRank: res.result[0].maxRank,
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
      {codeforcesData ? (
        <div className="coding-profile codeforces">
          <h2 className="platform">Codeforces {number}</h2>
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
            href={`https://codeforces.com/profile/${username}`}
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

export default Codeforces;

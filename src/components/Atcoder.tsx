import { useState, useEffect } from "react";
import { getAtcoderData } from "../actions/getData";
import ApiError from "./ApiError";
import Loader from "./Loader";
import { AtcoderData } from "../types/types";
import { CodingProfileProps as IProp } from "../types/interfaces";
import { API } from "../constants/constants";

const Atcoder = ({ username }: IProp) => {
  const [atcoderData, setAtcoderData] = useState<null | AtcoderData>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await getAtcoderData(username);
        if (res === undefined || res.status === API.FAILED)
          throw new Error("Error fetching data");
        setAtcoderData({
          handle: res.username,
          rating: res.rating,
          maxRating: res.highest,
          rank: res.rank,
          level: res.level,
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
      ) : loading ? (
        <Loader />
      ) : (
        <ApiError />
      )}
    </>
  );
};

export default Atcoder;

import { useState, useEffect } from "react";
import { getCodechefData } from "../actions/getData";
import ApiError from "./ApiError";
import Loader from "./Loader";
import { CodingProfileProps as IProp } from "../types/interfaces";
import { CodechefData } from "../types/types";
import { API } from "../constants/constants";

const Codechef = ({ username }: IProp) => {
  const [codechefData, setCodechefData] = useState<null | CodechefData>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await getCodechefData(username);
        if (res === undefined || res.status === API.FAILED)
          throw new Error("Error fetching data");
        setCodechefData({
          handle: res.user_details.username,
          rating: res.rating,
          maxRating: res.highest_rating,
          stars: res.stars.slice(0, -1),
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
      {codechefData ? (
        <div className="coding-profile codechef">
          <h2 className="platform">Codechef</h2>
          <h4 className="username">USERNAME: {codechefData.handle}</h4>
          <h4>STARS: {codechefData.stars}🌟</h4>
          <div className="rating">
            <h4>Current Rating: {codechefData.rating}</h4>
            <h4>Max Rating: {codechefData.maxRating}</h4>
          </div>
          <a
            href="https://www.codechef.com/users/cursed_ninjaa"
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

export default Codechef;

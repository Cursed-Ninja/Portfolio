import axios from "axios";

export const getCodeforcesData = () =>
  axios.get("https://codeforces.com/api/user.info?handles=Cursed_Ninja");
export const getCodechefData = () =>
  axios.get(
    "https://competitive-programming.onrender.com/api/codechef/shivam23434545"
  );
export const getAtcoderData = () =>
  axios.get(
    "https://competitive-programming.onrender.com/api/atcoder/Cursed_Ninja"
  );

export const getLeetcodeData = () =>
  axios.get(
    "https://competitive-programming.onrender.com/api/leetcode/Cursed_Ninja"
  );

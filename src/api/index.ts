import axios from "axios";

const myApi = "https://competitive-programming.onrender.com/api/";
export const getCodeforcesData = (username: string) =>
  axios.get("https://codeforces.com/api/user.info?handles=" + username);
export const getCodechefData = (username: string) =>
  axios.get(myApi + "codechef/" + username);
export const getAtcoderData = (username: string) =>
  axios.get(myApi + "atcoder/" + username);
export const getLeetcodeData = (username: string) =>
  axios.get(myApi + "leetcode/" + username);

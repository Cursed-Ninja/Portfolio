import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const postMessage = (formData) => API.post("/message", formData);
export const getCodeforcesData = () =>
  axios.get("https://codeforces.com/api/user.info?handles=Cursed_Ninja");
export const getCodechefData = () =>
  axios.get(
    "https://competitive-coding-api.herokuapp.com/api/codechef/shivam23434545"
  );
export const getAtcoderData = () =>
  axios.get(
    "https://competitive-coding-api.herokuapp.com/api/atcoder/cursed_ninja"
  );

export const getLeetcodeData = () =>
  axios.get(
    "https://competitive-coding-api.herokuapp.com/api/leetcode/cursedninja08"
  );

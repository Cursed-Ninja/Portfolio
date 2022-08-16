import React from "react";
import Codeforces from "./Codeforces";
import Codechef from "./Codechef";
import Atcoder from "./Atcoder";
import Leetcode from "./Leetcode";

const CodingProfile = () => {
  return (
    <>
      <h1>Coding Profile</h1>
      <div className="coding-profile-container">
        <Codeforces />
        <Codechef />
        <Atcoder />
        <Leetcode />
      </div>
    </>
  );
};

export default CodingProfile;

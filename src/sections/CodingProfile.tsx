import Codeforces from "../components/Codeforces";
import Codechef from "../components/Codechef";
import Atcoder from "../components/Atcoder";
import Leetcode from "../components/Leetcode";

const CodingProfile = () => {
  return (
    <>
      <h1>Coding Profile</h1>
      <div className="coding-profile-container">
        <Codeforces username="Cursed_Ninja" />
        <Codechef username="cursed_ninjaa" />
        <Atcoder username="Cursed_Ninja" />
        <Leetcode username="Cursed_Ninja" />
      </div>
    </>
  );
};

export default CodingProfile;

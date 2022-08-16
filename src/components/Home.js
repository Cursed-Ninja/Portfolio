import React from "react";
import TextBox from "./TextBox";
import image from "../images/hero-devices.svg";
import imageDark from "../images/hero-devices-dark.svg";

const Home = (props) => {
  return (
    <div className="home">
      <TextBox />
      <img src={props.theme ? imageDark : image} alt="hero-devices" />
    </div>
  );
};

export default Home;

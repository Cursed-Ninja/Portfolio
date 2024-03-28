import TextBox from "../components/TextBox";
import image from "../images/hero-devices.svg";
import imageDark from "../images/hero-devices-dark.svg";

const Home = ({ theme }: { theme: boolean }) => {
  return (
    <div className="home">
      <TextBox />
      <img
        src={theme ? imageDark : image}
        alt="hero-devices"
        className="hero"
      />
    </div>
  );
};

export default Home;

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import logo from "../images/logo-footer.svg";
import logoDark from "../images/logo-footer-dark.svg";
import reactIcon from "../images/React-icon.svg";
import reactIconDark from "../images/React-icon-dark.svg";

const Footer = (props: { theme: boolean }) => {
  return (
    <>
      <img
        src={!props.theme ? logo : logoDark}
        alt="logo"
        className="logo-footer"
      />
      <h5 className="quote">Learning & improving one step at a time.</h5>
      <div className="social">
        <a
          href="https://github.com/Cursed-Ninja"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <GitHubIcon sx={{ fontSize: "1.75rem" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/cursed-ninja/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <LinkedInIcon sx={{ fontSize: "1.75rem" }} />
        </a>
        <a
          href="mailto: shivam.sm2002@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <EmailIcon sx={{ fontSize: "1.75rem" }} />
        </a>
      </div>
      <div className="footer-text">
        <p>Created by me</p>
        <p>
          Made with
          <span>
            <img
              src={!props.theme ? reactIcon : reactIconDark}
              alt="react-icon"
              className="react-icon"
            />
            React
          </span>
        </p>
      </div>
    </>
  );
};

export default Footer;

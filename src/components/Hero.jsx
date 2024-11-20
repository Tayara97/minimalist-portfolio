import Header from "./Header.jsx/";
import linkedin_light from "../assets/linkedin-light.svg";
import linkedin_dark from "../assets/linkedin-dark.svg";
import github_light from "../assets/github-light.svg";
import github_dark from "../assets/github-dark.svg";
import avatar from "../assets/cartoon me.png";
import sun_icon from "../assets/sun.svg";
import moon_icon from "../assets/moon.svg";
import cv from "../assets/AbdelrahmanMohamedT.pdf";

const Hero = ({ setTheme, theme }) => {
  const handleClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);
  };
  return (
    <section className="hero">
      <div className="info">
        <Header>Abdelrahman mohamed</Header>
        <h2>FRONTEND DEVELOPER</h2>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/abdelrahmanmohamed"
            target="_blank"
            aria-label="LinkedIn Profile"
          >
            <img
              src={theme === "light" ? linkedin_light : linkedin_dark}
              alt="linkedIn icon"
            />
          </a>
          <a
            href="https://github.com/Tayara97/"
            target="_blank"
            aria-label="Github Profile"
          >
            <img
              src={theme === "light" ? github_light : github_dark}
              alt="github icon"
            />
          </a>
        </div>
        <p>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <button className={theme === "light" ? "btn" : "btn dark"}>
          <a href={cv} download>
            Resume
          </a>
        </button>
      </div>
      <div className="avatar">
        <img className="avatar-img" src={avatar} alt="avatar" />
        <img
          src={theme === "light" ? sun_icon : moon_icon}
          className="toggle-mode"
          alt="lighting icon"
          onClick={handleClick}
        />
      </div>
    </section>
  );
};

export default Hero;

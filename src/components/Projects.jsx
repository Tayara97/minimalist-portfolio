import Card from "./Card.jsx";
import Header from "./Header.jsx";
import splitter_logo from "../assets/eat&split.jpg";
import calculator_logo from "../assets/calc.jpg";
import tenzies_logo from "../assets/tenzies.jpeg";
const Projects = () => {
  return (
    <section>
      <Header>Projects</Header>
      <div className="projects">
        <Card
          img={splitter_logo}
          link={"https://github.com/Tayara97/eat-n-split"}
          discription={"Split Bill App"}
        >
          Eat&Split
        </Card>
        <Card
          img={tenzies_logo}
          link={"https://github.com/Tayara97/tenzies-game"}
          discription={"Tenzies Game "}
        >
          Roll the Dice
        </Card>

        <Card
          img={calculator_logo}
          link={"https://github.com/Tayara97/calculator-app"}
          discription={"Colorful Calculator "}
        >
          Calculator
        </Card>
      </div>
    </section>
  );
};

export default Projects;

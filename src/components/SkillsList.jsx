import Skill from "./Skill.jsx";
import Header from "./Header.jsx";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
  "React",
  "Problem solving",
  "Node",
];
const SkillsList = ({ theme }) => {
  return (
    <>
      <Header>Skills</Header>
      <section className="skills_container">
        {skills.map((skill, index) => {
          return (
            <Skill key={index} theme={theme}>
              {skill}
            </Skill>
          );
        })}
      </section>
    </>
  );
};

export default SkillsList;

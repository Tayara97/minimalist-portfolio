import React from "react";
import checkmark_Light from "../assets/checkmark-light.svg";
import checkmark_dark from "../assets/checkmark-dark.svg";

const Skill = ({ children, theme }) => {
  return (
    <div className="skill">
      <img
        src={theme === "light" ? checkmark_Light : checkmark_dark}
        alt="checkmark"
        style={{ width: "20px" }}
      />
      <span>{children}</span>
    </div>
  );
};

export default Skill;

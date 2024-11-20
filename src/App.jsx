import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import SkillsList from "./components/SkillsList.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";
import { useEffect, useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    const storedData = localStorage.getItem("theme");
    if (storedData) {
      setTheme(storedData);
    }
  }, [theme]);

  return (
    <div className="container">
      <Hero setTheme={setTheme} theme={theme} />
      <Projects />
      <SkillsList theme={theme} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;

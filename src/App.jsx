import Header from "./components/Header";
import Education from "./components/Education";
import Competence from "./components/Competence";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Projects1 from "./components/Projects1";
import Projets2 from "./components/Projects2";
import Projets3 from "./components/Projects3";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Education />
      <Competence />
      <Projects />
      <Projects1 />
      <Projets2 />
      <Projets3 />
      <Contact />
    </div>
  );
}

export default App;

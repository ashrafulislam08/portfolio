import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="container  mx-auto">
      <Header />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;

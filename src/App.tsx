import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import Pricing from "./components/Pricing";
import './styles/variables.css';
import './styles/global.css';

const App: React.FC = () => {

  return (
    <section className="page">
      <div className="theme-toggle-btn">
        <ThemeToggle />
      </div>
      <Pricing />
    </section>
  );
};

export default App;

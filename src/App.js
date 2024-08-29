import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import People from "./components/People";
import ResearchTracks from "./components/ResearchTracks";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <People />
      <ResearchTracks />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

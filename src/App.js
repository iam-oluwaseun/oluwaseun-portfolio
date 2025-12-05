import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import DevOpsJourney from './components/DevOpsJourney';
import Projects from './components/Projects';
import PipelineDiagram from './components/PipelineDiagram';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <DevOpsJourney />
      <Projects />
      <PipelineDiagram />
      <Contact />
    </div>
  );
}

export default App;

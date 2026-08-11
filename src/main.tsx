import React from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Infrastructure } from "./components/Infrastructure";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Certifications } from "./components/Certifications";
import { GitHubSection } from "./components/GitHubSection";
import { Learning, Services } from "./components/Growth";
import { Contact, Footer } from "./components/Contact";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Infrastructure />
      <Projects />
      <Experience />
      <Certifications />
      <GitHubSection />
      <Learning />
      <Services />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
import { Suspense, lazy } from "react";
import { useReveal } from "./hooks/useReveal";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Career from "./components/Career";
import Projects from "./components/Projects";
import Lectures from "./components/Lectures";
import Education from "./components/Education";
import Footer from "./components/Footer";

// 3D 배경(three.js)은 지연 로딩 → 초기 페인트가 무거운 번들을 기다리지 않음
const Background3D = lazy(() => import("./components/Background3D"));

export default function App() {
  useReveal();
  return (
    <>
      <Suspense fallback={null}>
        <Background3D />
      </Suspense>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Career />
        <Projects />
        <Lectures />
        <Education />
      </main>
      <Footer />
    </>
  );
}

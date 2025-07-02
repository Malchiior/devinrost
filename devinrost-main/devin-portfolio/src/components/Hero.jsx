import React from "react";
import "./Hero.css"; // We’ll create this next

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hey, I'm Devin 👋</h1>
        <p>I build websites, automate tasks, and love tech.</p>
        <a href="#projects" className="hero-btn">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;

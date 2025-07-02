// src/componets/AboutMe.jsx

import React from "react";

const AboutMe = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-12 lg:px-32" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-blue-500 w-fit">About Me</h2>
        <p className="text-lg leading-7 mb-4">
          Hi, I’m <strong>Devin Rost</strong>, a junior at Dakota State University pursuing a
          Bachelor’s in Artificial Intelligence in Organizations.
        </p>
        <p className="text-lg leading-7 mb-4">
          I’m a self-taught developer and entrepreneur with a passion for building websites, software,
          and automation tools that solve real business problems. Whether it’s streamlining processes
          with AI or crafting tailored digital experiences, I love making ideas come to life.
        </p>
        <p className="text-lg leading-7 mb-4">
          I specialize in <strong>web development</strong>, <strong>React</strong>, <strong>Python scripting</strong>, 
          <strong> AI tools</strong>, <strong>video and music generation</strong>, and <strong>networking</strong>.
          I’m always exploring new tech, thinking outside the box, and finding ways to automate and elevate.
        </p>
        <p className="text-lg leading-7 mb-4">
          I’m currently working on personal projects while advancing my studies in artificial intelligence
          and organizational systems.
        </p>
        <p className="text-lg leading-7 mb-4">
          🚀 My long-term goal is to <strong>work for a tech business that helps companies automate and thrive using AI and modern tools</strong>.
        </p>
        <p className="text-lg leading-7 mb-4">
          What sets me apart? I combine hands-on business experience with a deep understanding of technology
          and marketing — making me a powerful, creative problem-solver.
        </p>
        <p className="text-lg leading-7">
          ⚡ Fun fact: I love <strong>racing RC cars</strong>, <strong>cooking butter chicken</strong>,
          and <strong>building things from scratch</strong>.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "AI Call Translator",
      description: "A real-time AI-powered web app that translates phone calls into different languages using advanced voice-to-text and language models.",
      link: "https://your-aicall-translator-link.com", // replace with actual link
      type: "website",
    },
    {
      title: "AI Spotify Station",
      description: "A music station made up of 3 albums I created using AI tools: Album art, lyrics, vocals, and instrumentals. Distributed to 15+ platforms.",
      link: "https://open.spotify.com/artist/7eUbqfSOFQ0gcV3Va3xalV?utm_source=generator",
      type: "spotify",
    },
    {
      title: "Taylor Swift Eras Tour Promo",
      description: "Promo short using MidJourney and Kling AI to transform celebrities into spirit animals. Scripted with custom GPT, edited and posted to YouTube.",
      link: "https://www.youtube.com/embed/z_Zt_KRs9pw",
      type: "youtube",
    },
    {
      title: "RFK Jr Voice Over Enhancement",
      description: "Used Eleven Labs to enhance RFK Jr’s voice, improving clarity while preserving his unique tone. Great for podcasts or ads.",
      link: "https://www.youtube.com/embed/2DUDNINJZEg",
      type: "youtube",
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        Featured Projects
      </h2>
      <div className="grid gap-10 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;

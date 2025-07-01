import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" style={{ padding: "2rem" }}>
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

      {/* Spotify Project */}
      <ProjectCard
        title="AI Spotify Station"
        description="A music station I created using AI tools."
        spotifyEmbed="https://open.spotify.com/embed/artist/7eUbqfSOFQ0gcV3Va3xalV?utm_source=generator"
        style={{ maxWidth: "700px", margin: "auto" }}
      />

      {/* Taylor Swift Promo */}
      <ProjectCard
        title="Taylor Swift Eras Tour Promo"
        description="A promotional short I created the video using images from mid journey and used a custom gpt to create prompts for klingai to transform celebrities into spirit animals. Eited and posted to YouTube."
        youtubeUrl="https://www.youtube.com/embed/z_Zt_KRs9pw"
        style={{ maxWidth: "700px", margin: "auto" }}
      />

      {/* RFK Jr AI Voice Project */}
      <ProjectCard
        title="RFK Jr Voice Over with Eleven Labs"
        description="I used Eleven Labs to enhance RFK Jr's voice for better clarity and engagement."
        youtubeUrl="https://www.youtube.com/embed/2DUDNINJZEg"
        style={{ maxWidth: "700px", margin: "auto" }}
      />
    </section>
  );
}

export default Projects;

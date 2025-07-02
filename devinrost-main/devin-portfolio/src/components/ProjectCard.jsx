import React from "react";

const ProjectCard = ({
  title,
  description,
  spotifyEmbed,
  youtubeUrl,
  videoSrc,
  link,
  style = {},
}) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 mb-6"
      style={style}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>

      {spotifyEmbed && (
        <div className="mb-4">
          <iframe
            src={spotifyEmbed}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Player"
          ></iframe>
        </div>
      )}

      {youtubeUrl && (
        <div className="mb-4">
          <iframe
            className="w-full h-64"
            src={youtubeUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {videoSrc && (
        <div className="mb-4">
          <video className="w-full" controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View Project
        </a>
      )}
    </div>
  );
};

export default ProjectCard;

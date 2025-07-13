import React from "react";

function ProjectCard({ title, description, link, type }) {
  const renderMedia = () => {
    switch (type) {
      case "spotify":
        return <iframe className="w-full h-80" src={link} allow="encrypted-media" />;
      case "youtube":
        return <iframe className="w-full h-80" src={link} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />;
      case "website":
        return (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            View Live Project
          </a>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {renderMedia()}
    </div>
  );
}

export default ProjectCard;

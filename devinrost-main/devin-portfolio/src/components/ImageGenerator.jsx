import React, { useState } from "react";

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    setLoading(true);
    setImageUrl(null);

    try {
      const response = await fetch("https://api.replicate.com/v1/predictions", {
        method: "POST",
        headers: {
          "Authorization": "Token YOUR_REPLICATE_API_TOKEN",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          version: "db21e45e52e84e60aa0c2b2df18cf4e4b8e96cfc0298a54d1dd509b3f9b3d82e", // Stable Diffusion
          input: { prompt }
        })
      });

      const prediction = await response.json();
      const statusUrl = prediction.urls.get;

      let result;
      while (!result || result.status === "starting" || result.status === "processing") {
        const res = await fetch(statusUrl, {
          headers: { "Authorization": "Token YOUR_REPLICATE_API_TOKEN" }
        });
        result = await res.json();
        await new Promise(r => setTimeout(r, 1000));
      }

      setImageUrl(result.output[0]);
    } catch (err) {
      console.error("Image generation failed:", err);
      alert("Error generating image. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section style={{ padding: "2rem" }}>
      <h2>AI Image Generator</h2>
      <input
        type="text"
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        placeholder="Enter your image prompt"
        style={{ padding: "0.5rem", width: "100%", maxWidth: "600px" }}
      />
      <button onClick={generateImage} style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
        Generate
      </button>
      {loading && <p>Generating image...</p>}
      {imageUrl && <img src={imageUrl} alt="Generated" style={{ marginTop: "1rem", maxWidth: "100%" }} />}
    </section>
  );
};

export default ImageGenerator;

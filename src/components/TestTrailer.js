import React, { useState } from "react";

const TestTrailer = () => {
  const [url, setURL] = useState("");

  const isValidYouTubeURL = (url) =>
    /(?:youtube\.com.*[?&]v=|youtu\.be\/)([^&\n?#]+)/.test(url);

  const getEmbedURL = (url) => {
    const match = url.match(/(?:youtube\.com.*[?&]v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : "";
  };

  return (
    <div className="container mt-4 text-white bg-dark p-4">
      <input
        className="form-control"
        type="text"
        placeholder="YouTube URL"
        value={url}
        onChange={(e) => setURL(e.target.value)}
      />
      <div className="mt-3">
        {isValidYouTubeURL(url) ? (
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              src={getEmbedURL(url)}
              title="Trailer"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            ></iframe>
          </div>
        ) : (
          <p className="text-warning">URL YouTube non valide</p>
        )}
      </div>
    </div>
  );
};

export default TestTrailer;

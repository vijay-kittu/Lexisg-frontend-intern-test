import React from "react";

export default function Citation({ citation, onClick }) {
  return (
    <div className="chat-citation">
      <span className="citation-label">Source: </span>
      <button className="citation-link" onClick={onClick}>
        {citation.source}
      </button>
      <div className="citation-text">{citation.text}</div>
    </div>
  );
}

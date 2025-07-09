import React from "react";
import Citation from "./Citation";

export default function ChatMessage({ message, onCitationClick }) {
  return (
    <div className="qa-pair">
      <div className="user-bubble">{message.query}</div>
      <div className="assistant-bubble">
        <div>{message.answer}</div>
        {message.citations && message.citations.length > 0 && (
          <div className="citations">
            {message.citations.map((citation, idx) => (
              <Citation
                key={idx}
                citation={citation}
                onClick={() => onCitationClick(citation)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

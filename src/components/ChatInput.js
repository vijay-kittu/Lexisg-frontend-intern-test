import React, { useState } from "react";

export default function ChatInput({ onSubmit, loading }) {
  const [value, setValue] = useState("");
  return (
    <form
      className="chat-input"
      onSubmit={(e) => {
        e.preventDefault();
        if (!value.trim()) return;
        onSubmit(value);
        setValue("");
      }}
    >
      <textarea
        className="chat-textarea"
        rows={2}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ask a legal question..."
        disabled={loading}
      />
      <button className="chat-submit" disabled={loading} type="submit">
        {loading ? "..." : "➤"}
      </button>
    </form>
  );
}

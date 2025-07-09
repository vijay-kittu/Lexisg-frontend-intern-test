import React, { useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatMessage from "./components/ChatMessage";
import PdfModal from "./components/PdfModal";
import "./App.css";

const SIMULATED_RESPONSE = {
  answer:
    "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased's annual income should be added as future prospects.",
  citations: [
    {
      text: "as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects. (Para 7 of the document)",
      source: "Dani_Devi_v_Pritam_Singh.pdf",
      link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
    },
  ],
};

function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pdfModal, setPdfModal] = useState({ open: false, citation: null });

  const handleSubmit = (query) => {
    setLoading(true);
    setTimeout(() => {
      setMessages([...messages, { query, ...SIMULATED_RESPONSE }]);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1 className="title">Lexi Legal Assistant</h1>
      </header>
      <main className="chat-area">
        {messages.map((msg, idx) => (
          <ChatMessage
            key={idx}
            message={msg}
            onCitationClick={(citation) =>
              setPdfModal({ open: true, citation })
            }
          />
        ))}
      </main>
      <footer className="input-footer">
        <ChatInput onSubmit={handleSubmit} loading={loading} />
      </footer>
      {pdfModal.open && (
        <PdfModal
          onClose={() => setPdfModal({ open: false, citation: null })}
        />
      )}
    </div>
  );
}

export default App;

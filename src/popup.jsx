import React from "react";
import ReactDOM from "react-dom/client";

function LegacyPopup() {
  return <div>Legacy Popup (not in use)</div>;
}

ReactDOM.createRoot(document.body).render(
  <React.StrictMode>
    <LegacyPopup />
  </React.StrictMode>
); 
import React, { useState } from 'react';
import './Popup.css';

const highlightColors = [
  { color: '#fff34d', name: 'Yellow' },
  { color: '#f7b6b6', name: 'Red' },
  { color: '#c6e7c1', name: 'Green' },
  { color: '#cbe3fa', name: 'Blue' },
  { color: '#e2c6f7', name: 'Purple' },
];

const toolList = [
  { id: 'dyslexia', label: 'Dyslexia Fonts' },
  { id: 'lineFocus', label: 'Line Focus' },
  { id: 'textSpacing', label: 'Text Spacing' },
];

const modeList = [
  { id: 'sepia', label: 'Sepia' },
  { id: 'dark', label: 'Dark' },
  { id: 'contrast', label: 'Contrast' },
];

function sendToContentScript(message) {
  if (window.chrome && chrome.tabs) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        chrome.tabs.sendMessage(tabs[0].id, message);
      }
    });
  }
}

export default function Popup() {
  const [search, setSearch] = useState('');
  const [toggles, setToggles] = useState({ dyslexia: false, lineFocus: false, textSpacing: false });
  const [modes, setModes] = useState({ sepia: false, dark: false, contrast: false });
  const [selectedColor, setSelectedColor] = useState(highlightColors[0].color);

  // Handle toggles
  const handleToggle = (id) => {
    const newToggles = { ...toggles, [id]: !toggles[id] };
    setToggles(newToggles);
    if (id === 'dyslexia') {
      sendToContentScript({ type: 'TOGGLE_DYSLEXIA_FONT', enabled: !toggles[id] });
    }
  };
  const handleMode = (id) => setModes({ ...modes, [id]: !modes[id] });

  // Handle highlight save
  const handleSaveHighlight = () => {
    sendToContentScript({ type: 'HIGHLIGHT_SELECTION', color: selectedColor });
  };

  // Filter tools by search
  const filteredTools = toolList.filter(t => t.label.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className={`beacon-business-popup${modes.dark ? ' dark' : ''}`}> 
      <header className="bbp-header">
        <span className="bbp-title">Beacon Tools</span>
        <button className="bbp-settings" title="Settings">⚙️</button>
      </header>
      <div className="bbp-searchbar">
        <input
          type="text"
          placeholder="Search tools..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
          </div>
      <div className="bbp-list-section">
        {filteredTools.map(tool => (
          <label className="bbp-list-row fade-in" key={tool.id}>
            <input
              type="checkbox"
              checked={toggles[tool.id]}
              onChange={() => handleToggle(tool.id)}
            />
            <span>{tool.label}</span>
          </label>
        ))}
        </div>
      <div className="bbp-list-section fade-in">
        <div className="bbp-list-row">
          <span>Highlight Color:</span>
          <select
            className="bbp-dropdown"
            value={selectedColor}
            onChange={e => setSelectedColor(e.target.value)}
          >
            {highlightColors.map(c => (
              <option key={c.color} value={c.color}>{c.name}</option>
            ))}
          </select>
        </div>
        <button className="bbp-save-btn" onClick={handleSaveHighlight}>Save Highlight</button>
      </div>
      <div className="bbp-list-section fade-in">
        {modeList.map(mode => (
          <label className="bbp-list-row" key={mode.id}>
            <span>{mode.label}</span>
            <input
              type="checkbox"
              className="bbp-switch"
              checked={modes[mode.id]}
              onChange={() => handleMode(mode.id)}
            />
          </label>
        ))}
          </div>
      <div className="bbp-list-section fade-in">
        <button className="bbp-action-btn">Text-to-Speech</button>
        <button className="bbp-action-btn">Layout & Font</button>
      </div>
      {/* Saved highlights section removed, as highlights are now on the page */}
    </div>
  );
}

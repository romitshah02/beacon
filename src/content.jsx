import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

// Create a container for the overlay
const container = document.createElement("div");
container.id = "beacon-overlay-root";
container.style.position = "fixed";
container.style.top = "80px";
container.style.right = "40px";
container.style.zIndex = 999999;
container.style.background = "rgba(255, 255, 255, 0.95)";
container.style.borderRadius = "16px";
container.style.boxShadow = "0 4px 24px rgba(0,0,0,0.12)";
container.style.padding = "16px";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.gap = "12px";
container.style.minWidth = "200px";
container.style.fontFamily = "inherit";

// Prevent duplicate overlays
if (!document.getElementById("beacon-overlay-root")) {
  document.body.appendChild(container);
}

// --- Enhanced Highlight Function ---
function highlightSelection(color = "#ffeb3b") {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) {
    alert("Select some text to highlight.");
    return;
  }
  const range = selection.getRangeAt(0);
  if (!range || range.toString().trim().length === 0) {
    alert("Select some text to highlight.");
    return;
  }

  // Helper: recursively highlight all text nodes in the range
  function highlightRange(range, highlightColor) {
    const walker = document.createTreeWalker(
      range.commonAncestorContainer,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          // Only highlight text nodes that are within the selection
          const nodeRange = document.createRange();
          nodeRange.selectNodeContents(node);
          return range.intersectsNode(node) && node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      }
    );
    let node;
    const highlights = [];
    while ((node = walker.nextNode())) {
      // Calculate the part of the node that is selected
      let start = 0, end = node.nodeValue.length;
      if (node === range.startContainer) start = range.startOffset;
      if (node === range.endContainer) end = range.endOffset;
      if (start !== end) {
        const before = node.nodeValue.slice(0, start);
        const selected = node.nodeValue.slice(start, end);
        const after = node.nodeValue.slice(end);
        const span = document.createElement("span");
        span.style.background = highlightColor;
        span.style.borderRadius = "3px";
        span.style.padding = "0 2px";
        span.style.boxShadow = "0 1px 2px rgba(0,0,0,0.04)";
        span.className = "beacon-highlight";
        span.setAttribute("data-highlight-color", highlightColor);
        span.textContent = selected;
        // Replace the text node with before + span + after
        const parent = node.parentNode;
        const frag = document.createDocumentFragment();
        if (before) frag.appendChild(document.createTextNode(before));
        frag.appendChild(span);
        if (after) frag.appendChild(document.createTextNode(after));
        parent.replaceChild(frag, node);
        highlights.push(span);
      }
    }
    return highlights;
  }

  highlightRange(range, color);
  selection.removeAllRanges();
}

// --- Enhanced Dyslexia Font Functions ---
const dyslexiaFonts = {
  "OpenDyslexic": "https://fonts.googleapis.com/css2?family=OpenDyslexic:wght@400;700&display=swap",
  "Lexend": "https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap",
  "ComicNeue": "https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300;400;700&display=swap",
  "Atkinson": "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap",
  "Verdana": null, // system font
  "LexieReadable": "https://cdn.jsdelivr.net/gh/robertjliguori/lexie-readable-font/webfonts/lexie-readable.css"
};

const dyslexiaFontDescriptions = {
  "OpenDyslexic": "Weighted bottoms to prevent letter swapping.",
  "Lexend": "Wide, simple shapes for easier reading.",
  "ComicNeue": "Informal, clear, and friendly.",
  "Atkinson": "Highly legible, designed for clarity.",
  "Verdana": "Ample letter spacing for clear differentiation.",
  "LexieReadable": "Simple serifs for improved comprehension."
};

const dyslexiaFontPreviews = {
  "OpenDyslexic": "The quick brown fox jumps over the lazy dog.",
  "Lexend": "The quick brown fox jumps over the lazy dog.",
  "ComicNeue": "The quick brown fox jumps over the lazy dog.",
  "Atkinson": "The quick brown fox jumps over the lazy dog.",
  "Verdana": "The quick brown fox jumps over the lazy dog.",
  "LexieReadable": "The quick brown fox jumps over the lazy dog."
};

const openDyslexicFontFace = `@font-face {
  font-family: 'OpenDyslexic';
  src: url('https://cdn.jsdelivr.net/gh/antijingoist/open-dyslexic/alternatives/OpenDyslexic-Regular.otf') format('opentype'),
       url('https://cdn.jsdelivr.net/gh/antijingoist/open-dyslexic/alternatives/OpenDyslexic-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'OpenDyslexic';
  src: url('https://cdn.jsdelivr.net/gh/antijingoist/open-dyslexic/alternatives/OpenDyslexic-Bold.otf') format('opentype'),
       url('https://cdn.jsdelivr.net/gh/antijingoist/open-dyslexic/alternatives/OpenDyslexic-Bold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
}`;

// Inject OpenDyslexic font using Base64 data
function injectOpenDyslexicFont() {
  if (!document.getElementById('beacon-opendyslexic-global')) {
    const style = document.createElement('style');
    style.id = 'beacon-opendyslexic-global';
    style.textContent = `
      @font-face {
        font-family: 'OpenDyslexic';
        src: url('data:font/woff;base64,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') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
      html, body, * { font-family: 'OpenDyslexic', Arial, sans-serif !important; }
    `;
    document.head.appendChild(style);
  }
}

function removeOpenDyslexicFont() {
  const style = document.getElementById('beacon-opendyslexic-global');
  if (style) style.remove();
}

function enableDyslexiaFont(fontName) {
  if (fontName === "OpenDyslexic") {
    injectOpenDyslexicFont();
    return;
  }
  removeOpenDyslexicFont();
  if (fontName === "LexieReadable") {
    if (!document.getElementById(`beacon-font-LexieReadable`)) {
      const link = document.createElement("link");
      link.id = `beacon-font-LexieReadable`;
      link.rel = "stylesheet";
      link.href = dyslexiaFonts["LexieReadable"];
      document.head.appendChild(link);
    }
    document.body.style.fontFamily = "'LexieReadable', Arial, sans-serif";
    return;
  }
  if (!document.getElementById(`beacon-font-${fontName}`) && dyslexiaFonts[fontName]) {
    const link = document.createElement("link");
    link.id = `beacon-font-${fontName}`;
    link.rel = "stylesheet";
    link.href = dyslexiaFonts[fontName];
    document.head.appendChild(link);
  }
  const fontFamily = {
    "OpenDyslexic": "'OpenDyslexic', Arial, sans-serif",
    "Lexend": "'Lexend', Arial, sans-serif",
    "ComicNeue": "'Comic Neue', Arial, sans-serif",
    "Atkinson": "'Atkinson Hyperlegible', Arial, sans-serif",
    "Verdana": "Verdana, Arial, sans-serif",
    "LexieReadable": "'LexieReadable', Arial, sans-serif"
  };
  document.body.style.fontFamily = fontFamily[fontName];
}

function disableDyslexiaFont() {
  removeOpenDyslexicFont();
  document.body.style.fontFamily = "";
}

// --- Enhanced Translation Function ---
function translateSelection(targetLang = "en") {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) {
    alert("Select some text to translate.");
    return;
  }
  const text = selection.toString().trim();
  if (!text) {
    alert("Select some text to translate.");
    return;
  }
  
  // Use Google Translate API (free tier)
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const translation = data[0][0][0];
      const detectedLang = data[2];
      
      // Create a better translation display
      const translationDiv = document.createElement("div");
      translationDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        border: 2px solid #007bff;
        border-radius: 12px;
        padding: 20px;
        max-width: 400px;
        max-height: 300px;
        overflow-y: auto;
        z-index: 1000000;
        box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        font-family: Arial, sans-serif;
      `;
      
      translationDiv.innerHTML = `
        <div style="margin-bottom: 15px;">
          <strong>Original (${detectedLang}):</strong><br>
          <span style="color: #666;">${text}</span>
        </div>
        <div style="margin-bottom: 15px;">
          <strong>Translation (${targetLang}):</strong><br>
          <span style="color: #007bff; font-size: 16px;">${translation}</span>
        </div>
        <button onclick="this.parentElement.remove()" style="
          background: #007bff;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
        ">Close</button>
      `;
      
      document.body.appendChild(translationDiv);
    })
    .catch(error => {
      console.error('Translation error:', error);
      alert('Translation failed. Please try again.');
    });
}

// --- Enhanced Layout & Font Controls ---
let originalStyles = {
  fontSize: null,
  maxWidth: null,
  margin: null,
  padding: null,
  lineHeight: null
};

function enableLargeFont(size = "18px") {
  if (!originalStyles.fontSize) {
    originalStyles.fontSize = window.getComputedStyle(document.body).fontSize;
  }
  document.body.style.fontSize = size;
}

function disableLargeFont() {
  if (originalStyles.fontSize) {
    document.body.style.fontSize = originalStyles.fontSize;
  }
}

function enableNarrowLayout(width = "800px") {
  if (!originalStyles.maxWidth) {
    originalStyles.maxWidth = window.getComputedStyle(document.body).maxWidth;
    originalStyles.margin = window.getComputedStyle(document.body).margin;
    originalStyles.padding = window.getComputedStyle(document.body).padding;
  }
  document.body.style.maxWidth = width;
  document.body.style.margin = "0 auto";
  document.body.style.padding = "0 20px";
}

function disableNarrowLayout() {
  if (originalStyles.maxWidth) {
    document.body.style.maxWidth = originalStyles.maxWidth;
    document.body.style.margin = originalStyles.margin;
    document.body.style.padding = originalStyles.padding;
  }
}

function adjustLineHeight(height = "1.7") {
  if (!originalStyles.lineHeight) {
    originalStyles.lineHeight = window.getComputedStyle(document.body).lineHeight;
  }
  document.body.style.lineHeight = height;
}

function resetLineHeight() {
  if (originalStyles.lineHeight) {
    document.body.style.lineHeight = originalStyles.lineHeight;
  }
}

// --- Enhanced Saved Highlights ---
function saveHighlights() {
  const highlights = document.querySelectorAll('.beacon-highlight');
  const savedData = [];
  
  highlights.forEach(highlight => {
    const rect = highlight.getBoundingClientRect();
    savedData.push({
      text: highlight.textContent,
      color: highlight.getAttribute("data-highlight-color") || "#ffeb3b",
      pageUrl: window.location.href,
      pageTitle: document.title,
      timestamp: new Date().toISOString(),
      position: {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX
      }
    });
  });
  
  if (savedData.length === 0) {
    alert("No highlights to save.");
    return;
  }
  
  // Store in localStorage
  const existing = JSON.parse(localStorage.getItem('beacon-highlights') || '[]');
  const updated = [...existing, ...savedData];
  localStorage.setItem('beacon-highlights', JSON.stringify(updated));
  
  alert(`Saved ${savedData.length} highlight(s)!`);
}

function showSavedHighlights() {
  const saved = JSON.parse(localStorage.getItem('beacon-highlights') || '[]');
  if (saved.length === 0) {
    alert("No saved highlights found.");
    return;
  }
  
  const currentPageHighlights = saved.filter(h => h.pageUrl === window.location.href);
  if (currentPageHighlights.length === 0) {
    alert("No saved highlights for this page.");
    return;
  }
  
  // Create a better highlights display
  const highlightsDiv = document.createElement("div");
  highlightsDiv.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border: 2px solid #28a745;
    border-radius: 12px;
    padding: 20px;
    max-width: 500px;
    max-height: 400px;
    overflow-y: auto;
    z-index: 1000000;
    box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    font-family: Arial, sans-serif;
  `;
  
  const highlightsList = currentPageHighlights.map(h => 
    `<div style="margin-bottom: 10px; padding: 8px; border-left: 4px solid ${h.color}; background: #f8f9fa;">
      <div style="font-weight: bold;">"${h.text}"</div>
      <div style="font-size: 12px; color: #666;">${new Date(h.timestamp).toLocaleDateString()}</div>
    </div>`
  ).join('');
  
  highlightsDiv.innerHTML = `
    <h3 style="margin-top: 0;">Saved Highlights (${currentPageHighlights.length})</h3>
    ${highlightsList}
    <div style="margin-top: 15px;">
      <button onclick="this.parentElement.parentElement.remove()" style="
        background: #28a745;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 6px;
        cursor: pointer;
        margin-right: 10px;
      ">Close</button>
      <button onclick="exportHighlights()" style="
        background: #17a2b8;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 6px;
        cursor: pointer;
      ">Export All</button>
    </div>
  `;
  
  document.body.appendChild(highlightsDiv);
}

function exportHighlights() {
  const saved = JSON.parse(localStorage.getItem('beacon-highlights') || '[]');
  if (saved.length === 0) {
    alert("No highlights to export.");
    return;
  }
  
  const dataStr = JSON.stringify(saved, null, 2);
  const dataBlob = new Blob([dataStr], {type: 'application/json'});
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `beacon-highlights-${new Date().toISOString().split('T')[0]}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

// --- Reading Tool Functions (unchanged) ---

// Line Focus
let lineFocusHandler = null;
function enableLineFocus() {
  if (document.getElementById("beacon-line-focus")) return;
  const focusDiv = document.createElement("div");
  focusDiv.id = "beacon-line-focus";
  focusDiv.style.position = "absolute";
  focusDiv.style.pointerEvents = "none";
  focusDiv.style.background = "rgba(255,255,0,0.18)";
  focusDiv.style.zIndex = 999998;
  focusDiv.style.transition = "all 0.1s";
  document.body.appendChild(focusDiv);
  lineFocusHandler = (e) => {
    const el = document.elementFromPoint(e.clientX, e.clientY);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    focusDiv.style.top = `${window.scrollY + rect.top}px`;
    focusDiv.style.left = `${window.scrollX + rect.left}px`;
    focusDiv.style.width = `${rect.width}px`;
    focusDiv.style.height = `${rect.height}px`;
    focusDiv.style.display = "block";
  };
  document.addEventListener("mousemove", lineFocusHandler);
}
function disableLineFocus() {
  const focusDiv = document.getElementById("beacon-line-focus");
  if (focusDiv) focusDiv.remove();
  if (lineFocusHandler) document.removeEventListener("mousemove", lineFocusHandler);
}

// Text Spacing
function enableTextSpacing() {
  document.body.style.letterSpacing = "0.12em";
  document.body.style.wordSpacing = "0.24em";
  document.body.style.lineHeight = "1.7";
}
function disableTextSpacing() {
  document.body.style.letterSpacing = "";
  document.body.style.wordSpacing = "";
  document.body.style.lineHeight = "";
}

// Color Themes
function enableColorTheme(theme) {
  if (theme === "sepia") {
    document.body.style.background = "#f4ecd8";
    document.body.style.color = "#5b4636";
  } else if (theme === "dark") {
    document.body.style.background = "#181a1b";
    document.body.style.color = "#f5f6fa";
  } else if (theme === "high-contrast") {
    document.body.style.background = "#fff";
    document.body.style.color = "#000";
  }
}
function disableColorTheme() {
  document.body.style.background = "";
  document.body.style.color = "";
}

// Text-to-Speech
let speechSynthesis = window.speechSynthesis;
let currentUtterance = null;

function speakSelection() {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) {
    alert("Select some text to read aloud.");
    return;
  }
  const text = selection.toString().trim();
  if (!text) {
    alert("Select some text to read aloud.");
    return;
  }
  
  // Stop any current speech
  if (currentUtterance) {
    speechSynthesis.cancel();
  }
  
  currentUtterance = new SpeechSynthesisUtterance(text);
  currentUtterance.rate = 0.9;
  currentUtterance.pitch = 1;
  currentUtterance.volume = 1;
  
  speechSynthesis.speak(currentUtterance);
}

function stopSpeech() {
  if (speechSynthesis) {
    speechSynthesis.cancel();
    currentUtterance = null;
  }
}

function OverlayMenu() {
  const [dyslexia, setDyslexia] = useState("");
  const [lineFocus, setLineFocus] = useState(false);
  const [spacing, setSpacing] = useState(false);
  const [theme, setTheme] = useState("");
  const [largeFont, setLargeFont] = useState("");
  const [narrowLayout, setNarrowLayout] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [highlightColor, setHighlightColor] = useState("#ffeb3b");
  const [letterSpacing, setLetterSpacing] = useState(0.12);
  const [lineHeight, setLineHeight] = useState(1.7);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showFontModal, setShowFontModal] = useState(false);
  const [showLayoutModal, setShowLayoutModal] = useState(false);
  const [showTranslateModal, setShowTranslateModal] = useState(false);
  const [selectedText, setSelectedText] = useState("");
  const [showSaveHighlight, setShowSaveHighlight] = useState(false);
  const [translationResult, setTranslationResult] = useState("");
  const [hasUnsavedHighlight, setHasUnsavedHighlight] = useState(false);

  // Listen for selection changes
  useEffect(() => {
    const handleSelectionChange = () => {
      const sel = window.getSelection();
      setSelectedText(sel && !sel.isCollapsed ? sel.toString() : "");
    };
    document.addEventListener('selectionchange', handleSelectionChange);
    return () => document.removeEventListener('selectionchange', handleSelectionChange);
  }, []);

  // Toggle handlers
  const handleDyslexia = (fontName) => {
    if (dyslexia === fontName) {
      disableDyslexiaFont();
      setDyslexia("");
    } else {
      enableDyslexiaFont(fontName);
      setDyslexia(fontName);
    }
  };
  
  const handleLineFocus = () => {
    if (!lineFocus) enableLineFocus();
    else disableLineFocus();
    setLineFocus(!lineFocus);
  };
  
  const handleSpacing = () => {
    if (!spacing) enableTextSpacing();
    else disableTextSpacing();
    setSpacing(!spacing);
  };
  
  const handleTheme = (t) => {
    if (theme === t) {
      disableColorTheme();
      setTheme("");
    } else {
      enableColorTheme(t);
      setTheme(t);
    }
  };
  
  const handleLargeFont = (size) => {
    if (largeFont === size) {
      disableLargeFont();
      setLargeFont("");
    } else {
      enableLargeFont(size);
      setLargeFont(size);
    }
  };
  
  const handleNarrowLayout = (width) => {
    if (narrowLayout === width) {
      disableNarrowLayout();
      setNarrowLayout("");
    } else {
      enableNarrowLayout(width);
      setNarrowLayout(width);
    }
  };
  
  const handleTTS = () => {
    if (isSpeaking) {
      stopSpeech();
      setIsSpeaking(false);
    } else {
      speakSelection();
      setIsSpeaking(true);
      setTimeout(() => setIsSpeaking(false), 1000);
    }
  };

  const handleHighlight = () => {
    setTimeout(() => {
      highlightSelection(highlightColor);
      setShowSaveHighlight(true);
      setHasUnsavedHighlight(true);
    }, 100);
  };

  const handleSaveHighlight = () => {
    saveHighlights();
    setShowSaveHighlight(false);
    setHasUnsavedHighlight(false);
  };

  const handleLetterSpacing = (delta) => {
    const newSpacing = Math.max(0, Math.min(1, letterSpacing + delta));
    setLetterSpacing(newSpacing);
    document.body.style.letterSpacing = `${newSpacing}em`;
  };
  const handleLineHeight = (delta) => {
    const newHeight = Math.max(1, Math.min(3, lineHeight + delta));
    setLineHeight(newHeight);
    document.body.style.lineHeight = `${newHeight}`;
  };

  // Dyslexia font modal handler
  const handleFontModal = () => setShowFontModal(true);
  const closeFontModal = () => setShowFontModal(false);
  const handleFontPick = (font) => {
    handleDyslexia(font);
    closeFontModal();
  };

  // Layout modal handler
  const handleLayoutModal = () => setShowLayoutModal(true);
  const closeLayoutModal = () => setShowLayoutModal(false);

  // Translation modal handler
  const handleTranslateModal = () => setShowTranslateModal(true);
  const closeTranslateModal = () => setShowTranslateModal(false);
  const handleTranslatePick = (lang) => {
    if (!selectedText) return;
    // Use Google Translate API
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${lang}&dt=t&q=${encodeURIComponent(selectedText)}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const translation = data[0][0][0];
        setTranslationResult(translation);
      })
      .catch(() => setTranslationResult("Translation failed."));
    closeTranslateModal();
  };

  if (isMinimized) {
    return (
      <div style={{
        position: "fixed",
        top: 80,
        right: 40,
        zIndex: 999999,
        background: "#fff",
        borderRadius: "50%",
        boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
        width: 48,
        height: 48,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        border: "1px solid #eee"
      }}
        onClick={() => setIsMinimized(false)}
        title="Show Beacon Tools"
      >
        <span style={{fontSize: 24, color: "#007bff"}}>☰</span>
      </div>
    );
  }

  return (
    <div style={{
      minWidth: 280,
      maxWidth: 420,
      background: "#fff",
      borderRadius: 18,
      boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
      padding: 20,
      border: "1px solid #e0e0e0",
      fontFamily: "inherit",
      position: "relative"
    }}>
      {/* Header with Close/Minimize */}
      <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16}}>
        <h4 style={{margin: 0, fontWeight: 700, fontSize: 18, letterSpacing: 0.2}}>Beacon Tools</h4>
        <div style={{display: "flex", gap: 8}}>
          <button
            style={{
              background: "none",
              border: "none",
              fontSize: 20,
              cursor: "pointer",
              color: "#888",
              padding: 2,
              borderRadius: 4,
              transition: "background 0.2s"
            }}
            title="Minimize"
            onClick={() => setIsMinimized(true)}
          >
            –
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              fontSize: 20,
              cursor: "pointer",
              color: "#888",
              padding: 2,
              borderRadius: 4,
              transition: "background 0.2s"
            }}
            title="Close"
            onClick={() => {
              document.getElementById("beacon-overlay-root").remove();
            }}
          >
            ×
          </button>
        </div>
      </div>

      {/* Highlight Section with color picker */}
      <div style={{marginBottom: 12}}>
        <div style={{fontSize: 14, fontWeight: 500, marginBottom: 6}}>Highlight:</div>
        <div style={{display: "flex", gap: 4, marginBottom: 6}}>
          {["#ffeb3b", "#ffcdd2", "#c8e6c9", "#bbdefb", "#e1bee7"].map(color => (
            <button
              key={color}
              style={{...btnStyle, width: 24, height: 24, background: color, border: highlightColor === color ? "2px solid #333" : "1px solid #ddd"}}
              onClick={() => setHighlightColor(color)}
              title={`Highlight color: ${color}`}
            />
          ))}
        </div>
        {selectedText && <button style={btnStyle} onMouseDown={e => e.preventDefault()} onClick={handleHighlight}>Highlight Selection</button>}
        {(showSaveHighlight || hasUnsavedHighlight) && <button style={{...btnStyle, background: "#ffe082"}} onClick={handleSaveHighlight}>Save Highlight</button>}
      </div>

      {/* Dyslexia Font Picker */}
      <button style={btnStyle} onClick={handleFontModal}>Dyslexia Fonts</button>
      {showFontModal && (
        <div style={{position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.18)", zIndex: 1000001, display: "flex", alignItems: "center", justifyContent: "center"}}>
          <div style={{background: "#fff", borderRadius: 12, padding: 24, minWidth: 320, boxShadow: "0 8px 32px rgba(0,0,0,0.18)"}}>
            <h4 style={{marginTop: 0}}>Choose Dyslexia-Friendly Font</h4>
            {Object.keys(dyslexiaFonts).map(font => (
              <div key={font} style={{marginBottom: 12}}>
                <button style={{...btnStyle, background: dyslexia === font ? "#007bff" : "#f5f5f5", color: dyslexia === font ? "white" : "#222", fontSize: 13}} onClick={() => handleFontPick(font)}>{dyslexia === font ? "✓ " : ""}{font}</button>
                <div style={{fontSize: 12, color: "#555", marginTop: 2}}>{dyslexiaFontDescriptions[font]}</div>
                <div style={{fontFamily: font === "Verdana" ? "Verdana, Arial, sans-serif" : font === "LexieReadable" ? "'LexieReadable', Arial, sans-serif" : font, fontSize: 14, background: "#f8f8f8", padding: 4, borderRadius: 4, marginTop: 2}}>{dyslexiaFontPreviews[font]}</div>
              </div>
            ))}
            <button style={{...btnStyle, background: "#eee", color: "#333"}} onClick={closeFontModal}>Close</button>
          </div>
        </div>
      )}

      {/* Line Focus, Text Spacing, Color Themes */}
      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 10, marginBottom: 18}}>
        <button style={btnStyle} onClick={handleLineFocus}>{lineFocus ? "Disable" : "Enable"} Line Focus</button>
        <button style={btnStyle} onClick={handleSpacing}>{spacing ? "Disable" : "Enable"} Text Spacing</button>
        <button style={{...btnStyle, background: theme==="sepia"?"#ffe4b5":"#f5f5f5"}} onClick={() => handleTheme("sepia")}>Sepia</button>
        <button style={{...btnStyle, background: theme==="dark"?"#222":"#f5f5f5", color: theme==="dark"?"#fff":"#222"}} onClick={() => handleTheme("dark")}>Dark</button>
        <button style={{...btnStyle, background: theme==="high-contrast"?"#fff200":"#f5f5f5"}} onClick={() => handleTheme("high-contrast")}>Contrast</button>
      </div>

      {/* Translation Picker */}
      <button style={btnStyle} onClick={selectedText ? handleTranslateModal : undefined} disabled={!selectedText}>Translation</button>
      {showTranslateModal && (
        <div style={{position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.18)", zIndex: 1000001, display: "flex", alignItems: "center", justifyContent: "center"}}>
          <div style={{background: "#fff", borderRadius: 12, padding: 24, minWidth: 320, boxShadow: "0 8px 32px rgba(0,0,0,0.18)"}}>
            <h4 style={{marginTop: 0}}>Translate Selection</h4>
            {[
              {code: "en", label: "English"},
              {code: "es", label: "Spanish"},
              {code: "fr", label: "French"},
              {code: "de", label: "German"},
              {code: "hi", label: "Hindi"},
              {code: "zh-CN", label: "Chinese"},
              {code: "ar", label: "Arabic"},
              {code: "ru", label: "Russian"},
              {code: "ja", label: "Japanese"},
              {code: "ko", label: "Korean"}
            ].map(lang => (
              <button key={lang.code} style={{...btnStyle, marginBottom: 6}} onClick={() => handleTranslatePick(lang.code)}>{lang.label}</button>
            ))}
            <button style={{...btnStyle, background: "#eee", color: "#333"}} onClick={closeTranslateModal}>Close</button>
          </div>
        </div>
      )}

      {translationResult && (
        <div style={{position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.18)", zIndex: 1000002, display: "flex", alignItems: "center", justifyContent: "center"}}>
          <div style={{background: "#fff", borderRadius: 12, padding: 24, minWidth: 320, boxShadow: "0 8px 32px rgba(0,0,0,0.18)"}}>
            <h4 style={{marginTop: 0}}>Translation Result</h4>
            <div style={{fontSize: 16, marginBottom: 16}}>{translationResult}</div>
            <button style={{...btnStyle, background: "#eee", color: "#333"}} onClick={()=>setTranslationResult("")}>Close</button>
          </div>
        </div>
      )}

      {/* TTS, Layout & Font, Saved Highlights */}
      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 10, marginBottom: 18}}>
        <button style={btnStyle} onClick={handleTTS}>{isSpeaking ? "Stop" : "Text-to-Speech"}</button>
        <button style={btnStyle} onClick={handleLayoutModal}>Layout & Font</button>
        <button style={btnStyle} onClick={showSavedHighlights}>Saved Highlights</button>
      </div>

      {/* Layout & Font Modal */}
      {showLayoutModal && (
        <div style={{position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.18)", zIndex: 1000001, display: "flex", alignItems: "center", justifyContent: "center"}}>
          <div style={{background: "#fff", borderRadius: 12, padding: 24, minWidth: 320, boxShadow: "0 8px 32px rgba(0,0,0,0.18)"}}>
            <h4 style={{marginTop: 0}}>Layout & Font Options</h4>
            <div style={{marginBottom: 12}}>
              <div style={{fontSize: 14, fontWeight: 500, marginBottom: 6}}>Font Size:</div>
              {["16px", "18px", "20px", "24px"].map(size => (
                <button key={size} style={{...btnStyle, background: largeFont === size ? "#007bff" : "#f5f5f5", color: largeFont === size ? "white" : "#222", fontSize: 13}} onClick={() => handleLargeFont(size)}>{largeFont === size ? "✓ " : ""}{size}</button>
              ))}
            </div>
            <div style={{marginBottom: 12}}>
              <div style={{fontSize: 14, fontWeight: 500, marginBottom: 6}}>Layout Width:</div>
              {["800px", "1000px", "1200px"].map(width => (
                <button key={width} style={{...btnStyle, background: narrowLayout === width ? "#007bff" : "#f5f5f5", color: narrowLayout === width ? "white" : "#222", fontSize: 13}} onClick={() => handleNarrowLayout(width)}>{narrowLayout === width ? "✓ " : ""}{width}</button>
              ))}
            </div>
            <div style={{marginBottom: 12}}>
              <div style={{fontSize: 14, fontWeight: 500, marginBottom: 6}}>Line Height:</div>
              <button style={btnStyle} onClick={() => handleLineHeight(-0.1)}>-</button>
              <span style={{margin: "0 8px"}}>{lineHeight.toFixed(2)}</span>
              <button style={btnStyle} onClick={() => handleLineHeight(0.1)}>+</button>
            </div>
            <button style={{...btnStyle, background: "#eee", color: "#333"}} onClick={closeLayoutModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

const btnStyle = {
  padding: "8px 12px",
  border: "none",
  borderRadius: "8px",
  background: "#f5f5f5",
  marginBottom: "6px",
  fontSize: "15px",
  cursor: "pointer",
  boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
  transition: "background 0.2s",
};

createRoot(container).render(<OverlayMenu />); image.png
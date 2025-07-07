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

// Inject OpenDyslexic font stylesheet from jsDelivr
function injectOpenDyslexicFont() {
  if (!document.getElementById('beacon-opendyslexic-global')) {
    const style = document.createElement('style');
    style.id = 'beacon-opendyslexic-global';
    style.textContent = `
      @font-face {
        font-family: 'OpenDyslexic';
        src: url('/fonts/opendyslexic/OpenDyslexic-Regular.woff2') format('woff2'),
             url('/fonts/opendyslexic/OpenDyslexic-Regular.woff') format('woff'),
             url('/fonts/opendyslexic/OpenDyslexic-Regular.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: 'OpenDyslexic';
        src: url('/fonts/opendyslexic/OpenDyslexic-Bold.woff2') format('woff2'),
             url('/fonts/opendyslexic/OpenDyslexic-Bold.woff') format('woff'),
             url('/fonts/opendyslexic/OpenDyslexic-Bold.otf') format('opentype');
        font-weight: bold;
        font-style: normal;
      }
      @font-face {
        font-family: 'OpenDyslexic';
        src: url('/fonts/opendyslexic/OpenDyslexic-Italic.woff2') format('woff2'),
             url('/fonts/opendyslexic/OpenDyslexic-Italic.woff') format('woff'),
             url('/fonts/opendyslexic/OpenDyslexic-Italic.otf') format('opentype');
        font-weight: normal;
        font-style: italic;
      }
      @font-face {
        font-family: 'OpenDyslexic';
        src: url('/fonts/opendyslexic/OpenDyslexic-BoldItalic.woff2') format('woff2'),
             url('/fonts/opendyslexic/OpenDyslexic-BoldItalic.woff') format('woff'),
             url('/fonts/opendyslexic/OpenDyslexic-BoldItalic.otf') format('opentype');
        font-weight: bold;
        font-style: italic;
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

createRoot(container).render(<OverlayMenu />); 
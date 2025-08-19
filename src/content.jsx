import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

let root = null; // Keep a reference to the React root

// Wrap UI creation in a function
function toggleOverlay() {
  const existingRoot = document.getElementById("beacon-overlay-root");

  if (existingRoot) {
    // If the UI exists, unmount and remove it
    root.unmount();
    existingRoot.remove();
    root = null; // Clear the reference
  } else {
    // If the UI doesn't exist, create and inject it
    const container = document.createElement("div");
    container.id = "beacon-overlay-root";
    // ... (keep all your existing container.style lines here) ...
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
    
    document.body.appendChild(container);
    root = createRoot(container); // Create a new React root
    root.render(<OverlayMenu />); // Render the component
  }
}

// Add custom scrollbar styles
const scrollbarStyles = document.createElement("style");
scrollbarStyles.textContent = `
  .beacon-scrollable-content::-webkit-scrollbar {
    width: 7px;
  }
  .beacon-scrollable-content::-webkit-scrollbar-thumb {
    background: #e0d7c3;
    border-radius: 6px;
    border: 2px solid #f7f5f0;
  }
  .beacon-scrollable-content::-webkit-scrollbar-track {
    background: #f7f5f0;
    border-radius: 6px;
  }
  
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(scrollbarStyles);

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
// Ultra-robust highlightSelection: highlights all selected text nodes, even across complex DOM structures
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

  // Helper: get all text nodes in the selection range
  function getTextNodesInRange(range) {
    const textNodes = [];
    const treeWalker = document.createTreeWalker(
      range.commonAncestorContainer,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          // Only accept text nodes that intersect the range
          const nodeRange = document.createRange();
          nodeRange.selectNodeContents(node);
          return range.intersectsNode(node) && node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      }
    );
    let node;
    while ((node = treeWalker.nextNode())) {
      textNodes.push(node);
    }
    return textNodes;
  }

  const textNodes = getTextNodesInRange(range);
  textNodes.forEach(node => {
    let start = 0, end = node.nodeValue.length;
    if (node === range.startContainer) start = range.startOffset;
    if (node === range.endContainer) end = range.endOffset;
    if (start !== end) {
      const before = node.nodeValue.slice(0, start);
      const selected = node.nodeValue.slice(start, end);
      const after = node.nodeValue.slice(end);
      const span = document.createElement("span");
      span.style.background = color;
      span.style.borderRadius = "3px";
      span.style.padding = "0 2px";
      span.style.boxShadow = "0 1px 2px rgba(0,0,0,0.04)";
      span.className = "beacon-highlight";
      span.setAttribute("data-highlight-color", color);
      span.textContent = selected;
      // Replace the text node with before + span + after
      const parent = node.parentNode;
      const frag = document.createDocumentFragment();
      if (before) frag.appendChild(document.createTextNode(before));
      frag.appendChild(span);
      if (after) frag.appendChild(document.createTextNode(after));
      parent.replaceChild(frag, node);
    }
  });
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

// Inject OpenDyslexic font using chrome.runtime.getURL for extension compatibility
function injectOpenDyslexicFont() {
  if (!document.getElementById('beacon-opendyslexic-global')) {
    const getFontUrl = (filename) =>
      (window.chrome && chrome.runtime && chrome.runtime.getURL)
        ? chrome.runtime.getURL('fonts/' + filename)
        : '/fonts/' + filename;
    const style = document.createElement('style');
    style.id = 'beacon-opendyslexic-global';
    style.textContent = `
      @font-face {
        font-family: 'OpenDyslexic';
        src: url('${getFontUrl('OpenDyslexic-Regular.woff')}') format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'OpenDyslexic';
        src: url('${getFontUrl('OpenDyslexic-Bold.woff')}') format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'OpenDyslexic';
        src: url('${getFontUrl('OpenDyslexic-Italic.woff')}') format('woff');
        font-weight: normal;
        font-style: italic;
        font-display: swap;
      }
      @font-face {
        font-family: 'OpenDyslexic';
        src: url('${getFontUrl('OpenDyslexic-BoldItalic.woff')}') format('woff');
        font-weight: bold;
        font-style: italic;
        font-display: swap;
      }
      body:not(.beacon-popup-container) *:not(.beacon-popup-container *) {
        font-family: 'OpenDyslexic', Arial, sans-serif !important;
      }
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
  const [isSimplifying, setIsSimplifying] = useState(false);

  const [bionicReading, setBionicReading] = useState(false);
  const [vocabularyBuilder, setVocabularyBuilder] = useState(false);
  const [vocabularyHistory, setVocabularyHistory] = useState([]);
  const [showVocabHistory, setShowVocabHistory] = useState(false);

  // Listen for selection changes
  useEffect(() => {
    const handleSelectionChange = () => {
      const sel = window.getSelection();
      setSelectedText(sel && !sel.isCollapsed ? sel.toString() : "");
    };
    document.addEventListener('selectionchange', handleSelectionChange);
    return () => document.removeEventListener('selectionchange', handleSelectionChange);
  }, []);

  // Define the hover handlers for reuse
  const handleImageHover = (event) => {
    if (event.target.tagName === 'IMG') {
      const img = event.target;
      img.style.cursor = 'help';
      
      // Check if we have a cached result for this image
      const imageCacheKey = img.src;
      if (window.beaconImageCache && window.beaconImageCache[imageCacheKey]) {
        // Show cached result immediately
        showImageTooltip(img, window.beaconImageCache[imageCacheKey]);
        return;
      }
      
      // Show loading state
      showImageTooltip(img, '🔍 Analyzing image...');
      
      // Add loading animation
      let dots = 0;
      const loadingInterval = setInterval(() => {
        dots = (dots + 1) % 4;
        const loadingText = '🔍 Analyzing image' + '.'.repeat(dots);
        const tooltip = document.getElementById('beacon-image-tooltip');
        if (tooltip && tooltip.textContent.includes('Analyzing')) {
          tooltip.textContent = loadingText;
        }
      }, 500);
      
      // Analyze the image after a short delay
      setTimeout(() => {
        clearInterval(loadingInterval);
        analyzeSingleImage(img);
      }, 300);
    }
  };

  // Function to analyze a single image
  const analyzeSingleImage = async (img) => {
    try {
      const pageTitle = document.title || "";
      const pageText = document.body.innerText.substring(0, 500);
      
      const apiKey = "AIzaSyAazUO7nUFPskcYP1RueoTEJVWeM6WMgsI";
      const model = "gemini-1.5-flash";
      
      let imageData;
      if (img.src.startsWith('data:')) {
        imageData = img.src.split(',')[1];
      } else if (img.src.startsWith('blob:')) {
        imageData = await getImageAsBase64(img.src);
      } else {
        imageData = await getImageAsBase64(img.src);
      }
      
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [
              {
                text: `Analyze this image in the context of this webpage. The page title is: "${pageTitle}". The page content includes: "${pageText.substring(0, 200)}...". 
                
                Provide a concise summary (2-3 lines) of what this image shows, focusing on the key elements and its relevance to the page content. Keep it brief and informative.`
              },
              {
                inline_data: {
                  mime_type: "image/jpeg",
                  data: imageData
                }
              }
            ]
          }]
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(`API Error: ${data.error.message || 'Unknown error'}`);
      }
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        const summary = data.candidates[0].content.parts[0].text;
        
        // Cache the result
        if (!window.beaconImageCache) {
          window.beaconImageCache = {};
        }
        window.beaconImageCache[img.src] = summary;
        
        // Show the result
        showImageTooltip(img, summary);
      } else {
        throw new Error('Invalid response format');
      }
      
    } catch (error) {
      console.error("Image hover analysis error:", error);
      showImageTooltip(img, `❌ Could not analyze image\n${error.message}`);
    }
  };

  // Helper function to show image tooltip
  const showImageTooltip = (img, content) => {
    let tooltip = document.getElementById('beacon-image-tooltip');
    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.id = 'beacon-image-tooltip';
      tooltip.style.cssText = `
        position: fixed;
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 12px 16px;
        border-radius: 8px;
        font-size: 14px;
        max-width: 300px;
        z-index: 1000000;
        pointer-events: none;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        font-family: 'Inter', system-ui, Arial, sans-serif;
        line-height: 1.4;
        white-space: pre-wrap;
        opacity: 0;
        transition: opacity 0.2s;
      `;
      document.body.appendChild(tooltip);
    }
    
    tooltip.textContent = `🔍 ${content}`;
    tooltip.style.opacity = '1';
    
    // Position tooltip near the image with smart positioning
    const rect = img.getBoundingClientRect();
    const tooltipWidth = 300; // max-width
    const tooltipHeight = 100; // approximate height
    const margin = 10;
    
    let left = rect.right + margin;
    let top = rect.top - margin;
    
    // Check if tooltip would go off the right edge
    if (left + tooltipWidth > window.innerWidth) {
      left = rect.left - tooltipWidth - margin;
    }
    
    // Check if tooltip would go off the left edge
    if (left < 0) {
      left = margin;
    }
    
    // Check if tooltip would go off the top edge
    if (top < 0) {
      top = rect.bottom + margin;
    }
    
    // Check if tooltip would go off the bottom edge
    if (top + tooltipHeight > window.innerHeight) {
      top = window.innerHeight - tooltipHeight - margin;
    }
    
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
  };

  const handleImageLeave = (event) => {
    if (event.target.tagName === 'IMG') {
      event.target.style.cursor = '';
      // Hide tooltip
      const tooltip = document.getElementById('beacon-image-tooltip');
      if (tooltip) {
        tooltip.style.opacity = '0';
      }
    }
  };

  // Add initial image event listeners
  useEffect(() => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.style.cursor = 'help';
      img.addEventListener('mouseenter', handleImageHover);
      img.addEventListener('mouseleave', handleImageLeave);
    });

    // Track mouse position for tooltip positioning
    const handleMouseMove = (event) => {
      window.mouseX = event.clientX;
      window.mouseY = event.clientY;
    };
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup function
    return () => {
      images.forEach(img => {
        img.removeEventListener('mouseenter', handleImageHover);
        img.removeEventListener('mouseleave', handleImageLeave);
      });
      // Remove tooltip
      const tooltip = document.getElementById('beacon-image-tooltip');
      if (tooltip) {
        tooltip.remove();
      }
      // Remove mouse tracking
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Handle dynamically added images
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            // Check if the added node is an image
            if (node.tagName === 'IMG') {
              node.style.cursor = 'help';
              node.addEventListener('mouseenter', handleImageHover);
              node.addEventListener('mouseleave', handleImageLeave);
            }
            // Check for images within the added node
            const images = node.querySelectorAll ? node.querySelectorAll('img') : [];
            images.forEach(img => {
              img.style.cursor = 'help';
              img.addEventListener('mouseenter', handleImageHover);
              img.addEventListener('mouseleave', handleImageLeave);
            });
            
            // Handle Bionic Reading for new content
            if (bionicReading && node.textContent && node.textContent.trim().length > 0) {
              applyBionicReadingToNode(node);
            }
            

          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, [bionicReading, vocabularyBuilder]);

  // Helper function to apply Bionic Reading to a specific node
  const applyBionicReadingToNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0) {
      const text = node.textContent;
      const words = text.split(/(\s+)/);
      
      const bionicWords = words.map(word => {
        if (word.trim().length === 0) return word;
        
        const trimmedWord = word.trim();
        if (trimmedWord.length <= 2) return word;
        
        const boldLength = Math.ceil(trimmedWord.length * 0.6);
        const boldPart = trimmedWord.substring(0, boldLength);
        const regularPart = trimmedWord.substring(boldLength);
        
        return `<span class="beacon-bionic-word" style="font-weight: 700;">${boldPart}</span>${regularPart}`;
      });
      
      const bionicHTML = bionicWords.join('');
      const span = document.createElement('span');
      span.className = 'beacon-bionic';
      span.innerHTML = bionicHTML;
      
      node.parentNode.replaceChild(span, node);
    }
  };



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
    setTranslationResult(''); // Clear previous result
    // Use Google Translate API
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${lang}&dt=t&q=${encodeURIComponent(selectedText)}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Concatenate all segments for full translation
        const translation = data[0].map(segment => segment[0]).join(' ');
        setTranslationResult(translation || 'Translation failed.');
        closeTranslateModal();
      })
      .catch(() => {
        setTranslationResult('Translation failed.');
        closeTranslateModal();
      });
  };

  //Simplification API
const handleSimplify = async () => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      alert("Please select some text to simplify.");
      return;
    }

    const originalText = selection.toString();
    const range = selection.getRangeAt(0);

    setIsSimplifying(true); 

    try {
      const response = await fetch("https://localhost:8000/api/simplify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: originalText }),
      });

      if (!response.ok) {
        throw new Error("Server responded with an error.");
      }

      const data = await response.json();
      const simplifiedText = data.simplified_text;

      if (simplifiedText) {
        range.deleteContents(); 
        const replacementSpan = document.createElement("span");
        replacementSpan.textContent = simplifiedText;
        replacementSpan.style.backgroundColor = "#C3F6FCFF";
        replacementSpan.style.borderRadius = "3px";
        replacementSpan.style.padding = "0 2px";
        range.insertNode(replacementSpan);
      } else {
        throw new Error("Invalid response from the server.");
      }
    } catch (error) {
      console.error("Simplification error:", error);
      alert("Could not simplify the text. Please make sure the Python server is running.");
    } finally {
        setIsSimplifying(false); 
        selection.removeAllRanges();
    }
  };

  // Image Explanation with Gemini API
  const analyzeImage = async () => {
    // This function is no longer needed since we only analyze on hover
    alert("Image analysis now works on hover! Simply hover over any image to get its explanation.");
  };

  // Bionic Reading Function
  const toggleBionicReading = () => {
    if (!bionicReading) {
      enableBionicReading();
      setBionicReading(true);
    } else {
      disableBionicReading();
      setBionicReading(false);
    }
  };

  const enableBionicReading = () => {
    // Apply bionic reading to all text nodes
    const textNodes = [];
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          // Skip if parent is already processed or is in our extension
          if (node.parentElement && 
              (node.parentElement.classList.contains('beacon-bionic') ||
               node.parentElement.id === 'beacon-overlay-root' ||
               node.parentElement.closest('#beacon-overlay-root'))) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    let node;
    while (node = walker.nextNode()) {
      if (node.textContent.trim().length > 0) {
        textNodes.push(node);
      }
    }

    textNodes.forEach(textNode => {
      const text = textNode.textContent;
      const words = text.split(/(\s+)/);
      
      const bionicWords = words.map(word => {
        if (word.trim().length === 0) return word; // Keep whitespace
        
        const trimmedWord = word.trim();
        if (trimmedWord.length <= 2) return word; // Don't modify very short words
        
        // Calculate how many characters to bold (roughly 60% of the word)
        const boldLength = Math.ceil(trimmedWord.length * 0.6);
        
        // Create bionic version with first part bold
        const boldPart = trimmedWord.substring(0, boldLength);
        const regularPart = trimmedWord.substring(boldLength);
        
        return `<span class="beacon-bionic-word" style="font-weight: 700;">${boldPart}</span>${regularPart}`;
      });
      
      const bionicHTML = bionicWords.join('');
      const span = document.createElement('span');
      span.className = 'beacon-bionic';
      span.innerHTML = bionicHTML;
      
      textNode.parentNode.replaceChild(span, textNode);
    });
  };

  const disableBionicReading = () => {
    // Remove all bionic reading spans and restore original text
    const bionicSpans = document.querySelectorAll('.beacon-bionic');
    bionicSpans.forEach(span => {
      const textContent = span.textContent;
      const textNode = document.createTextNode(textContent);
      span.parentNode.replaceChild(textNode, span);
    });
  };

  // Vocabulary Builder Functions
  const toggleVocabularyBuilder = () => {
    if (!vocabularyBuilder) {
      enableVocabularyBuilder();
      setVocabularyBuilder(true);
    } else {
      disableVocabularyBuilder();
      setVocabularyBuilder(false);
    }
  };

  const enableVocabularyBuilder = () => {
    // Just enable the feature - no automatic highlighting
    setVocabularyBuilder(true);
  };

  const disableVocabularyBuilder = () => {
    // Just disable the feature
    setVocabularyBuilder(false);
    
    // Hide any existing vocabulary tooltip
    const existingTooltip = document.getElementById('beacon-vocab-tooltip');
    if (existingTooltip) {
      existingTooltip.remove();
    }
  };

  // Function to look up selected word when Vocabulary button is clicked
  const handleVocabButtonClick = () => {
    const selection = window.getSelection();
    
    if (!selection || selection.isCollapsed) {
      // No text selected
      alert("Please select a word first, then click Vocabulary to get its definition.");
      return;
    }
    
    const selectedText = selection.toString().trim();
    
    if (selectedText.split(/\s+/).length > 1) {
      // Multiple words selected
      alert("Please select only one word at a time.");
      return;
    }
    
    if (selectedText.length < 3) {
      // Word too short
      alert("Please select a word with at least 3 characters.");
      return;
    }
    
    // Look up the selected word
    lookupWord(selectedText);
  };

  const lookupWord = async (word) => {
    try {
      // Show loading state
      showVocabTooltip(null, `📚 Looking up "${word}"...`, word);
      
      // Use Free Dictionary API for definitions
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
      
      if (!response.ok) {
        throw new Error('Word not found');
      }
      
      const data = await response.json();
      
      if (data && data[0]) {
        const entry = data[0];
        let definition = `📚 **${word}**\n\n`;
        
        if (entry.phonetic) {
          definition += `🔊 ${entry.phonetic}\n\n`;
        }
        
        if (entry.meanings && entry.meanings.length > 0) {
          entry.meanings.forEach((meaning, index) => {
            if (index < 3) { // Limit to first 3 meanings
              definition += `**${meaning.partOfSpeech}:**\n`;
              if (meaning.definitions && meaning.definitions.length > 0) {
                definition += `• ${meaning.definitions[0].definition}\n`;
              }
              if (meaning.synonyms && meaning.synonyms.length > 0) {
                definition += `**Synonyms:** ${meaning.synonyms.slice(0, 5).join(', ')}\n`;
              }
              definition += '\n';
            }
          });
        }
        
        // Add save to history option
        definition += `\n💾 **Click to save to vocabulary history**`;
        
        showVocabTooltip(null, definition, word, entry);
      } else {
        throw new Error('No definition found');
      }
      
    } catch (error) {
      console.error("Vocabulary lookup error:", error);
      showVocabTooltip(null, `❌ Could not find definition for "${word}"\n\nTry a different word or check the spelling.`, word);
    }
  };

  const handleVocabWordClick = async (event) => {
    if (event.target.classList.contains('beacon-vocab-word')) {
      const word = event.target.textContent.trim();
      
      // Show loading state
      showVocabTooltip(event.target, `📚 Looking up "${word}"...`);
      
      try {
        // Use Free Dictionary API for definitions
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
        
        if (!response.ok) {
          throw new Error('Word not found');
        }
        
        const data = await response.json();
        
        if (data && data[0]) {
          const entry = data[0];
          let definition = `📚 **${word}**\n\n`;
          
          if (entry.phonetic) {
            definition += `🔊 ${entry.phonetic}\n\n`;
          }
          
          if (entry.meanings && entry.meanings.length > 0) {
            entry.meanings.forEach((meaning, index) => {
              if (index < 3) { // Limit to first 3 meanings
                definition += `**${meaning.partOfSpeech}:**\n`;
                if (meaning.definitions && meaning.definitions.length > 0) {
                  definition += `• ${meaning.definitions[0].definition}\n`;
                }
                if (meaning.synonyms && meaning.synonyms.length > 0) {
                  definition += `**Synonyms:** ${meaning.synonyms.slice(0, 5).join(', ')}\n`;
                }
                definition += '\n';
              }
            });
          }
          
          // Add save to history option
          definition += `\n💾 **Click to save to vocabulary history**`;
          
          showVocabTooltip(event.target, definition, word, entry);
        } else {
          throw new Error('No definition found');
        }
        
      } catch (error) {
        console.error("Vocabulary lookup error:", error);
        showVocabTooltip(event.target, `❌ Could not find definition for "${word}"\n\nTry a different word or check the spelling.`);
      }
    }
  };

  const showVocabTooltip = (element, content, word, entry) => {
    // Remove existing tooltip
    const existingTooltip = document.getElementById('beacon-vocab-tooltip');
    if (existingTooltip) {
      existingTooltip.remove();
    }
    
    // Create new tooltip with improved UI
    const tooltip = document.createElement('div');
    tooltip.id = 'beacon-vocab-tooltip';
    tooltip.style.cssText = `
      position: fixed;
      background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
      color: white;
      padding: 0;
      border-radius: 16px;
      font-size: 14px;
      max-width: 380px;
      min-width: 320px;
      z-index: 1000000;
      box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 8px 32px rgba(0,0,0,0.4);
      font-family: 'Inter', system-ui, Arial, sans-serif;
      line-height: 1.6;
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border: 1px solid rgba(255,255,255,0.1);
      overflow: hidden;
      backdrop-filter: blur(10px);
    `;
    
    // Create header with word and pronunciation
    let headerHTML = '';
    if (word && entry) {
      headerHTML = `
        <div style="
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          padding: 20px 24px;
          border-radius: 16px 16px 0 0;
          position: relative;
          overflow: hidden;
        ">
          <div style="
            position: absolute;
            top: -20px;
            right: -20px;
            width: 60px;
            height: 60px;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
          "></div>
          <div style="
            position: absolute;
            bottom: -30px;
            left: -30px;
            width: 80px;
            height: 80px;
            background: rgba(255,255,255,0.05);
            border-radius: 50%;
          "></div>
          
          <div style="
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 8px;
            color: white;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
          ">${word}</div>
          
          ${entry.phonetic ? `
            <div style="
              display: flex;
              align-items: center;
              gap: 8px;
              color: rgba(255,255,255,0.9);
              font-size: 16px;
            ">
              <span style="font-size: 18px;">🔊</span>
              <span style="font-family: 'Courier New', monospace; font-weight: 500;">${entry.phonetic}</span>
            </div>
          ` : ''}
        </div>
      `;
    }
    
    // Create content body
    let bodyHTML = '';
    if (word && entry && entry.meanings) {
      bodyHTML = `
        <div style="padding: 24px;">
          ${entry.meanings.slice(0, 3).map((meaning, index) => `
            <div style="margin-bottom: ${index < entry.meanings.slice(0, 3).length - 1 ? '20px' : '0'}">
              <div style="
                display: inline-block;
                background: rgba(37, 99, 235, 0.2);
                color: #60a5fa;
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 12px;
                border: 1px solid rgba(37, 99, 235, 0.3);
              ">${meaning.partOfSpeech}</div>
              
              ${meaning.definitions && meaning.definitions[0] ? `
                <div style="
                  color: #e5e7eb;
                  margin-bottom: 8px;
                  font-size: 15px;
                  line-height: 1.5;
                ">${meaning.definitions[0].definition}</div>
              ` : ''}
              
              ${meaning.synonyms && meaning.synonyms.length > 0 ? `
                <div style="
                  color: #9ca3af;
                  font-size: 13px;
                  display: flex;
                  align-items: center;
                  gap: 6px;
                ">
                  <span style="color: #60a5fa;">💡</span>
                  <span style="font-weight: 500;">Synonyms:</span>
                  <span style="color: #d1d5db;">${meaning.synonyms.slice(0, 4).join(', ')}</span>
                </div>
              ` : ''}
            </div>
          `).join('')}
          
          <div style="
            margin-top: 20px;
            padding: 16px;
            background: rgba(34, 197, 94, 0.1);
            border: 1px solid rgba(34, 197, 94, 0.2);
            border-radius: 12px;
            text-align: center;
            cursor: pointer;
            transition: all 0.2s;
            color: #22c55e;
            font-weight: 600;
            font-size: 14px;
          " 
          onmouseover="this.style.background='rgba(34, 197, 94, 0.2)'"
          onmouseout="this.style.background='rgba(34, 197, 94, 0.1)'"
          >
            💾 Click to save to vocabulary history
          </div>
        </div>
      `;
    } else {
      // Show simple content for non-entry cases
      bodyHTML = `
        <div style="padding: 24px; color: #e5e7eb; font-size: 15px; line-height: 1.6;">
          ${content}
        </div>
      `;
    }
    
    // Combine header and body
    tooltip.innerHTML = headerHTML + bodyHTML;
    
    // If we have a word and entry, make the tooltip clickable to save
    if (word && entry) {
      tooltip.addEventListener('click', () => {
        saveWordToHistory(word, entry);
        tooltip.style.opacity = '0';
        tooltip.style.transform = 'scale(0.95)';
        setTimeout(() => {
          if (tooltip.parentNode) {
            tooltip.remove();
          }
        }, 300);
      });
      
      // Add hover effect
      tooltip.style.cursor = 'pointer';
      tooltip.title = 'Click to save this word to your vocabulary history';
      
      // Add hover animations
      tooltip.addEventListener('mouseenter', () => {
        tooltip.style.transform = 'scale(1.02)';
        tooltip.style.boxShadow = '0 25px 80px rgba(0,0,0,0.7), 0 12px 40px rgba(0,0,0,0.5)';
      });
      
      tooltip.addEventListener('mouseleave', () => {
        tooltip.style.transform = 'scale(1)';
        tooltip.style.boxShadow = '0 20px 60px rgba(0,0,0,0.6), 0 8px 32px rgba(0,0,0,0.4)';
      });
    }
    
    document.body.appendChild(tooltip);
    
    // Position tooltip - if element provided, use it; otherwise use mouse position
    let left, top;
    const tooltipWidth = 380;
    const tooltipHeight = 300; // Approximate height
    const margin = 20;
    
    if (element) {
      // Position near the element
      const rect = element.getBoundingClientRect();
      left = rect.left + (rect.width / 2) - (tooltipWidth / 2);
      top = rect.bottom + margin;
    } else {
      // Position near mouse cursor
      left = (window.mouseX || window.innerWidth / 2) - (tooltipWidth / 2);
      top = (window.mouseY || 100) - tooltipHeight - margin;
    }
    
    // Adjust if tooltip goes off screen
    if (left < margin) left = margin;
    if (left + tooltipWidth > window.innerWidth - margin) {
      left = window.innerWidth - tooltipWidth - margin;
    }
    if (top < margin) {
      top = margin;
    }
    if (top + tooltipHeight > window.innerHeight - margin) {
      top = window.innerHeight - tooltipHeight - margin;
    }
    
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
    
    // Show tooltip with animation
    setTimeout(() => {
      tooltip.style.opacity = '1';
      tooltip.style.transform = 'scale(1)';
    }, 10);
    
    // Auto-hide after 15 seconds (longer since it's interactive)
    setTimeout(() => {
      tooltip.style.opacity = '0';
      tooltip.style.transform = 'scale(0.95)';
      setTimeout(() => {
        if (tooltip.parentNode) {
          tooltip.remove();
        }
      }, 300);
    }, 15000);
  };

  // Function to save word to vocabulary history
  const saveWordToHistory = (word, entry) => {
    const newWord = {
      word: word,
      phonetic: entry.phonetic || '',
      meanings: entry.meanings ? entry.meanings.slice(0, 3) : [],
      timestamp: new Date().toISOString(),
      saved: true
    };
    
    setVocabularyHistory(prev => {
      // Check if word already exists
      const exists = prev.find(item => item.word.toLowerCase() === word.toLowerCase());
      if (exists) {
        return prev.map(item => 
          item.word.toLowerCase() === word.toLowerCase() 
            ? { ...item, timestamp: newWord.timestamp }
            : item
        );
      }
      return [...prev, newWord];
    });
    
    // Show confirmation
    const confirmation = document.createElement('div');
    confirmation.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
      color: white;
      padding: 16px 24px;
      border-radius: 12px;
      font-family: 'Inter', system-ui, Arial, sans-serif;
      font-weight: 600;
      font-size: 14px;
      z-index: 1000001;
      box-shadow: 0 12px 40px rgba(34, 197, 94, 0.4);
      animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      border: 1px solid rgba(255,255,255,0.2);
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      gap: 12px;
    `;
    confirmation.innerHTML = `
      <div style="
        width: 24px;
        height: 24px;
        background: rgba(255,255,255,0.2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
      ">✓</div>
      <span>"${word}" saved to vocabulary history!</span>
    `;
    document.body.appendChild(confirmation);
    
    // Remove confirmation after 4 seconds
    setTimeout(() => {
      confirmation.style.opacity = '0';
      confirmation.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (confirmation.parentNode) {
          confirmation.remove();
        }
      }, 400);
    }, 4000);
  };

  // Helper function to convert image to base64
  const getImageAsBase64 = async (imageUrl) => {
    try {
      // Try to fetch the image
      const response = await fetch(imageUrl, {
        mode: 'cors', // Try CORS first
        credentials: 'omit'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const blob = await response.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = reader.result.split(',')[1];
          resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      // If CORS fails, try to get the image data from the img element directly
      try {
        const img = document.querySelector(`img[src="${imageUrl}"]`);
        if (img) {
          // Create a canvas to get image data
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = img.naturalWidth || img.width;
          canvas.height = img.naturalHeight || img.height;
          
          // Draw image to canvas
          ctx.drawImage(img, 0, 0);
          
          // Convert to base64
          return canvas.toDataURL('image/jpeg').split(',')[1];
        }
      } catch (canvasError) {
        console.error("Canvas conversion failed:", canvasError);
      }
      
      console.error("Error converting image to base64:", error);
      throw new Error(`Failed to process image: ${error.message}`);
    }
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
      minWidth: 320,
      maxWidth: 420,
      maxHeight: "80vh",
      background: "#fcfcfc",
      borderRadius: 20,
      boxShadow: "0 8px 32px rgba(0,0,0,0.13)",
      padding: 0,
      border: "1px solid #ececec",
      fontFamily: "'Inter', 'Lexend', system-ui, Arial, sans-serif",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }}>
      {/* Header with Close/Minimize */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "22px 28px 10px 28px",
        borderBottom: "1px solid #f0f0f0",
        background: "#fff",
        flexShrink: 0
      }}>
        <span style={{fontWeight: 800, fontSize: 22, letterSpacing: 0.2, color: "#232323"}}>Beacon Tools</span>
        <div style={{display: "flex", gap: 8}}>
          <button
            style={{
              background: "none",
              border: "none",
              fontSize: 22,
              cursor: "pointer",
              color: "#b0b0b0",
              padding: 2,
              borderRadius: 4,
              transition: "background 0.2s"
            }}
            title="Minimize"
            onClick={() => setIsMinimized(true)}
          >
            –
          </button>
  
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div 
        className="beacon-scrollable-content"
        style={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          padding: "18px 28px 24px 28px",
          scrollbarWidth: "thin",
          scrollbarColor: "#e0d7c3 #f7f5f0",
          background: "#fcfcfc"
        }}
      >
        {/* Highlight Section with color picker */}
        <div style={{marginBottom: 22}}>
          <div style={{fontSize: 15, fontWeight: 600, marginBottom: 8, color: "#232323"}}>Highlight:</div>
          <div style={{display: "flex", gap: 12, marginBottom: 10}}>
            {["#ffeb3b", "#ffcdd2", "#c8e6c9", "#bbdefb", "#e1bee7"].map(color => (
              <button
                key={color}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  border: highlightColor === color ? "3px solid #bfa14a" : "2px solid #e0e0e0",
                  background: color,
                  outline: "none",
                  boxShadow: highlightColor === color ? "0 0 0 2px #fffbe6" : "none",
                  cursor: "pointer",
                  transition: "border 0.2s, box-shadow 0.2s"
                }}
                onClick={() => setHighlightColor(color)}
                title={`Highlight color: ${color}`}
              />
            ))}
          </div>
          {selectedText && <button style={{...btnStyle, marginTop: 2, marginBottom: 0}} onMouseDown={e => e.preventDefault()} onClick={handleHighlight}>Highlight Selection</button>}
          {(showSaveHighlight || hasUnsavedHighlight) && <button style={{...btnStyle, background: "#ffe082", color: "#232323", marginTop: 8}} onClick={handleSaveHighlight}>Save Highlight</button>}
        </div>
        <div style={{height: 1, background: "#f0f0f0", margin: "18px 0 22px 0", borderRadius: 1}} />

        {/* Dyslexia Font Picker */}
        <button style={{...btnStyle, fontWeight: 600, fontSize: 16, marginBottom: 16}} onClick={handleFontModal}>Dyslexia Fonts</button>
        {showFontModal && (
          <div style={{position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.18)", zIndex: 1000001, display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div style={{background: "#fff", borderRadius: 14, padding: 28, minWidth: 340, boxShadow: "0 8px 32px rgba(0,0,0,0.18)"}}>
              <h4 style={{marginTop: 0, fontWeight: 700, fontSize: 19}}>Choose Dyslexia-Friendly Font</h4>
              <div style={{
                maxHeight: 200,
                overflowY: 'auto',
                marginBottom: 16,
                paddingRight: 4,
                scrollbarWidth: 'thin',
                scrollbarColor: '#e0d7c3 #f7f5f0'
              }}
                className="beacon-scrollable-content"
              >
                {Object.keys(dyslexiaFonts).map(font => (
                  <div key={font} style={{marginBottom: 14}}>
                    <button style={{...btnStyle, background: dyslexia === font ? "#007bff" : "#f5f5f5", color: dyslexia === font ? "white" : "#222", fontSize: 15, fontWeight: 600}} onClick={() => handleFontPick(font)}>{dyslexia === font ? "✓ " : ""}{font}</button>
                    <div style={{fontSize: 13, color: "#555", marginTop: 2}}>{dyslexiaFontDescriptions[font]}</div>
                    <div style={{fontFamily: font === "Verdana" ? "Verdana, Arial, sans-serif" : font === "LexieReadable" ? "'LexieReadable', Arial, sans-serif" : font, fontSize: 15, background: "#f8f8f8", padding: 5, borderRadius: 5, marginTop: 2}}>{dyslexiaFontPreviews[font]}</div>
                  </div>
                ))}
              </div>
              <button style={{...btnStyle, background: "#eee", color: "#333", fontWeight: 500}} onClick={closeFontModal}>Close</button>
            </div>
          </div>
        )}
        <div style={{height: 1, background: "#f0f0f0", margin: "18px 0 22px 0", borderRadius: 1}} />

        {/* Line Focus, Text Spacing, Color Themes */}
        <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14, marginBottom: 22}}>
          <button style={{...btnStyle, fontWeight: 500}} onClick={handleLineFocus}>{lineFocus ? "Disable Line Focus" : "Enable Line Focus"}</button>
          <button style={{...btnStyle, fontWeight: 500}} onClick={handleSpacing}>{spacing ? "Disable Text Spacing" : "Enable Text Spacing"}</button>
          <button style={{...btnStyle, background: theme==="sepia"?"#ffe4b5":"#f5f5f5", color: theme==="sepia"?"#bfa14a":"#232323", fontWeight: 500}} onClick={() => handleTheme("sepia")}>Sepia</button>
          <button style={{...btnStyle, background: theme==="dark"?"#232323":"#f5f5f5", color: theme==="dark"?"#fff":"#232323", fontWeight: 500}} onClick={() => handleTheme("dark")}>Dark</button>
          <button style={{...btnStyle, background: theme==="high-contrast"?"#fff200":"#f5f5f5", color: theme==="high-contrast"?"#232323":"#232323", fontWeight: 500}} onClick={() => handleTheme("high-contrast")}>Contrast</button>
        </div>
        <div style={{height: 1, background: "#f0f0f0", margin: "18px 0 22px 0", borderRadius: 1}} />

        {/* Translation & Simplify Buttons */}
        <div style={{display: 'flex', gap: 12, marginBottom: 16}}>
          <button
            style={{
              ...btnStyle,
              fontWeight: 600,
              fontSize: 16,
              opacity: selectedText ? 1 : 0.5,
              cursor: selectedText ? 'pointer' : 'not-allowed',
              flex: 1
            }}
            onClick={selectedText ? handleTranslateModal : undefined}
            disabled={!selectedText}
          >
            Translation
          </button>
      <button
            style={{
              ...btnStyle,
              fontWeight: 600,
              fontSize: 16,
              opacity: selectedText ? 1 : 0.5,
              cursor: selectedText ? 'pointer' : 'not-allowed',
              flex: 1,
              background: '#e0f7fa'
            }}
             onClick={!isSimplifying ? handleSimplify : undefined} 
            disabled={!selectedText}
          >
            {isSimplifying ? 'Simplifying...' : 'Simplify'}
          </button>
        </div>

        {/* Image Explanation Button */}
        <button
          style={{
            ...btnStyle,
            fontWeight: 600,
            fontSize: 16,
            background: '#f3e5f5',
            color: '#4a148c',
            marginBottom: 16,
            position: 'relative'
          }}
          onClick={analyzeImage}
          disabled={false}
        >
          <span style={{marginRight: 8}}>ℹ️</span>
          Hover over images for explanations
        </button>

        {/* Bionic Reading & Vocabulary Builder */}
        <div style={{display: 'flex', gap: 12, marginBottom: 16}}>
          <button
            style={{
              ...btnStyle,
              fontWeight: 600,
              fontSize: 16,
              background: bionicReading ? '#e8f5e8' : '#fff3e0',
              color: bionicReading ? '#2e7d32' : '#e65100',
              flex: 1
            }}
            onClick={toggleBionicReading}
          >
            {bionicReading ? '✓ ' : ''}🧠 Bionic Reading
          </button>
          <button
            style={{
              ...btnStyle,
              fontWeight: 600,
              fontSize: 16,
              background: vocabularyBuilder ? '#e8f5e8' : '#e3f2fd',
              color: vocabularyBuilder ? '#2e7d32' : '#1565c0',
              flex: 1
            }}
            onClick={handleVocabButtonClick}
          >
            📚 Vocabulary
          </button>
        </div>

        {/* Vocabulary History Button */}
        {vocabularyHistory.length > 0 && (
          <button
            style={{
              ...btnStyle,
              fontWeight: 600,
              fontSize: 16,
              background: '#fce4ec',
              color: '#c2185b',
              marginBottom: 16
            }}
            onClick={() => setShowVocabHistory(true)}
          >
            📖 Vocabulary History ({vocabularyHistory.length})
          </button>
        )}

        <div style={{height: 1, background: "#f0f0f0", margin: "18px 0 22px 0", borderRadius: 1}} />

        {/* TTS, Layout & Font, Saved Highlights */}
        <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14, marginBottom: 10}}>
          <button style={{...btnStyle, fontWeight: 600}} onClick={handleTTS}>{isSpeaking ? "Stop" : "Text-to-Speech"}</button>
          <button style={{...btnStyle, fontWeight: 600}} onClick={handleLayoutModal}>Layout & Font</button>
          <button style={{...btnStyle, fontWeight: 600, gridColumn: "span 2"}} onClick={showSavedHighlights}>Saved Highlights</button>
        </div>

        {/* Layout & Font Modal */}
        {showLayoutModal && (
          <div style={{position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.18)", zIndex: 1000001, display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div style={{background: "#fff", borderRadius: 14, padding: 28, minWidth: 340, boxShadow: "0 8px 32px rgba(0,0,0,0.18)"}}>
              <h4 style={{marginTop: 0, fontWeight: 700, fontSize: 19}}>Layout & Font Options</h4>
              <div style={{
                maxHeight: 250,
                overflowY: 'auto',
                marginBottom: 16,
                paddingRight: 4,
                scrollbarWidth: 'thin',
                scrollbarColor: '#e0d7c3 #f7f5f0'
              }}
                className="beacon-scrollable-content"
              >
                <div style={{marginBottom: 16}}>
                  <div style={{fontSize: 15, fontWeight: 600, marginBottom: 6}}>Font Size:</div>
                  {["16px", "18px", "20px", "24px"].map(size => (
                    <button key={size} style={{...btnStyle, background: largeFont === size ? "#007bff" : "#f5f5f5", color: largeFont === size ? "white" : "#232323", fontSize: 15, fontWeight: 600, marginRight: 8}} onClick={() => handleLargeFont(size)}>{largeFont === size ? "✓ " : ""}{size}</button>
                  ))}
                </div>
                <div style={{marginBottom: 16}}>
                  <div style={{fontSize: 15, fontWeight: 600, marginBottom: 6}}>Layout Width:</div>
                  {["800px", "1000px", "1200px"].map(width => (
                    <button key={width} style={{...btnStyle, background: narrowLayout === width ? "#007bff" : "#f5f5f5", color: narrowLayout === width ? "white" : "#232323", fontSize: 15, fontWeight: 600, marginRight: 8}} onClick={() => handleNarrowLayout(width)}>{narrowLayout === width ? "✓ " : ""}{width}</button>
                  ))}
                </div>
                <div style={{marginBottom: 16}}>
                  <div style={{fontSize: 15, fontWeight: 600, marginBottom: 6}}>Line Height:</div>
                  <button style={{...btnStyle, fontWeight: 600}} onClick={() => handleLineHeight(-0.1)}>-</button>
                  <span style={{margin: "0 12px", fontWeight: 600, fontSize: 15}}>{lineHeight.toFixed(2)}</span>
                  <button style={{...btnStyle, fontWeight: 600}} onClick={() => handleLineHeight(0.1)}>+</button>
                </div>
              </div>
              <button style={{...btnStyle, background: "#eee", color: "#333", fontWeight: 500}} onClick={closeLayoutModal}>Close</button>
            </div>
          </div>
        )}

        {/* Translation Modal */}
        {showTranslateModal && (
          <div style={{position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.18)", zIndex: 1000001, display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div style={{background: "#fff", borderRadius: 14, padding: 28, minWidth: 340, boxShadow: "0 8px 32px rgba(0,0,0,0.18)"}}>
              <h4 style={{marginTop: 0, fontWeight: 700, fontSize: 19}}>Translate Selection</h4>
              <div style={{
                maxHeight: 200,
                overflowY: 'auto',
                marginBottom: 16,
                paddingRight: 4,
                scrollbarWidth: 'thin',
                scrollbarColor: '#e0d7c3 #f7f5f0'
              }}
                className="beacon-scrollable-content"
              >
                {[
                  {code: "en", label: "English"},
                  {code: "es", label: "Spanish"},
                  {code: "fr", label: "French"},
                  {code: "de", label: "German"},
                  {code: "hi", label: "Hindi"},
                  {code: "ml", label: "Malayalam"},
                  {code: "zh-CN", label: "Chinese"},
                  {code: "ar", label: "Arabic"},
                  {code: "ru", label: "Russian"},
                  {code: "ja", label: "Japanese"},
                  {code: "ko", label: "Korean"}
                ].map(lang => (
                  <button key={lang.code} style={{...btnStyle, marginBottom: 8, fontWeight: 500}} onClick={() => handleTranslatePick(lang.code)}>{lang.label}</button>
                ))}
              </div>
              <button style={{...btnStyle, background: "#eee", color: "#333", fontWeight: 500}} onClick={closeTranslateModal}>Close</button>
            </div>
          </div>
        )}

        {/* Translation Result Modal */}
        {translationResult && (
          <div style={{position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.18)", zIndex: 1000002, display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div style={{background: "#fff", borderRadius: 14, padding: 28, minWidth: 340, boxShadow: "0 8px 32px rgba(0,0,0,0.18)"}}>
              <h4 style={{marginTop: 0, fontWeight: 700, fontSize: 19}}>Translation Result</h4>
              <div style={{fontSize: 16, marginBottom: 16}}>{translationResult}</div>
              <button style={{...btnStyle, background: "#eee", color: "#333", fontWeight: 500}} onClick={()=>setTranslationResult("")}>Close</button>
            </div>
          </div>
        )}



        {/* Vocabulary History Modal */}
        {showVocabHistory && (
          <div style={{position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.18)", zIndex: 1000004, display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div style={{background: "#fff", borderRadius: 14, padding: 28, minWidth: 500, maxWidth: "80vw", maxHeight: "80vh", boxShadow: "0 8px 32px rgba(0,0,0,0.18)"}}>
              <h4 style={{marginTop: 0, fontWeight: 700, fontSize: 19, marginBottom: 16}}>Vocabulary History</h4>
              <div style={{
                maxHeight: 400,
                overflowY: 'auto',
                marginBottom: 16,
                paddingRight: 4,
                scrollbarWidth: 'thin',
                scrollbarColor: '#e0d7c3 #f7f5f0'
              }}
                className="beacon-scrollable-content"
              >
                {vocabularyHistory.length === 0 ? (
                  <div style={{textAlign: 'center', color: '#666', padding: '20px'}}>
                    No words saved yet. Click on vocabulary words to save them!
                  </div>
                ) : (
                  vocabularyHistory.map((item, index) => (
                    <div key={index} style={{
                      border: '1px solid #e0e0e0',
                      borderRadius: 8,
                      padding: 16,
                      marginBottom: 12,
                      background: '#fafafa'
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 8
                      }}>
                        <h5 style={{
                          margin: 0,
                          fontSize: 18,
                          fontWeight: 600,
                          color: '#1565c0'
                        }}>
                          {item.word}
                        </h5>
                        <button
                          onClick={() => {
                            setVocabularyHistory(prev => prev.filter((_, i) => i !== index));
                          }}
                          style={{
                            background: '#ffebee',
                            color: '#c62828',
                            border: 'none',
                            borderRadius: '50%',
                            width: 24,
                            height: 24,
                            cursor: 'pointer',
                            fontSize: 12,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                          title="Remove word"
                        >
                          ×
                        </button>
                      </div>
                      
                      {item.phonetic && (
                        <div style={{color: '#666', fontSize: 14, marginBottom: 8}}>
                          🔊 {item.phonetic}
                        </div>
                      )}
                      
                      {item.meanings.map((meaning, mIndex) => (
                        <div key={mIndex} style={{marginBottom: 8}}>
                          <span style={{
                            background: '#e3f2fd',
                            color: '#1565c0',
                            padding: '2px 8px',
                            borderRadius: 12,
                            fontSize: 12,
                            fontWeight: 500
                          }}>
                            {meaning.partOfSpeech}
                          </span>
                          <div style={{marginTop: 4, fontSize: 14}}>
                            {meaning.definitions && meaning.definitions[0] && (
                              <div>• {meaning.definitions[0].definition}</div>
                            )}
                          </div>
                        </div>
                      ))}
                      
                      <div style={{
                        fontSize: 12,
                        color: '#999',
                        marginTop: 8,
                        fontStyle: 'italic'
                      }}>
                        Saved: {new Date(item.timestamp).toLocaleDateString()}
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div style={{display: 'flex', gap: 12}}>
                <button 
                  style={{...btnStyle, background: "#eee", color: "#333", fontWeight: 500, flex: 1}} 
                  onClick={() => setShowVocabHistory(false)}
                >
                  Close
                </button>
                {vocabularyHistory.length > 0 && (
                  <button 
                    style={{...btnStyle, background: "#ffebee", color: "#c62828", fontWeight: 500, flex: 1}} 
                    onClick={() => {
                      setVocabularyHistory([]);
                      setShowVocabHistory(false);
                    }}
                  >
                    Clear All
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "13px 0",
  border: "none",
  borderRadius: "12px",
  background: "#f5f5f5",
  marginBottom: "0px",
  fontSize: "15px",
  fontWeight: 500,
  cursor: "pointer",
  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
  transition: "background 0.18s, color 0.18s, box-shadow 0.18s",
  outline: "none",
  width: "100%",
  letterSpacing: 0.01,
  marginTop: 0,
  marginRight: 0,
  marginLeft: 0,
  marginBottom: 0,
};

createRoot(container).render(<OverlayMenu />);

// Listen for messages from the popup

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'TOGGLE_OVERLAY') {
    toggleOverlay();
  }
 if (window.chrome && chrome.runtime && chrome.runtime.onMessage) {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'HIGHLIGHT_SELECTION') {
      highlightSelection(message.color);
    }
    if (message.type === 'TOGGLE_DYSLEXIA_FONT') {
      if (message.enabled) {
        enableDyslexiaFont('OpenDyslexic');
      } else {
        disableDyslexiaFont();
      }
    }
  });
}
});


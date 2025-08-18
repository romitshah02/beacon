import browser from "webextension-polyfill";

console.log("Hello from the background!");

chrome.action.onClicked.addListener((tab) => {
  // Send a message to the active tab to toggle the overlay
  chrome.tabs.sendMessage(tab.id, { type: "TOGGLE_OVERLAY" });
});


browser.runtime.onInstalled.addListener((details) => {
  console.log("Extension installed:", details);
});

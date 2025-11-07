chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "generateQR",
    title: "Generate QR from selected text",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "generateQR") {

    // First inject the QR library (qrious.min.js)
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["qrious.min.js"]
    }, () => {

      // Then inject the popup UI logic (qr_popup.js)
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["qr_popup.js"]
      }, () => {

        // Then send the selected text to qr_popup.js
        chrome.tabs.sendMessage(tab.id, { text: info.selectionText });

      });
    });

  }
});

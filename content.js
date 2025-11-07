// Enable right click and text selection everywhere
document.addEventListener('contextmenu', event => event.stopPropagation(), true);
document.addEventListener('copy', event => event.stopPropagation(), true);
document.addEventListener('cut', event => event.stopPropagation(), true);
document.addEventListener('selectstart', event => event.stopPropagation(), true);

// OPTIONAL: Auto QR on text selection (leave commented)
/*
let selectionTimeout;
document.addEventListener("mouseup", () => {
  clearTimeout(selectionTimeout);
  selectionTimeout = setTimeout(() => {
    const text = window.getSelection().toString().trim();
    if (text.length > 2) {
      chrome.runtime.sendMessage({ autoQR: text });
    }
  }, 150);
});
*/

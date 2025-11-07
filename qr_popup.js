chrome.runtime.onMessage.addListener((message) => {
  let text = message.text;
  if (!text) return;

  const old = document.getElementById("qrBoxExtension");
  if (old) old.remove();

  const box = document.createElement("div");
  box.id = "qrBoxExtension";
  box.innerHTML = `
    <div class="qr-header">
      <span>QR Code</span>
      <button id="qrCloseBtn">×</button>
    </div>
    <canvas id="qrCanvas"></canvas>
    <div class="qr-buttons">
      <button id="qrCopyBtn">Copy</button>
      <button id="qrDownloadBtn">Download</button>
    </div>
  `;
  document.body.appendChild(box);

  // QRious now available because we injected it locally
  let qr = new QRious({
    element: document.getElementById("qrCanvas"),
    value: text,
    size: 200
  });

  document.getElementById("qrCopyBtn").onclick = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard ✅");
  };

  document.getElementById("qrDownloadBtn").onclick = () => {
    const link = document.createElement("a");
    link.download = "qr.png";
    link.href = qr.toDataURL("image/png");
    link.click();
  };

  document.getElementById("qrCloseBtn").onclick = () => box.remove();

  dragElement(box);
});

function dragElement(el) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  el.querySelector(".qr-header").onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDrag;
    document.onmousemove = drag;
  }
  function drag(e) {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    el.style.top = (el.offsetTop - pos2) + "px";
    el.style.left = (el.offsetLeft - pos1) + "px";
  }
  function closeDrag() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

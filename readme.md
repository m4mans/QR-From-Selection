# QR From Selection - Chrome Extension

A simple Chrome extension that generates QR codes from selected text on web pages.

![Qr-From-Selection-Demo](https://github.com/user-attachments/assets/36d28e7c-68ae-499b-a128-c08f7977b786)

## Features

- Generate QR codes from selected text instantly
- Draggable QR code popup window
- Options to save or copy QR codes
- Non-intrusive design with proper positioning

## Installation

1. Clone this repository or download the source code
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory

## Usage

1. Select any text on a webpage and right click to select "Generate QR from selected text"
2. A QR code popup will appear in the top-right corner
3. The popup can be:
   - Dragged to any position on the screen
   - Closed using the × button
   - Used to save or copy the QR code

## Development

The extension is built using vanilla JavaScript and CSS. It uses the QRious library for QR code generation.

## Troubleshooting

- If the QR code doesn't appear, refresh the page
- Check if text selection is properly highlighted
- Ensure permissions are correctly set in Chrome

## Privacy

This extension:
- Does not collect any user data
- Works completely offline
- Doesn't require any external services
- Processes all data locally

## License

This project is open source and available under the MIT License.

## Credits

This extension uses the following open-source libraries:

- [QRious](https://github.com/neocotic/qrious) - A pure JavaScript library for QR code generation created by Alasdair Mercer. Licensed under GPL-3.0.

## Support

For issues and feature requests, please use the GitHub Issues section.

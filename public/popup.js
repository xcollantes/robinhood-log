/** Typical Chrome Extensions use this file as the root for the popup but since
 * we are using React, `src/` is the rendering of the popup.
 */
chrome.tabs.

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request === "history") {
    console.log("HISTRY FROUND IN FRONTEND: POPUP>JS")
    sendResponse(true)
  }
  sendResponse(false)
})

/** React root for popup. */

import React from "react"
import ReactDOM from "react-dom/client"

import { Container } from "@mui/material"

import "./index.css"
import ToolbarButton from "./ToolbarButton"

window.chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request === "history") {
    console.log("HISTRY FROUND IN FRONTEND: INDEX.JS")
    sendResponse(true)
  }
  return true
})

const root = ReactDOM.createRoot(document.getElementById("rootExtension"))
root.render(
  <React.StrictMode>
    <Container>
      <ToolbarButton />
    </Container>
  </React.StrictMode>
)

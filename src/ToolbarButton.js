/** Creates a window in Chrome Extension toolbar. */

import { useState } from "react"
import { InsertChart } from "@mui/icons-material"
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material"

import "./ToolbarButton.css"

console.log("TOOLBAR.JS")
window.chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request === "history") {
    console.log("HISTRY FROUND IN FRONTEND: TOOLBARBUTTON>JS")
    sendResponse(true)
  }
  sendResponse(false)
})

export default function ToolbarButton() {
  // function handleButtonShowMe() {
  //   window.chrome.tabs
  //     .query({ active: true, lastFocusedWindow: true })
  //     .then((tab) => {
  //       console.log("TAB " + tab[0].id)
  //       window.chrome.tabs.sendMessage(tab[0].id, "show_graph", (response) => {
  //         if (response === "no_graph_found") {
  //           setNoGraph(true)
  //           setNoGraphMessage(
  //             cheekyErrors[
  //               Math.floor((Math.random() * 10) % cheekyErrors.length)
  //             ]
  //           )
  //         }
  //       })
  //     })
  // }

  return (
    <>
      <Card sx={{ mb: "1em" }}>
        <CardContent>Hello</CardContent>
      </Card>
    </>
  )
}

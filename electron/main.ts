import { app, BrowserWindow, ipcMain } from "electron";
// @ts-ignore
import path from "node:path";
import * as printer from "printer";

// ├─┬─┬ dist
// │ │ | index.html
// │ ├─┬ dist-electron
// │ │ ├ main.js
// │ │ └ preload.js

process.env.DIST = path.join(__dirname, "../dist");
process.env.VITE_PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, "../public");

let win: BrowserWindow | null;

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

// @ts-ignore
let workerWindow;

function createWindow() {
  win = new BrowserWindow({
    resizable: false,
    fullscreen: true,
    frame: false,
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),

    webPreferences: {
      preload: path.join(__dirname, "preload.ts"),
      nodeIntegration: true,
      contextIsolation: false,
      // nodeIntegration: true,
    },
  });

  const printers = printer.getPrinters();
  console.log(printers);

  win.webContents.on("did-finish-load", () => {
    // @ts-ignore
    win.webContents.setZoomFactor(1); // Zoom ni 100% qilib o'rnatadi
  });

  ipcMain.on("print", (event) => {
    printer.printDirect({
      data: "Hello World",
      printer: "VKP-80", // Bu erda printer nomini qo'yish
      type: "RAW",
      success: function (jobID) {
        console.log("Sent to printer with ID: " + jobID);
      },
      error: function (err) {
        console.log("Error:", err);
      },
    });
  });
  win.webContents.on("before-input-event", (event, input) => {
    if (
      (input.control || input.meta) &&
      (input.key === "+" || input.key === "-" || input.key === "0")
    ) {
      event.preventDefault(); // Ctrl/Command bilan yaqinlashtirish yoki uzoqlashtirishni to'xtatish
    }
  });

  // Open the DevTools in development mode
  if (process.env.NODE_ENV === "development") {
    // win.webContents.openDevTools();
  }

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, "index.html"));
  }
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

function triggerEventInElectron(eventName: any, data: any) {
  win && win.webContents.send(eventName, data);
}

app.whenReady().then(() => {
  createWindow();
});

// function readQRcodeData(): String | Error {}

export default triggerEventInElectron;

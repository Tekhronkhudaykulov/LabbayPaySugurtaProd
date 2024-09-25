import { app, BrowserWindow, ipcMain } from "electron";

import { exec } from "child_process";

// @ts-ignore
import path from "node:path";
import * as fs from "fs";

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

// const printerName = "VKP80";

function createWindow() {
  win = new BrowserWindow({
    fullscreen: true,
    resizable: false,
    frame: false,
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),

    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
      // nodeIntegration: true,
    },
  });

  win.webContents.on("did-finish-load", () => {
    // @ts-ignore
    win.webContents.setZoomFactor(1); // Zoom ni 100% qilib o'rnatadi
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

// const printText = (text: any) => {
//   const command = `echo "${text}" | lp -d ${printerName}`;
//   exec(command, (error, stdout, stderr) => {
//     if (error) {
//       console.error(error);
//       return;
//     }
//     if (stderr) {
//       console.error(stderr);
//       return;
//     }
//     console.log(stdout);
//   });
// };

// ipcMain.on("print-request", (event, text) => {
//   console.log(event, "eveenn");
//   console.log(text);

//   printText(event);
// });

function createPrint(checkData: any) {
  const printWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Dinamik ma'lumotlarni HTML tarkibiga qo'shish
  const contentWithStyle = `
    <html>
    <head>
      <style>
        body {
          font-family: monospace;
          padding: 5px;
          font-size: 10px; /* Kichik o'lcham, VKP 80 printerga mos */
          line-height: 1.2;
        }
        .title {
          text-align: center;
          font-size: 14px;
          font-weight: bold;
        }
        .line {
          border-bottom: 1px dashed #000;
          margin: 5px 0;
        }
        .content {
          margin-top: 10px;
        }
        .item-row {
          display: flex;
          justify-content: space-between;
        }
        .item-row p {
          margin: 0;
        }
        .footer {
          text-align: center;
          margin-top: 10px;
        }
      </style>
    </head>
    <body>
      <div class="title">${checkData.title}</div>
      <div class="line"></div>
      <div class="content">
        ${checkData.items
          .map(
            (item: any) => `
          <div class="item-row">
            <p>${item.name}</p>
            <p>$${item.price.toFixed(2)}</p>
          </div>
        `
          )
          .join("")}
        <div class="line"></div>
        <div class="item-row">
          <p><strong>Total:</strong></p>
          <p><strong>$${checkData.total.toFixed(2)}</strong></p>
        </div>
      </div>
      <div class="footer">
        <p>${checkData.thankYouMessage}</p>
      </div>
    </body>
    </html>
  `;

  // HTML ni yuklash va chop etish
  printWindow.loadURL(
    `data:text/html;charset=utf-8,${encodeURI(contentWithStyle)}`
  );

  printWindow.webContents.on("did-finish-load", () => {
    printWindow.webContents.print(
      {
        silent: true,
        printBackground: true,
      },
      (error) => {
        if (error) {
          console.error("Print Error:", error);
        } else {
          console.log("Print job sent to VKP 80!");
        }
        printWindow.close();
      }
    );
  });
}

// IPC bilan printerga buyruq yuborish
ipcMain.on("print-check", (event, checkData) => {
  console.log(event);

  createPrint(checkData);
});

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

ipcMain.on("print-command-request", (data) => {
  printHTMLContent(data);
});

function triggerEventInElectron(eventName: any, data: any) {
  win && win.webContents.send(eventName, data);
}

app.whenReady().then(() => {
  createWindow();
});

function createPrintWindow(htmlContent: any) {
  const printWindow: any = new BrowserWindow({
    show: false,
    // width: 304,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  const metaTag =
    '<meta name="viewport" content="width=device-width, initial-scale=1.0" />';

  const style = `
        <style>
        html, body {
            margin: 0 !important;
            padding: 0 !important;
            display: flex;
            align-items: flex-start;
            justify-content: center;
        }
        .check {
            width: 100%;
            padding: 1rem;
            margin-top: -2rem;
        }
        .strong {
            font-family: sans-serif;
            font-weight: 700;
          font-size: 10mm;
        }
        .check-welcome {
            font-family: sans-serif;
          font-size: 18mm;
          line-height: 1;
          text-align: center;
          margin-bottom: 8px;
        }
        .check-id {
            font-family: sans-serif;
          font-size: 40mm;
          line-height: 1;
          font-weight: 900;
        }
        .check-qr-block {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 2rem;
          text-align: center;
        }
        .check-block {
          margin-bottom: 4px;
        }
        .check-text {
            font-family: sans-serif;
          font-size: 10mm;
          line-height: 1;
          margin-bottom: 4px;
        }
        .thanks {
            font-family: sans-serif;
            font-size: 13mm;
          padding: 6px; 
          text-align: center;
          margin-top: 6px;
          margin-bottom: 1rem;
        }
        .qr {
          width: 320px;
          height: 320px;
        }
        .qr img {
            width: 100%;
            height: 100%;
        }
        .check-list {
          padding-left: 20px;
          list-style: auto;
        }
        .check-list li {
            font-family: sans-serif;
            font-size: 10mm;
          line-height: 1.2;
        }
        </style>
    `;

  const contentWithStyle = `<html><head>${metaTag}${style}</head><body>${htmlContent}</body></html>`;

  printWindow.loadURL(
    `data:text/html;charset=utf-8,${encodeURI(contentWithStyle)}`
  );

  printWindow.webContents.on("did-finish-load", () => {
    // Print to PDF
    printWindow.webContents
      .printToPDF({})
      .then((data: any) => {
        const tempPDFPath = "123123123.pdf";

        fs.writeFile(tempPDFPath, data, (error) => {
          if (error) {
            console.error("Failed to save PDF:", error);
            return;
          }

          // Print the PDF
          printWindow.webContents.print(
            {
              silent: true,
              margins: { marginType: "printableArea" },
              pagesPerSheet: 1,
              copies: 1,
              filePath: tempPDFPath,
            },
            (error: any) => {
              // printWindow.webContents.print({ silent: true, filePath: tempPDFPath }, (error) => {

              if (error) {
                console.error("Failed to print PDF:", error);
              } else {
                console.log("PDF printed successfully!");
              }

              // Delete the temporary PDF file
              fs.unlink(tempPDFPath, (error) => {
                if (error) {
                  console.error("Failed to delete temporary PDF file:", error);
                }
              });
            }
          );
        });
        // @ts-ignore
      })
      .catch((e: any) => {
        console.log("Print to PDF");
        if (e) {
          console.error("Failed to generate PDF:", e);
          return;
        }
      });
  });

  return printWindow;
}

function printHTMLContent(htmlContent: any) {
  createPrintWindow(htmlContent);
}

// function readQRcodeData(): String | Error {}

export default triggerEventInElectron;

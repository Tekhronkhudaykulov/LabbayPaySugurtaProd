import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  printCheck: (data) => ipcRenderer.send("print-check", data),
});

function domReady(condition) {
  return new Promise((resolve) => {
    if (condition.includes(document.readyState)) {
      resolve(true);
    } else {
      document.addEventListener("readystatechange", () => {
        if (condition.includes(document.readyState)) {
          resolve(true);
        }
      });
    }
  });
}

domReady();

window.onmessage = (ev) => {
  ev.data.payload === "removeLoading";
};

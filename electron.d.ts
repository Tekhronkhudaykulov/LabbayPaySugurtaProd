import "electron";

declare global {
  interface Window {
    electronAPI: {
      print: () => void;
    };
  }
}

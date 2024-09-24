export interface ElectronAPI {
  handlePrinter: (
    text: string
  ) => Promise<{ success: boolean; data?: any; message?: string }>;
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

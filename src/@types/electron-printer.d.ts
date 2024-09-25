declare module "electron-printer" {
  interface PrintOptions {
    silent?: boolean;
    printBackground?: boolean;
    deviceName?: string;
  }

  interface Printer {
    print(
      options: { data: string; options?: PrintOptions },
      callback: (error?: any) => void
    ): void;
    getPrinters(): string[];
  }

  const printer: Printer;
  export default printer;
}

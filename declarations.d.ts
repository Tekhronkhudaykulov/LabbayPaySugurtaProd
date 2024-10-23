declare module "printer" {
  export function getPrinters(): any;
  export function printDirect(options: {
    data: string;
    printer: string;
    type: string;
    success: (jobID: number) => void;
    error: (err: any) => void;
  }): void;
}

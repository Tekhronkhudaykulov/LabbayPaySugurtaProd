const handlePrint = async () => {
  const ipcRenderer = window.require("electron").ipcRenderer;

  function sendCommandToWorker(content: any) {
    ipcRenderer.send("printPDF", content);
  }

  const data = {
    title: "Labbay Pay",
    orderNumber: 1,
    dateTime: new Date().toLocaleString(),
    client: "Texron",
    totalLabel: "Итого",
    totalValue: "20 0000",
    message: "Спасибо за покупку!",
  };

  sendCommandToWorker(data);
};

export default handlePrint;

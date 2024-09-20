const handlePrint = async () => {
  const ipcRenderer = window.require("electron").ipcRenderer;

  function sendCommandToWorker(content: any) {
    ipcRenderer.send("printPDF", content);
  }

  // "key-value" shaklida JSON obyekt
  const data = {
    title: "Labbay Pay",
    orderNumber: 1,
    dateTime: new Date().toLocaleString(), // Sana va vaqt
    client: "Texron",
    totalLabel: "Итого",
    totalValue: "20 0000",
    message: "Спасибо за покупку!",
  };

  // "sendCommandToWorker" orqali obyektni jo'natamiz
  sendCommandToWorker(data);
};

export default handlePrint;

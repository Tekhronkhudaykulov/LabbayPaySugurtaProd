const { ipcRenderer } = window.require("electron");

const printCheck = () => {
  // Check uchun ma'lumotlar
  const checkData = {
    kioskId: "12345",
    address: "Kiosk Address, City, District",
    list: [
      { key: "Service", value: "Product Purchase" },
      { key: "Payment method", value: "Cash" },
      { key: "Total amount", value: "50000 sum" },
      { key: "Transaction number", value: "TXN123456" },
      // Qo'shimcha ma'lumotlar
    ],
  };

  // IPC orqali Electron asosiy jarayoniga ma'lumot yuborish
  ipcRenderer
    .invoke("print-check", checkData)
    .then((result) => {
      console.log("Check chiqarildi:", result);
    })
    .catch((error) => {
      console.error("Xatolik:", error);
    });
};

export default printCheck;

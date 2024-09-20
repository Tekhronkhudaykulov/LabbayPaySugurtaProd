const { ipcRenderer } = window.require("electron");

const handlePrint = () => {
  const checkData = {
    kioskId: 1,
    address: "Tashkent", // Added comma here
    list: [
      { key: "Xizmat", value: "1" },
      { key: "Login", value: "operator" },
      { key: "To'lov turi", value: "Naqd" },
      { key: "Sana va vaqt", value: new Date().toLocaleString() },
      { key: "To'lov summasi", value: 100000 + " so'm" },
      {
        key: "Umumiy qiymat",
        value: 200000 + " so'm",
        bold: true,
      },
      {
        key: "To'lov holati",
        value: "TOLANGAN",
        bold: true,
      },
    ],
  };

  ipcRenderer.send("print-check", JSON.stringify(checkData));
};

export default handlePrint;

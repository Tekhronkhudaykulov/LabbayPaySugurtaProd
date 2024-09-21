import { ipcRenderer } from "electron";

const handleRunCheck = () => {
  const checkData = {
    check: {
      name: "check_name",
      amount: 100,
      currency: "USD",
      date: "2024-09-21",
      details: {
        item1: {
          description: "Item 1 description",
          quantity: 2,
        },
        item2: {
          description: "Item 2 description",
          quantity: 3,
        },
      },
    },
  };

  ipcRenderer.send("run-check", checkData);
};

export default handleRunCheck;

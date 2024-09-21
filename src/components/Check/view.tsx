// App.js (React komponenti)
import React, { useEffect, useState } from "react";
import { ipcRenderer } from "electron";

const Check = () => {
  const [output, setOutput] = useState("");
  console.log(output);

  useEffect(() => {
    ipcRenderer.on("command-output", (event, data) => {
      console.log(event);

      setOutput(data);
    });

    return () => {
      ipcRenderer.removeAllListeners("command-output");
    };
  }, []);

  const runCheck = () => {
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

  runCheck();
};

export default Check;

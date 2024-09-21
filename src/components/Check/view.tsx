
import  { useState } from "react";

const { ipcRenderer } = window.require("electron"); // ipcRenderer-ni chaqirish

const Check = () => {
  const [checkData, setCheckData] = useState(null);
  const [error, setError] = useState(null);

  const sendCheckRequest = () => {
    const data = {
      // Kiosk yoki boshqa ma'lumotlarni to'ldirish
      kioskId: "123",
      address: "Some address",
    };

    // Electronga check yuborish
    ipcRenderer.send("run-check", data);

    // Javobni olish
    ipcRenderer.once("check-output", (event, response) => {
      console.log(event);
      
      if (response.error) {
        setError(response.error);
      } else if (response.stderr) {
        setError(response.stderr);
      } else {
        setCheckData(response.stdout); // Check natijasini saqlash
      }
    });
  };

  return (
    <div>
      <button onClick={sendCheckRequest}>Run Check</button>

      {error && <div>Error: {error}</div>}
      {checkData && (
        <div>
          <h3>Check Output:</h3>
          <pre>{checkData}</pre>
        </div>
      )}
    </div>
  );
};

export default Check;

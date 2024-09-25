const { exec } = require("child_process");
const { stdout, stderr } = require("process");

const printerName = "VKP80";

const printText = (text) => {
  const command = `echo "${text}" | lp -d ${printerName}`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(error.message);
      return;
    }
    if (stderr) {
      console.log(stderr);
      return;
    }
    console.log(stdout);
  });
};

printText("Hello world");

const express = require("express");
const { exec } = require("child_process");
const cors = require("cors");

const app = express();
const port = 3001;
const printerName = "VKP80";

// JSON body parsing uchun middleware
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.post("/print", (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).send("Text is required");
  }

  const command = `echo "${text}" | lp -d ${printerName}`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).send(error.message);
    }
    if (stderr) {
      return res.status(500).send(stderr);
    }
    res.send(stdout);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

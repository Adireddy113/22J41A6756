const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 9090;

app.use(express.json()); // 🔑 Allows POST body parsing

app.post("/save", (req, res) => {
  const content = req.body.content;

  if (!content) {
    return res.status(400).send("❌ content is required");
  }

  fs.writeFileSync("output.txt", content); // Save content to file
  res.send("✅ File saved successfully!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

const express = require("express");
const app = express();
let counter = 0;

app.get("/pingpong", (req, res) => {
    try {
      console.log("Received pingpong request");
      counter++;
      res.json({ pongCount: counter });
    } catch (error) {
      console.error("Error handling pingpong request:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
app.listen(9000, () => {
  console.log("Ping-pong server listening on port 9000,");
});

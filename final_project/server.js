const express = require("express");
const app = express();
//const path = require('path');
const dataRoutes = require("./routes/index");

app.set("view engine", "ejs"); // Set EJS as template engine to render the data

app.use(express.static("public")); // Serve static files for website

app.use("/", dataRoutes); // Load routes accordingly for the pages

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

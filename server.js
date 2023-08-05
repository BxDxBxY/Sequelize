import express from "express";
import routes from "./Routes/index.js";

const app = express();
const PORT = 3002;

app.get("/", (req, res) => res.send("Hello Animals"));
app.use(express.json())
app.use(routes)


app.listen(PORT, console.log("Server listening on port " + PORT));

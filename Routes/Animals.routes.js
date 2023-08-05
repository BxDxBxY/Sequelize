import { Router } from "express";
import { DELETE, GETALL, GETONE, POST, PUT } from "../Controllers/animals.js";

const app = new Router();

app
  .get("/animals", GETALL)
  .get("/animals/:id", GETONE)
  .put("/animals/:id", PUT)
  .delete("/animals/:id", DELETE)
  .post("/animals", POST);
export default app;

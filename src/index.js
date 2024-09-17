import express from "express";
import { testConnection } from "./database/data.js";
const app = express();

//Variables
app.set("port", process.env.PORT || 5000);
testConnection()


//Servidor
app.listen(app.get("port"), () => {
  console.log("Server run port in", app.get("port"));
});

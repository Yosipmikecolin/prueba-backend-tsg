import express from "express";
const app = express();

//Variables
app.set("port", process.env.PORT || 5000);


//Servidor
app.listen(app.get("port"), () => {
  console.log("Server run port in", app.get("port"));
});

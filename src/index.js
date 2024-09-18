import express from "express";
import routePlaces from "./routes/place.route.js";
const app = express();

//VARIABLES
app.set("port", process.env.PORT || 5000);

//MIDLEWARES
app.use(express.json());

//ROUTES
app.use("/api", routePlaces);

//SERVIDOR
app.listen(app.get("port"), () => {
  console.log("Server run port in", app.get("port"));
});

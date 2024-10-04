import express from "express";
import cors from "cors";
import routePlaces from "./routes/place.route.js";
import routeVehicle from "./routes/vehicle.route.js";
import routeIncome from "./routes/income.route.js";
import "./models/associations.js";
const app = express();
//VARIABLES
app.set("port", process.env.PORT || 5000);

//MIDLEWARES
app.use(express.json());
app.use(cors());
//synchronizeData();

//ROUTES
app.use("/api", routeVehicle);
app.use("/api", routePlaces);
app.use("/api", routeIncome);

//SERVIDOR
app.listen(app.get("port"), () => {
  console.log("Server run port in", app.get("port"));
});

import { Router } from "express";
import { getVehicles, postVehicle } from "../controllers/vehicle.controller.js";
const route = Router();

route.post("/register-vehicle", postVehicle);
route.get("/get-vehicles", getVehicles);

export default route;

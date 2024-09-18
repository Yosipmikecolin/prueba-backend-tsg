import { Router } from "express";
import {
  getVehicles,
  postVehicle,
  putVehicle,
} from "../controllers/vehicle.controller.js";
const route = Router();

route.get("/get-vehicles", getVehicles);
route.post("/updated-vehicle", putVehicle);
route.post("/register-vehicle", postVehicle);

export default route;

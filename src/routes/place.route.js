import { Router } from "express";
import { getPlaces, postPlace } from "../controllers/place.controller.js";
const route = Router();

route.post("/create-place", postPlace);
route.get("/get-places", getPlaces);

export default route;

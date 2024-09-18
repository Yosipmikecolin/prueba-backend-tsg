import { Router } from "express";
import { getIncome, postIncome } from "../controllers/income.controller.js";
const route = Router();

route.post("/register-income", postIncome);
route.get("/get-incomes", getIncome);

export default route;

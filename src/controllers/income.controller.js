import Income from "../models/income.js";
import Place from "../models/place.model.js";
import Vehicle from "../models/vehicle.model.js";

export const getIncome = async (_req, res) => {
  try {
    const incomes = await Income.findAll();
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: `Error ${error}` });
  }
};

export const postIncome = async (req, res) => {
  try {
    const data = req.body;
    await Income.create(data);
    await Place.update({ status: "empty" }, { where: {} });
    await Vehicle.destroy({ where: {} });
    res.status(201).json({ message: `Income created successfully` });
  } catch (error) {
    res.status(500).json({ message: `Error ${error}` });
  }
};

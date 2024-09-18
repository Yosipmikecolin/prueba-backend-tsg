import Vehicle from "../models/vehicle.model.js";

export const getVehicles = async (_req, res) => {
  try {
    const places = await Vehicle.findAll();
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ message: `Error ${error}` });
  }
};

export const postVehicle = async (req, res) => {
  try {
    const data = req.body;
    const response = await Vehicle.create(data);
    const { plate } = response.dataValues;
    res.status(201).json({ message: `Vehicle ${plate} created successfully` });
  } catch (error) {
    res.status(500).json({ message: `Error ${error}` });
  }
};

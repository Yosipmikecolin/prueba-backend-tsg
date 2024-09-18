import Place from "../models/place.model.js";

export const getPlaces = async (_req, res) => {
  try {
    const places = await Place.findAll();
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ message: `Error ${error}` });
  }
};

export const postPlace = async (req, res) => {
  try {
    const data = req.body;
    const response = await Place.create(data);
    const { place } = response.dataValues;
    res.status(201).json({ message: `Place ${place} created successfully` });
  } catch (error) {
    res.status(500).json({ message: `Error ${error}` });
  }
};

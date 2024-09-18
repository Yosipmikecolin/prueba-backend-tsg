import Place from "../models/place.model.js";

export const getPlaces = (req, res) => {
  console.log("Obteniendo plazas");
  res.json({ message: "Obteniendo creadas" });
};

export const postPlace = async (req, res) => {
  try {
    const data = req.body;
    await Place.create(data);
    res.status(201).json({ message: "Place created successfully" });
  } catch (error) {
    res.status(500).json({ message: `Error ${error}` });
  }
};

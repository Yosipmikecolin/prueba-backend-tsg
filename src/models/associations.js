import Vehicle from "./vehicle.model.js";
import Place from "./place.model.js";

// Definir la relación uno a uno
Vehicle.belongsTo(Place, {
  foreignKey: {
    name: "placeId",
    allowNull: false,
  },
  as: "place",
});

Place.hasOne(Vehicle, {
  foreignKey: "placeId",
  as: "vehicle",
});

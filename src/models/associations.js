import Vehicle from './vehicle.model.js';
import Place from './place.model.js';

// Definir las relaciones entre los modelos
Vehicle.belongsTo(Place, { foreignKey: 'placeId', as: 'place' });
Place.hasOne(Vehicle, { foreignKey: 'placeId', as: 'vehicle' });

import { DataTypes } from "sequelize";
export const Place = sequelize.define(
  "Place",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, // Plaza libre por defecto
    },
    place: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false, // 'Motocicleta' o 'Vehículo Ligero'
    },
  },
  {
    tableName: "places",
    timestamps: false,
  }
);

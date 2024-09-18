import { DataTypes } from "sequelize";
import { sequelize } from "../database/data.js";

const Place = sequelize.define(
  "Place",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: false,
    },
    place: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "places",
    timestamps: false,
  }
);

export default Place;

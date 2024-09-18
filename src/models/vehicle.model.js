import { DataTypes } from "sequelize";
import { sequelize } from "../database/data.js";

const Vehicle = sequelize.define(
  "Vehicle",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    plate: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    entry_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    exit_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    discount: {
      type: DataTypes.STRING,
      defaultValue: false,
    },
    placeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "vehicle",
    timestamps: false,
  }
);

export default Vehicle;

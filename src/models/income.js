import { DataTypes } from "sequelize";
import { sequelize } from "../database/data.js";

const Income = sequelize.define(
  "Income",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
    },
    total: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "income",
    timestamps: false,
  }
);

export default Income;

import { DataTypes } from "sequelize";
export const Vehicle = sequelize.define(
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
      defaultValue: Sequelize.NOW,
    },
    exit_time: {
      type: DataTypes.DATE,
      allowNull: true, // Se actualizará cuando el vehículo salga
    },
    discount: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "vehicle",
    timestamps: false,
  }
);

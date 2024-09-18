import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "railway",
  "root",
  "mFWnxNzcJuFXAUMfQiNokpxZagCTKCvn",
  {
    host: "roundhouse.proxy.rlwy.net",
    port: 43912,
    dialect: "mysql",
  }
);

export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos exitosa");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
};

export const synchronizeData = async () => {
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log("Database & tables created!");
    })
    .catch((err) => {
      console.error("Unable to create tables:", err);
    });
};

import { Sequelize } from "sequelize";
export const sequelize = new Sequelize(
  "railway",
  "root",
  "cATmdfLaruVZvHKZJeXKwBXTdLDoSnPF",
  {
    host: "junction.proxy.rlwy.net",
    port: 33270,
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
    .sync({ force: true })
    .then(() => {
      console.log("Database & tables created!");
    })
    .catch((err) => {
      console.error("Unable to create tables:", err);
    });
};

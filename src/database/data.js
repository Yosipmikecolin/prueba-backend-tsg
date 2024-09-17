import { Sequelize } from "sequelize";

const connect_data = new Sequelize(
  "railway",
  "root",
  "mFWnxNzcJuFXAUMfQiNokpxZagCTKCvn",
  {
    host: "roundhouse.proxy.rlwy.net",
    port: 43912,
    dialect: "mysql",
  }
);

export default connect_data;

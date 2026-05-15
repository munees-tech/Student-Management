import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD,

  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,
    dialect: "mysql",
  },
);

export const connectDb = async () => {
  try {
    await db.authenticate();
    console.log("Data Base connected Succesfully");
  } catch (error) {
    console.log(`Data Base connected Error ${error}`);
  }
};

connectDb();

export default db;

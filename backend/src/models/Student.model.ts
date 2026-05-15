import { DataTypes } from "sequelize";
import db from "../utils/db";

const studentData = db.define("studentData", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.CHAR(50),
  },
  email: {
    type: DataTypes.CHAR(40),
    unique: true,
  },
},{tableName:"studentData"});

export default studentData;

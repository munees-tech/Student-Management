import { DataTypes } from "sequelize";
import db from "../utils/db";

const StudentDetail = db.define(
  "StudentDetail",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dept: {
      type: DataTypes.CHAR(30),
    },
    address: {
      type: DataTypes.CHAR(50),
    },
  },
  { tableName: "StudentDetail" },
);

export default StudentDetail;
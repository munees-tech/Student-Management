import express from "express";

import {
  addstudentController,
  deleteStudent,
  getstudentController,
  updateStudentDetail,
  getstudentByIdController,
} from "../controllers/student.controller";

const route = express.Router();

// GET all students
route.get("/", getstudentController);

// GET single student by ID
route.get("/edit/:id", getstudentByIdController);

// ADD student
route.post("/", addstudentController);

// UPDATE student
route.put("/update/:id", updateStudentDetail);

// DELETE student
route.delete("/delete/:id", deleteStudent);

export default route;
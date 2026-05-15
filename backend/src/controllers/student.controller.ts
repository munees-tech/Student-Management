import { Request, Response } from "express";
import studentData from "../models/Student.model";
import StudentDetail from "../models/studentDetail.model";

export const getstudentController = async (req: Request, res: Response) => {
  try {
    const student = await studentData.findAll({
      include: {
        model: StudentDetail,
        as: "StudentDetail",
      },
    });

    res.status(200).json({ student });
  } catch (error) {
    console.log(`Error in getstudentController ${error}`);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
export const getstudentByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const student = await studentData.findOne({
      where: {
        id,
      },

      include: {
        model: StudentDetail,
        as: "StudentDetail",
      },
    });

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json({ student });
  } catch (error) {
    console.log(`Error in getstudentByIdController ${error}`);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const addstudentController = async (req: Request, res: Response) => {
  try {
    const { name, email, dept, address } = req.body;

    const existingStudent = await studentData.findOne({
      where: { email },
    });

    if (existingStudent) {
      return res.status(400).json({
        message: "Student already exists",
      });
    }

    const newStudent = await studentData.create({
      name,
      email,
    });

    await StudentDetail.create({
      studentId: newStudent.getDataValue("id"),
      dept,
      address,
    });

    res.status(201).json({
      message: "Student added successfully",
    });
  } catch (error) {
    console.log(`Error in addstudentController ${error}`);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const updateStudentDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { name, email, dept, address } = req.body;

    await studentData.update(
      {
        name,
        email,
      },
      {
        where: { id },
      },
    );

    await StudentDetail.update(
      {
        dept,
        address,
      },
      {
        where: { studentId: id },
      },
    );

    res.status(200).json({
      message: "Student updated successfully",
    });
  } catch (error) {
    console.log(`Error in updateStudentDetail ${error}`);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await studentData.destroy({
      where: { id },
    });

    await StudentDetail.destroy({
      where: { studentId: id },
    });

    res.status(200).json({
      message: "Student deleted successfully",
    });
  } catch (error) {
    console.log(`Error in deleteStudent ${error}`);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

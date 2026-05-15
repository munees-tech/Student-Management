import studentData from "./Student.model";
import StudentDetail from "./studentDetail.model";

studentData.hasMany(StudentDetail, {
  foreignKey: "studentId",
  as: "StudentDetail",
});

StudentDetail.belongsTo(studentData , {foreignKey:"studentId" , as:"studentData"})
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StudentList } from "./components/StudentList";
import { StudentDetail } from "./components/StudentDetail";
import { StudentForm } from "./components/StudentForm";
import { UpdateStudent } from "./components/UpdateStudent";

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<StudentList />} />

        
        <Route path="/student/:id" element={<StudentDetail />} />

        
        <Route path="/create" element={<StudentForm />} />

        
        <Route path="/edit/:id" element={<UpdateStudent />} />

        
        <Route path="*" element={<StudentList />} />
      </Routes>
    </Router>
  );
};

export default App;

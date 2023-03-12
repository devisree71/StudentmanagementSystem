import "./App.css";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import PagenotFound from "./Components/PagenotFound";
import Dashboard from "./Components/Dashboard";
import Students from "./Components/Students";
import Studentdetails from "./Components/Studentdata";
import Courses from "./Components/Courses";

import Grades from "./Components/Grades";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="students" element={<Students />}>
          <Route path=":id" element={<Studentdetails />} />
        </Route>
        <Route path="courses" element={<Courses />} />
        <Route path="grades" element={<Grades />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </div>
  );
}

export default App;

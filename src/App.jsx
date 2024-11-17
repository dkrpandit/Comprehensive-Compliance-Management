/* eslint-disable react/no-unescaped-entities */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout"
// import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import StudentDashboard from "./pages/student/StudentDashboard"
import WardenDashboard from './pages/ warden/WardenDashboard';
const App = () => {
  return (
     <BrowserRouter>
     <MainLayout />
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<Login />} />
        <Route path="/warden/Dashboard" element={<WardenDashboard />} />
        <Route path="/student/Dashboard" element={<StudentDashboard />} />
        {/* <Route path="/abcd/abcd" element={<ABCD />} /> */}
        <Route path="*" element={<div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
      <h1 className="text-3xl font-bold text-red-500">404 Page doesn't exist</h1>
    </div>} /> {/* Catch-all for undefined routes */}
      </Routes>
    </BrowserRouter>
  )
}
export default App

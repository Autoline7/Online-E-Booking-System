import LogIn from "./components/LogInComp/LogIn"
import SignUp from "./components/SignUpComp/SignUp"
import AdminPageManageMovies from "./pages/AdminPageManageMovies";
import UserPage from "./pages/UserPage";
import AdminSignUp from "./components/Admin-SignUpComp/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPageManageUsers from "./pages/AdminPageManageUsers";
import AdminPageManagePromoCodes from "./pages/AdminPageManagePromoCodes";
import HomePage from "./pages/HomePage";
function App() {

  return (
        <Router>
         <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Sign-Up" element={<SignUp />}/>
          <Route path="/Log-In" element={<LogIn />}/>
          <Route path="/Admin-Sign-Up" element={<AdminSignUp />}/> 

          <Route path="/Admin-DashBoard-Manage-Movies" element={<AdminPageManageMovies />} />
          <Route path="/Admin-DashBoard-Manage-Users" element={<AdminPageManageUsers />} />
          <Route path="/Admin-DashBoard-Manage-PromoCodes" element={<AdminPageManagePromoCodes />} />
          <Route path="/User-DashBoard" element={<UserPage />} />
         </Routes>
        </Router>
  )
}

export default App

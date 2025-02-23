import LogIn from "./components/LogInComp/LogIn"
import SignUp from "./components/SignUpComp/SignUp"
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import AdminSignUp from "./components/Admin-SignUpComp/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
        <Router>
         <Routes>
          <Route path="/Sign-Up" element={<SignUp />}/>
          <Route path="/Log-In" element={<LogIn />}/>
          <Route path="/Admin-Sign-Up" element={<AdminSignUp />}/> 


          <Route path="/Admin-DashBoard" element={<AdminPage />} />
          <Route path="/User-DashBoard" element={<UserPage />} />
         </Routes>
        </Router>
  )
}

export default App

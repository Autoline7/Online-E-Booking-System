import { useEffect } from "react";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "./AdminPage.css";

const AdminPage = () => {
  const navigate = useNavigate();


  useEffect(() => {//if user is not signed in take them to log in
    onAuthStateChanged(auth, (user) => {
      if(!user){
        navigate('/Log-In');
      }
    })
  }, [auth, navigate]);

  function logout() {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error.message);
      });
  }


  return (
    <div id="admin">
      Admin Page
      <button onClick={logout}>Log Out</button>
    </div>
  )
}

export default AdminPage

import { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; 
import "./AdminPage.css";
import Sidebar from "../components/AdminPageComp/Sidebar";
import Header from "../components/AdminPageComp/Header";
import AdminNav from "../components/AdminPageComp/AdminNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminUser from "../components/AdminPageComp/AdminUser";

const AdminPageManageUsers = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {//if user is not signed in take them to log in
    onAuthStateChanged(auth, async (user) => {
      if(!user){
        navigate('/Log-In');
      } else{
        setUser(user);
        const userRef = doc(db, "users", user.uid); // assuming the user's data is stored under "users" collection
        const userSnapshot = await getDoc(userRef);
        if (userSnapshot.exists()) {
          setUserData(userSnapshot.data()); // Set the user data
        }
        setLoading(false);
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
      <Sidebar />
      <div className="admin__container">
        <Header loading={loading} userData={userData} />
        <AdminNav />
        <hr />
        
        <div className="admin__users__container">
            <div className="admin__users">
              <AdminUser />
              <AdminUser />
              <AdminUser />
              <AdminUser />
              <AdminUser />
              <AdminUser />      
            </div>
          </div>

      </div>
    </div>
  )
}

export default AdminPageManageUsers

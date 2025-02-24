import InputField from "./InputField.jsx"
import SocialSignUp from "./SocialSignUp.jsx"
import { auth, db } from "../../firebase/firebase.js"
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../LogIn-SignUp.css";
import SimpleAlert from "../SimpleAlert";

const SignUp = () => {
    const[name , setName] = useState("");
    const[email , setEmail] = useState("");
    const[password , setPassword] = useState("");
    const[phone , setPhone] = useState("");

    const[user, setUser] = useState(null);
    const navigate = useNavigate();

    const[showAlert, setShowAlert] = useState(false);

    const handleAlert = () =>{
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    };


    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if(user){
          setUser(user);
        }
      })
    }, []);


    async function signUp(event) {
      event.preventDefault();
    
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
    
        // Store additional user data in Firestore
        await setDoc(doc(db, "users", user.uid), {
          name: name,
          email: email,
          phone: phone,
          createdAt: new Date(),
          role : "user",
        });
        handleAlert();
        setTimeout(() => navigate('/User-Dashboard'), 3000)
      } catch (error) {
        console.error("Error signing up:", error.message);
      }
    }


  return (
    <div id="Log-In-Sign-Up" >
      <div className="login-container">
          <h2 className="form-title">Sign Up with</h2>
          <SocialSignUp />

          <p className="separator"><span>or</span></p>
          
          <h2 className="form-title">Create Account</h2>
          <form onSubmit={signUp} action="#" className="login-form">
            <p className="registration__fields">* Required *</p>
            <InputField value={name}  type="text" placeholder="Name" icon="person" onChange={(e) => setName(e.target.value)}  /> 
            <p className="registration__fields">* Required *</p>
            <InputField value={email} type="email" placeholder="Email address" icon="mail" onChange={(e) => setEmail(e.target.value)}  />
            <p className="registration__fields">* Required *</p>
            <InputField value={password} type="password" placeholder="Password.....(6 >= characters)" icon="lock" onChange={(e) => setPassword(e.target.value)}  />
            <p className="registration__fields">* Required *</p>
            <InputField value={phone} type="tel" placeholder="Phone Number" icon="call" onChange={(e) => setPhone(e.target.value)} />
            
             <button type="submit" className="login-button">Create Account</button>
           </form>

           <p className="signup-text">Already have an account? <a href="/Log-In">Login now</a></p>
           {showAlert && <SimpleAlert />}
        </div>
      </div>
  )
}

export default SignUp

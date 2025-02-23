import InputField from "./InputField.jsx"
import SocialSignUp from "./SocialSignUp.jsx"
import { auth, db } from "../../firebase/firebase.js"
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../LogIn-SignUp.css";

const AdminSignUp = () => {
    const[name , setName] = useState("");
    const[email , setEmail] = useState("");
    const[password , setPassword] = useState("");
    const[phone , setPhone] = useState("");
    const[givenSecPass, setGivenSecPass] = useState("");

    const[user, setUser] = useState(null);
    const navigate = useNavigate();


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
          role : "admin",
        });
    
        console.log("User signed up & data stored in Firestore:", user);
        navigate('/Admin-Dashboard');
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
            <InputField value={name}  type="text" placeholder="Name" icon="person" onChange={(e) => setName(e.target.value)}  />
            <InputField value={email} type="email" placeholder="Email address" icon="mail" onChange={(e) => setEmail(e.target.value)}  />
            <InputField value={password} type="password" placeholder="Password.....(6 >= characters)" icon="lock" onChange={(e) => setPassword(e.target.value)}  />
            <InputField value={phone} type="tel" placeholder="Phone Number" icon="call" onChange={(e) => setPhone(e.target.value)} />
            <InputField value={givenSecPass} type="password" placeholder="Admin Security Password.....(6 >= characters)" icon="lock" onChange={(e) => setGivenSecPass(e.target.value)}  />


            <button disabled={givenSecPass!=="admin123"} type="submit" className="login-button">Create Account</button>
           </form>

           <p className="signup-text">Already have an account? <a href="/Log-In">Login now</a></p>
          
        </div>
      </div>
  )
}

export default AdminSignUp

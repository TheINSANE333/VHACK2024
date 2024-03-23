import './LoginSignUp.css'
import React, {useState} from 'react'
import App from "./App"

//import the images from asset
import email_icon from './assets/email_icon.png'
import password_icon from './assets/password_icon.png'
import user_icon from './assets/user_icon.png'

const LoginSignup = (onLinkClick=handleClick) => {

  const [action, setAction] = useState("Sign Up"); //Usestate is react tool that provides a variable and a function to set data on the variable
  //here initializing the variable with 'sign up'
  //whenever var updated the front end also get updated

  const handleClick = (screenName) => {
    onLinkClick(screenName);
    };

  return (
    <div className='container'>
         <div className='header'>
          <div className="text">{action}</div>
          <div className={action=="Login"? "underline": "underline long"}></div>
         </div>
         <div className="inputs">
          {action == "Login"?
          <div/>: 
          <div className="input">
            <img className= "icon" src={user_icon} alt=""/>
            <input type="text" placeholder="Name"/>
          </div>}
          <div className="input">
            <img className= "icon"  src={email_icon} alt=""/>
            <input type="email" placeholder="Email ID"/>
          </div>
          <div className="input">
            <img className= "icon" src={password_icon}  alt=""/>
            <input type="password" placeholder="Password"/>
          </div>
          {action == "Sign Up"?
          <div/>:
          <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
          <div className="submit-container">
            <div className={action =="Sign Up"?"submit": "submit gray"} onClick={() =>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action =="Login"?"submit": "submit gray"} onClick={() =>{setAction("Login"); handleClick("Dashboard");}}>Login</div>
          </div>
         </div>
    </div>
  )
}

export default LoginSignup

//three input div containers
//first one for the name, second for email, third for password (see the input type for the purpose of the div)
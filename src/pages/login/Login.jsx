import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";
import { axiosInstance } from "../../help";


export default function Login() {
  const userRef= useRef();
  const passwordRef= useRef();
  const { dispatch, isFetching}= useContext(Context)

  const handleSubmit = async (e)=>{
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
    try{
      const res= await axiosInstance.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({type: "LOGIN_SUCCESS", payload: res.data});
    }catch(err){
      dispatch({type: "LOGIN_FAILURE"});
    }
  };



  return (
    <div className="login">
        <form className="loginForm" onSubmit={handleSubmit}>
            <span className="loginTitle">Login</span>
            <label >Username</label>
            <input
             type="text"
             placeholder="Enter username..."
             ref={userRef}
            />
            <label >Password</label>
            <input
             type="text"
            placeholder="Enter password..."
            ref={passwordRef}
            />
            <button className="loginButton" type="submit" disable={isFetching}>
              Login
            </button>
        </form>
        <button className="registerButton">
        <Link to="/register" className="link">REGISTER</Link>
        </button>
    </div>
  )
}

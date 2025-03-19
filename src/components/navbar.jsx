import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoo.png"
import "./navbar.css"

const Navbar = ()=>{
    return(
        <>
        <div className="navbar">

        <Link to={"/home"}><img src={logo} alt="logo"/></Link>
        <Link to={"/home"}> <a>Home</a></Link>
        <Link to={"/project"}><a>Project</a></Link>
        <Link to={"/service"}><a>Service</a></Link>
        <Link to={"/about"}><a>About</a></Link>
        <Link to={"/blog"}><a>Blog</a></Link>



        </div>


        </>
    )
}
export default Navbar;
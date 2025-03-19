import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoo.png"

const Navbar = ()=>{
    return(
        <>
        <Link to={"/home"}><img src={logo} alt="logo"/></Link>
        <Link to={"/home"}>Home</Link>
        <Link to={"/project"}>Project</Link>
        <Link to={"/service"}>Service</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/blog"}>Blog</Link>


        </>
    )
}
export default Navbar;
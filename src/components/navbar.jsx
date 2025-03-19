import { Link } from "react-router-dom";


const Navbar = ()=>{
    return(
        <>
        <Link to={"/home"}>Home</Link>
        <Link to={"/project"}>Project</Link>
        <Link to={"/service"}>Service</Link>
        <Link to={"/about"}>About</Link>

        </>
    )
}
export default Navbar;
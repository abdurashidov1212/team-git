import { Router,Route,Routes } from "react-router-dom"
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Project from "./pages/project";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/project" element={<Project/>}/>
    </Routes>
    </>
  )
}

export default App;

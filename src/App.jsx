import { Router,Route,Routes } from "react-router-dom"
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Project from "./pages/project";
import Service from "./pages/service";
import About from "./pages/about";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </>
  )
}

export default App;

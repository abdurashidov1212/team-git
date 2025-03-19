import { Router,Route,Routes } from "react-router-dom"
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Project from "./pages/project";
import Service from "./pages/service";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/service" element={<Service/>}/>
    </Routes>
    </>
  )
}

export default App;

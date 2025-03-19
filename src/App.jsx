import { Router,Route,Routes } from "react-router-dom"
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;

import "./home.css"
import light from "../assets/light.png"

const Home = ()=>{
    return(
        <>
        <div className="home">
            <div className="home1">

        <h3>MODERN INTERIOR</h3>
        <h1>Create <br /> Your   <br />
        Interior Design.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />
veniam, quis nostrud exercitation.</p>
<button>CONTACT</button>
</div>
<div className="home2">
    <img src={light} alt="light" width={550} height={620} />
</div>

        </div>
        </>
    )
}
export default Home;
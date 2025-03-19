import "./blog.css"
import one from "../assets/one.png"
import two from "../assets/two.png"



const Blog = ()=>{
    return(
        <>
       <div className="blog">
        <h3>TESTIMONIALS</h3>
        <h1>Client says about us</h1>
       </div>

       <div className="pol">
        <div className="pol1">
            <div className="pol3">
                <img src={one} alt="one" />
            </div>
            <div className="pol2">
            <h3>Louis Saville /CEO at Google inc</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br />
elit, sed do eiusmod tempor incididunt ut labore <br />
et dolore magna aliqua.</p>

            </div>
        </div>


        <div className="pol1">
            <div className="pol4">
                <img src={two} alt="one" />
            </div>
            <div className="pol2">
            <h3>Louis Saville /CEO at Google inc</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br />
elit, sed do eiusmod tempor incididunt ut labore <br />
et dolore magna aliqua.</p>

            </div>
        </div>

       </div>

       <div className="do">
        <h1>DON’T FORGET TO SIGN UP</h1>
        <p>_______________________________________</p>
       </div>

       <div className="find">
       Find out early about all upcoming promotions and new product releases with <br />
       our newsletter.
       </div>

       <div className="in">
        <input type="text" placeholder="Enter your email address...."/>
        <button>SUBSCRIBE</button>
       </div>
        </>
    )
}
export default Blog;
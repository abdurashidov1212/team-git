import "./project.css"
import grop from "../assets/grop.png"

const Project =()=>{
    return(
        <>
        <div className="pro">
            <div className="pro1">
                <img src={grop} alt="grop" width={550} height={620} />
            </div>
            <div className="pro2">
            <h3>ABOUT US</h3>
            <h1>Interioris The Will <br />
            of An Epoch Mextreo</h1>
            <p>There are many variations of passages of Lorem Ipsum available, <br />
but the majority have suffered alteration in some form injected <br />
humour, or randomised words which don't look even slightlybr <br />
believable.If you are going to use a passage of Lorem Ipsum, <br />
sure there isn't anything embarrassing hidden the middleof text. <br />
All the Lorem Ipsum generators on the Internettend to repeat <br />
predefined chunks as necessary,making this the first true <br />
generator on the Internet. </p>
            <button>LEARN MORE</button>
            </div>
        </div>
        </>
    )
}
export  default Project;
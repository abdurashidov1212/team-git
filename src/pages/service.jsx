import img from "../assets/image.png"
import "./service.css"
import grp from "../assets/grp.png"

const Service =()=>{
    return(
        <>
        <div className="ser">
            <div className="ser1">
                <img src={img} alt="img" />
                <h3>Years Of Successful <br />
Working <br />
The Market</h3>
<button>READ MORE   </button>
            </div>
            <div className="ser2">
                <img src={grp} alt="grp" width={580} height={650} />
            </div>
        </div>
        </>
    )
}
export  default Service;

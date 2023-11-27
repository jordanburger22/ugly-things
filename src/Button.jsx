import uglyThingsData from "./UglyThingsData";
import { useContext } from "react";

function Button(){
    const uglyContext= useContext(uglyThingsData)
    return(
        <div>
            <button onClick={uglyContext.submitUglyData} className="button">Submit</button>
        </div>
    )
}

export default Button
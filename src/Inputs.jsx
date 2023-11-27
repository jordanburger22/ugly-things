import uglyThingsData from "./UglyThingsData"
import { useContext } from "react"

function Inputs(props){
    const uglyContext = useContext(uglyThingsData) 
    return(
        <form className="input-container">
            <input 
                placeholder="Title"
                className="input-field"
                name="title"
                onChange={uglyContext.InputListener}
                value={uglyContext.inputData.title}
            />
            <input 
                placeholder="img URL"
                className="input-field"
                name="imgUrl"
                onChange={uglyContext.InputListener}
                value={uglyContext.inputData.imgUrl}
            />
            <input 
                placeholder="Description"
                className="input-field"
                name="description"
                onChange={uglyContext.InputListener}
                value={uglyContext.inputData.description}
            />
        </form>
    )
}

export default Inputs
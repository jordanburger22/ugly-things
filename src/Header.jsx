import Inputs from "./Inputs"
import Button from "./Button"

function Header(){
    return(
        <div className="header-container">
            <h1>Share Your Ugly Finds</h1>
            <Inputs />
            <Button />
        </div>
    )
}

export default Header
import uglyThingsData from "./UglyThingsData";
import { useContext, useState } from "react";

function UglyCard(props){
    const uglyContext= useContext(uglyThingsData)

    const [isEditMode, setEditMode] = useState(false)

    function changeEditMode(){
        setEditMode(prevMode => !prevMode)
    }

    const [editPost, setEditPost] = useState({
        title: props.data.title,
        description: props.data.description
    })

    function editInputListener(e){
        const {name, value} = e.target
        setEditPost(prevPost => ({
            ...prevPost,
            [name]: value
        }))
    }

    function handleUpdate(){
        setEditMode(false)
        uglyContext.editUgly(props.data._id, editPost)
    }
     
    return(
        <div className="ugly-card-container">
            <h1 className="ugly-card-title">{props.data.title}</h1>
            <img src={props.data.imgUrl}/>
            <h3 className="ugly-card-description">{props.data.description}</h3>
            <div>
                <button onClick={() => uglyContext.deleteUgly(props.data._id)}>Delete</button>

                {!isEditMode && <button
                    onClick={changeEditMode}
                >Edit</button>}
                {isEditMode && <button
                    onClick={handleUpdate}
                >Update</button>}
            </div>
           {isEditMode && <div>
                <input 
                    name="title"
                    value={editPost.title}
                    onChange={editInputListener}
                />
                <input 
                    name="description"
                    value={editPost.description}
                    onChange={editInputListener}
                />
            </div>}
        </div>
    )
}

export default UglyCard
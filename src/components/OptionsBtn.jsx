import { useState } from "react"
import DeleteTask from "./DeleteTask"
import EditTask from "./EditTask"
const OptionsBtn = ({optionsToggle, title, description, assignee, priority, status, team}) => {
    const [deleteBtn, setDeleteBtn] = useState(false)
    const [editBtn, setEditBtn] = useState(false)

    
    return (
       <>
        <div className=" z-[10] fixed top-0 bottom-0 left-0 right-0 bg-[rgba(189,189,189,0.9)]" onClick={() => optionsToggle(false)} ></div>
        <div className=" absolute z-[20] top-[60%] left-[50%]  w-[90px] h-auto bg-gray-200 rounded">
            <div className=" ml-[5px] my-[2px] cursor-pointer" onClick={() => setEditBtn(true)}>
                <p>Edit</p>
            </div>
            <hr className=" bg-white border-none h-[1px] mx-[5px]"></hr>

            {/** This condition makes delete button invisible for completed and deployed tasks */}
            
            { (status === "Pending" || status === "In Progress" || status === "Deffered") &&  <div className=" ml-[5px] my-[2px] cursor-pointer" onClick={() => setDeleteBtn(true)}>
                <p>Delete</p>
            </div> }
            {deleteBtn && <DeleteTask deleteToggle={setDeleteBtn} title={title} removeOptions={optionsToggle}/>}
            {editBtn && <EditTask title={title} description={description} assignee={assignee} priority={priority} status={status} team={team} removeOptions={optionsToggle} editToggle={setEditBtn}/>}
        </div>
       </>
    )
}

export default OptionsBtn
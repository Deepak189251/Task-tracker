import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"
//import { useDispatch } from "react-redux"
//import { removeTask } from "../utils/TaskSlice"
import OptionsBtn from "./OptionsBtn"
import { useState } from "react"
const Task = (props) => {
   //const dispatch = useDispatch()

   const [options, setOptions] = useState(false)
   
    //console.log(props.value)
    const {title, description, assignee, priority, status, team} = props.value

    const btninfo = status === "Pending" ? "Assign" : status
    return (
        <div className="task w-[230px] bg-gray-100 px-[15px] py-[15px] mx-[10px] mb-[10px] rounded relative">
           <div className="flex justify-between mb-[8px]">
              <p className="">{title}</p> 
              <div className=" h-[23px] w-[24px] bg-blue-800">
               <p className=" ml-[3px] mr-[2px] text-white">{priority}</p>
              </div>
           </div>
           <hr className=" h-[1px] border-none bg-black"></hr>
           <div className=" mt-[5px] mb-[10px]">
              <p className=" text-sm ">{description}</p>
           </div>
           <div className=" flex justify-between">
             <p>@{assignee}</p>
             <FontAwesomeIcon  className=" w-[14px] bg-blue-800 cursor-pointer px-[4px] py-[3px]" onClick={() => setOptions(true)} color="white" icon={faEllipsisVertical} />
             
           </div>
           <div className=" mt-[15px]">
            <button className=" px-[3px] pt-[3px] pb-[5px] bg-blue-800 w-[110px] rounded">
               <span className=" text-xs text-white">{btninfo}</span>
            </button>
           </div>
           {options && <OptionsBtn optionsToggle={setOptions} title={title} description={description} assignee={assignee} priority={priority} status={status} team={team}/>}
           
        </div>
    )
}

export default Task
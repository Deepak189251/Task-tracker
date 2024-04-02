import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { editTask } from "../utils/TaskSlice"
const EditTask = ({title, description, assignee, priority, status, team, editToggle, removeOptions}) => {

    const [priorityValue, setPriorityValue] = useState(priority)
    const [statusValue, setStatusValue] = useState(status)
    const dispatch = useDispatch()
    const removeEdit = () => {
        removeOptions(false)
        editToggle(false)
    }

    const getPriorityValue = (e) => {
        setPriorityValue(e.target.value)
       
    }

    const getStatusValue = (e) => {
        setStatusValue(e.target.value)
        
    }
    const handleEdit = () => {
        dispatch(editTask({title, statusValue, priorityValue}))
        console.log(statusValue)
        console.log(priorityValue)
        removeEdit()
    }
    return (
       <>
        {<div className=" z-[10] fixed top-0 bottom-0 left-0 right-0 bg-[rgba(189,189,189,0.9)]" onClick={() => removeEdit()}></div>}
        <div className=" fixed w-[360px] z-[20] bg-gradient-to-br from-pink-200 to-indigo-200 h-auto top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <div className=" flex justify-between bg-white py-[10px] px-[25px]">
                <div>
                    <p className=" font-bold">EDIT TASK</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCircleXmark} onClick={() => removeEdit()}/>
                </div>
            </div>
            <div className=" px-[25px]">
                <div className=" my-[15px]">
                    <p className=" mb-[8px]">Title:</p>
                    <div className="  h-[30px] bg-white pt-[2px] pl-[5px]">{title}</div>
                </div>
                <div className=" my-[15px]">
                    <p className=" mb-[8px]">Description:</p>
                    <div className="  h-auto text-sm bg-white p-[8px]">{description}</div>
                </div>
                <div className=" my-[15px]">
                    <p className=" mb-[8px]">Team:</p>
                    <div className="  h-[30px] bg-white pt-[2px] pl-[5px]">{team}</div>
                </div>
                <div className=" my-[15px]">
                    <p className=" mb-[8px]">Assignee:</p>
                    <div className="  h-[30px] bg-white pt-[2px] pl-[5px]">{assignee}</div>
                </div>
                <div className=" flex justify-between my-[15px]">
                    <div className=" flex justify-between my-[15px]">
                        <p className=" mr-[5px]">Priority:</p>
                        <select className=" w-[80px] h-[25px] pl-[5px]" onChange={getPriorityValue}>
                            <option value="P0" >P 0</option>
                            <option value="P1" >P 1</option>
                            <option value="P2" >P 2</option>
                        </select>
                    </div>
                    <div className="flex justify-between my-[15px]">
                        <p className=" mr-[5px]">Status:</p>
                        <select className=" w-auto h-[25px] pl-[5px]" onChange={getStatusValue}>
                            <option value="Pending" >Pending</option>
                            <option value="In Progress" >In Progress</option>
                            <option value="Completed" >Completed</option>
                            <option value="Deployed" >Deployed</option>
                            <option value="Deffered" >Deffered</option>

                        </select>
                    </div>
                </div>
            </div>
            <div className=" mb-[20px]">
                <button onClick={handleEdit} className=" px-[3px] pt-[3px] pb-[5px] bg-blue-900 ml-[145px] w-[80px] mr-[30px] rounded">
                    <p className=" text-white">Submit</p>
                </button>
                <button className=" px-[3px] pt-[3px] pb-[5px] bg-blue-900 w-[80px] mr-[25px] rounded">
                    <p className=" text-white">Reset</p>
                </button>
            </div>

        </div>
       </>
    )
}

export default EditTask
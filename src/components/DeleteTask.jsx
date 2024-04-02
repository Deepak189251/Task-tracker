import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { removeTask } from "../utils/TaskSlice"
const DeleteTask = ({deleteToggle, title, removeOptions}) => {

    const dispatch = useDispatch()
    const removeDelete = () =>{
        deleteToggle(false)
        removeOptions(false)
    }

    const  handleDelete = () => {
        dispatch(removeTask(title))
        removeDelete()
    }
    useEffect(() => {
        document.body.style.overflowY = "hidden"
        return () => {
            document.body.style.overflowY = "scroll"
        }
       }, [])
    return (
        <>
            <div className=" z-[10] fixed top-0 bottom-0 left-0 right-0 bg-[rgba(189,189,189,0.9)]" onClick={removeDelete}></div>
            <div className=" w-[350px] bg-gradient-to-br from-pink-200 to-indigo-200 z-20 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <div className=" flex justify-between py-[10px] px-[25px] bg-white">
                    <div>
                        <p className=" font-bold">DELETE TASK</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCircleXmark} onClick={removeDelete}/>
                    </div>
                </div>
                <div className=" px-[25px] py-[20px]">
                    <div className=" pb-[15px]">
                        <p>Do You Wish to Delete Task</p>
                    </div>
                    <div className=" flex justify-between">
                        <p>{title}</p>
                        <div className=" flex justify-between">
                            <button onClick={handleDelete} className=" w-[65px] px-[2px] pt-[1px] pb-[2px] bg-blue-900 mr-[20px] rounded">
                                <p className=" text-white">Yes</p>
                            </button>
                            <button onClick={removeDelete} className=" w-[65px] px-[2px] pt-[1px] pb-[2px] bg-blue-900 rounded">
                                <p className=" text-white">No</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteTask
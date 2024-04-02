import { useState, useRef, useEffect } from "react"
import { closeCreateTask } from "../utils/ConfigSlice"
import { useDispatch } from "react-redux"
import { addTask } from "../utils/TaskSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons"
import format from "date-fns/format"
const CreateTask = () => {
    const [priority, setPriority] = useState("P0")
    const title = useRef(null)
    const discription = useRef(null)
    const team = useRef(null)
    const assignee = useRef(null)
    const dispatch = useDispatch()

    const handlePriority = (res) => {
        setPriority(res.target.value)
      }

      // This resetform function is for closing the create task modal and back to home.
    const resetForm = () => {
        //setCreateTask(false)
        dispatch(closeCreateTask())
        setPriority("P0")
       }

    const handleCreateTask = () => {
        const date = new Date()
         

        dispatch(addTask({
            "title": title.current.value,
            "description": discription.current.value,
            "team": team.current.value,
            "assignee": assignee.current.value,
            "priority": priority,
            "status": "Pending",
            "startDate": format(date, 'yyyy/MM/dd') ,
            "endDate": null
        }))
    
         resetForm()
       }

       useEffect(() => {
        document.body.style.overflowY = "hidden"
        return () => {
            document.body.style.overflowY = "scroll"
        }
       }, [])
   
    return (
        <>
            <div className=" z-10 fixed top-0 bottom-0 left-0 right-0 bg-[rgba(189,189,189,0.9)]" onClick={(() => dispatch(closeCreateTask()))}></div>
            <div className="task-form w-[380px] h-auto bg-gradient-to-br from-pink-200 to-indigo-200 z-20 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <div className="form-header flex justify-between bg-white py-[10px] px-[20px]">
                    <div>
                        <p className=" font-bold">CREATE A TASK</p>
                    </div>
                    <div>
                        <button onClick={(() => dispatch(closeCreateTask()))}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    </div>
                </div>

                <form className="form-body relative" onSubmit={(e) => e.preventDefault()}>
                    <div className=" flex justify-between px-[20px] py-[20px] ">
                        <p>Title:</p>
                        <input className=" w-[230px] border-none outline-none" type="text" ref={title}></input>
                    </div>
                    <div className=" flex justify-between px-[20px] pb-[20px]">
                        <p>Discription:</p>
                        <input className="w-[230px] h-[50px] border-none outline-none" type="tex" ref={discription}></input>
                    </div>
                    <div className=" flex justify-between px-[20px] pb-[20px]">
                        <p>Team:</p>
                        <input className="w-[230px] border-none outline-none" type="text" ref={team}></input>
                    </div>
                    <div className=" flex justify-between px-[20px] pb-[20px]">
                        <p>Assignees:</p>
                        <input className="w-[230px] border-none outline-none" type="text" ref={assignee}></input>
                    </div>
                    <div className=" flex justify-between px-[20px] pb-[20px] relative">
                        <p>Priority:</p>
                        <select className=" w-[70px] left-[130px] absolute border-none outline-none" onChange={handlePriority}>
                            <option value="P0" >P 0</option>
                            <option value="P1" >P 1</option>
                            <option value="P2" >P 2</option>
                        </select>
                        
                    </div>
                    <button onClick={handleCreateTask} className=" ml-[125px] mb-[10px] px-[3px] pt-[3px] pb-[5px] bg-blue-900 w-[140px] rounded">
                            <p className=" text-white">Create</p>
                    </button>
                </form>
            </div>
        </>
    )
}

export default CreateTask
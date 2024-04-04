import Header from "./Header"
//import Task from "./Task"
//import { useState, useRef } from "react"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { faCircleXmark } from "@fortawesome/free-regular-svg-icons"
import { useDispatch } from "react-redux"
import { openCreateTask } from "../utils/ConfigSlice"
import { useSelector } from "react-redux"
import CreateTask from "./CreateTask"
import PendingTask from "./PendingTask"
import CompletedTask from "./CompletedTask"
import InProgressTask from "./InProgressTask"
import DeployedTask from "./DeployedTask"
import DefferedTask from "./DefferedTask"
import { useState } from "react"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
//import { DateRangePicker, DateRange } from 'react-date-range';
import { format } from "date-fns"
import { sortTask } from "../utils/TaskSlice"

const Body = () => {
   const [search, setSearch] = useState("")
   const [priority, setPriority] = useState("false")
   //const [dateRange, setDateRange] = useState(false)
   const [startDate, setStartDate] = useState(new Date())
   const [endDate, setEndDate] = useState(new Date())
   //const [sortTask, setSortTask] = useState("Start")

    const dispatch = useDispatch()
    const createTaskData = useSelector(store => store.config.createTask)
    /*let taskList = useSelector(store => store?.task?.all).filter((e) => {
        return search?.toLowerCase() === "" ? e : e?.assignee?.toLowerCase()?.includes(search)
    })*/
   // console.log(list)

   const handleSortTask = (e) => {
      const data = e.split('/')
      //console.log(data)
      const [fData, sData] = data
      console.log(fData + " " + sData)
      
      dispatch(sortTask({fData, sData}))
   }

   let taskList = useSelector(store => store.task.all)
   console.log(taskList)

   // This filter uses Assignee for filteration
    taskList = taskList.filter((e) => {
        return search?.toLowerCase() === "" ? e : e?.assignee?.toLowerCase()?.includes(search?.toLowerCase())
    })
    console.log(taskList)
    
    //This filter uses priority for filteration

    if(priority != "false"){
        taskList = taskList.filter((e) => {
            console.log(priority)
            return e.priority === priority
        })
    }

    /*if(startDate){
        taskList = taskList.filter((e) => {
            return e.startDate >= startDate || e.startDate <= endDate
        })
    }*/

    if(startDate ) {
        taskList = taskList.filter((e) => {
          /*  let date = new Date (e.startDate)
            date = format(date, 'dd/MM/yyyy')
            console.log(date) */

           // console.log(format(startDate, 'yyyy/MM/dd'))
           // return e.startDate >= format(startDate, 'dd/MM/yyyy') && e.startDate <= format(endDate, 'dd/MM/yyyy')
           
           return e.startDate >= format(startDate, 'yyyy/MM/dd') && e.startDate <= format(endDate, 'yyyy/MM/dd')

        })
    }
    
    console.log(taskList)


     /* taskList = taskList.sort((a, b) => {
        console.log(sortTask)
        if(a?.[sortTask] < b?.[sortTask]) return -1
        if(a?.[sortTask] > b?.[sortTask]) return 1
        return 0
      }) */

      


    /*const getDate = (e) => {
        setDate(e.target.value)
        console.log(date)
    }*/
   
   /* const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      }

    const handleSelect = (date) => {
        console.log(date)
    }

    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);*/

    //const [taskList, setTaskList] = useState(useSelector(store => store.task.all))
    
    console.log(taskList)
    if(!taskList) return

    // This filters are to differenciate tasks according to their status

    const pendingTasks = taskList.filter((e) => e.status === "Pending")
    const inProgressTask = taskList.filter((e) => e.status === "In Progress")
    const completedTask = taskList.filter((e) => e.status === "Completed")
    const deployedTask = taskList.filter((e) => e.status === "Deployed")
    const defferedTask = taskList.filter((e) => e.status === "Deffered")

    console.log(pendingTasks)
    console.log(format(startDate, 'yyyy/MM/dd') + " " + format(endDate, 'yyyy/MM/dd'))
   /* if(!startDate) return*/
    
   
    return (
        <div className="body px-[30px]  bg-gradient-to-br from-pink-200 to-indigo-200 h-[695px]">
            <Header />
            <div className="content-container w-[100%]  px-[30px] py-[25px]  border border-[2px]-black">
                <div className="options">
                    <div className="filters flex justify-between mb-[15px]">
                        <div className="filter">
                            <span>Filter By:</span>
                            <input className=" ml-[20px] pl-[10px] px-[2px] w-[130px] rounded border-none outline-none py-[2px] " onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Assignee name" ></input>
                            <select className=" ml-[20px] pl-[10px] rounded w-[130px] border-none outline-none py-[2px]" onChange={(e) => setPriority(e.target.value)}>
                                    <option value="false">Priority</option>
                                    <option value="P0" >P 0</option>
                                    <option value="P1" >P 1</option>
                                    <option value="P2" >P 2</option>
                            </select>
                            {/*<div onClick={() => setDateRange(true)}>DatePicker</div>*/}
                            {/*dateRange && <DateRange className=" absolute"
                              editableDateInputs={true}
                              onChange={item => setState([item.selection])}
                              moveRangeOnFirstSelection={false}
                              ranges={state}
    />*/}                   <span className=" pl-[15px]">From:</span>
                            <input type="date" onChange={(e) => setStartDate(e.target.value)} className=" ml-[10px] rounded w-[135px] px-[5px]"></input>
                            <span className=" pl-[15px]">To:</span>
                            <input type="date" onChange={(e) => setEndDate(e.target.value)} className=" ml-[10px] rounded w-[135px] px-[5px]"></input>  
                            
                            <button></button>
                        </div>
                        <div className="new-task">
                            <button className=" px-[3px] pt-[3px] pb-[5px] bg-blue-900 w-[140px] rounded" onClick={(() => dispatch(openCreateTask()))}>
                                <span className=" text-xs text-white">Add New Task</span>
                            </button>
                            {createTaskData
                            
                            && 

                            <CreateTask />
                            
                            }
                        </div> 
                    </div>
                    <div className="sort">
                        <span>Sort By:</span>
                        <select className=" ml-[26px] rounded w-[130px] py-[2px] pl-[10px] border-none outline-none" onChange={(e) => handleSortTask(e.target.value)} >
                            <option value="startDate/up">Start Date Up</option>
                            <option value="startDate/down">Start Date Down</option>
                            <option value="priority/up" >Priority Up</option>
                            <option value="priority/down" >Priority Down</option>
                            
                        </select>
                    </div>
                </div>
                <div className="content mt-[35px] flex justify-between">
                   {/*taskList?.map((e, i) => <Task key={i} value={e} num={i} />)*/}
                   <PendingTask  list={pendingTasks} title={"Pending"}/>
                   <InProgressTask list={inProgressTask} title={"In Progress"} />
                   <CompletedTask list={completedTask} title={"Completed"}/>
                   <DeployedTask list={deployedTask}  title={"Deployed"}/>
                   <DefferedTask list={defferedTask} title={"Deffered"}/>
                </div>
            </div>
        </div>
    )
}

export default Body
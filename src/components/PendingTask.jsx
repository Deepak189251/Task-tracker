import Task from "./Task"
const PendingTask = ({list, title}) => {
    console.log(list)
    
    return (
        <div className=" bg-white w-[250px] h-[400px] rounded overflow-y-auto overflow-x-hidden">
            
            <div className=" h-[50px] bg-gray-400 w-[100%] text-center rounded-t mb-[10px]">
                <p className=" text-xl text-white font-semibold pt-[8px]">{title}</p>
            </div>
            {list?.map((e, i) => <Task key={i} value={e} />)}
        </div>
    )
}

export default PendingTask
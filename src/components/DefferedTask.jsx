import Task from "./Task"
const DefferedTask = ({title, list}) => {

    return (
        <div className=" bg-white w-[250px] h-[400px] rounded overflow-y-auto ">
             <div className=" h-[50px] bg-pink-400 text-center rounded-t mb-[10px]">
                <p className=" text-xl text-white font-semibold pt-[8px]">{title}</p>
            </div>
            {list?.map((e, i) => <Task key={i} value={e} />)}
        </div>
    )
}

export default DefferedTask
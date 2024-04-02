import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-regular-svg-icons"

const Header = () => {

    return (
        <div className="header flex justify-between w-[100%] h-auto px-[30px] pt-[35px] pb-[25px]">
            <div >
                <p className="text-3xl font-bold">Task Board</p>
            </div>

            <div>
                <FontAwesomeIcon className=" w-[40px] h-[40px]"  icon={faCircleUser}/>
            </div>
        </div>
    )
}

export default Header
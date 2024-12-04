import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return <div>
        <div className="border-b flex justify-between px-10 py-4">
            <div className="flex justify-center flex-col cursor-pointer">
                <Link to={'/blogs'} >
                   Medium
                </Link>
            </div>
            <div>
                <Link to={"/publish"}><button type="button" className="mr-8 focus:outline-none text-white bg-green-700
                        hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5
                         py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            New
                         </button>
                <Avatar size={"big"} name = "Gayathri"/></Link>
            
            </div>
        </div>
    </div>
}
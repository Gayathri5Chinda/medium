import { Link } from "react-router-dom";

interface BlockCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate,
}:BlockCardProps) => {
    
    return<Link to = {`/blog/${id}`}>
            <div className=" p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
                <div className="flex">
                    <Avatar name={authorName} size = {"small"}/> 
                    <div className="font-extralight flex justify-center flex-col pl-2">{authorName}</div>
                    <div className="flex justify-center flex-col pl-2">
                        <Circle/>
                    </div>
                    <div className="pl-2 font-thin flex justify-center flex-col text-slate-500 text-sm">
                        {publishedDate}
                    </div>
                </div>
                <div className="text-xl font-semibold pt-2">
                    {title}
                </div>
                <div className="text-md font-thin">
                    {content.slice(0, 100)+"..."}
                </div>
                <div className="text-slate-500 text-sm font-thin pt-2">
                    {`${Math.ceil(content.length/100)} minute(s) read`}
                </div> 
            </div>
        </Link> 
}

export function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-400">
    </div>
}

export function Avatar({name, size = "small" } : {name: string, size: "small" | "big"}){
    return <div className={`relative inline-flex items-center 
    justify-center ${size === "small" ? "w-6 h-6" : "w-10 h-10"} overflow-hidden bg-gray-600 
    rounded-full `}>
    <span className={`${size == "small" ? "text-xs" : "text-md"} font-extralight text-gray-300`}>{name[0]}</span>
</div>
}
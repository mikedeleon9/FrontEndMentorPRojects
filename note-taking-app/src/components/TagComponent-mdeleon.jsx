import { TiTag } from "react-icons/ti";

export default function TagComponent(props){
    return(
        <>
            <div className="flex items-center gap-2 text-sm cursor-pointer">
                    <TiTag></TiTag>
                    <p>{props.title}</p>
            </div>
        </>
    )
}
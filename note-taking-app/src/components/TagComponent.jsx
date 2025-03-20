import { TiTag } from "react-icons/ti";

export default function TagComponent(props){
    return(
        <>
            <div className="flex items-center gap-2">
                    <TiTag></TiTag>
                    <p>{props.title}</p>
            </div>
        </>
    )
}
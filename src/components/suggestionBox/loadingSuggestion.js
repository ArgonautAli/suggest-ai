import Image from "next/image";
import loading from "../../assets/images/loading-splash.gif"

export default function LoadingSuggestionBox(){
   
    return(
        <div className="flex w-full mt-4 justify-center	" style={{backgroundColor:"#fff", borderRadius:"16px", padding:"8px"}}>
            <Image src={loading} height={200} width={200}/>
        </div>
    )
}
import SuggestionBox from "../suggestionBox/suggestionBox"
import PromptContainer from "../promptContainer/promptContainer"
import style from "./mainLayout.module.css"
import character from "../../assets/images/suggestAiChar.png"
import Image from "next/image"

export default function Main(){
    return(
        <>
        <div className={style.body}>
        <div className={style.upperContainer}>
        <PromptContainer />
        <Image src={character} height={379} width={306}/>
        
        </div>
        <div>
            <SuggestionBox />
        </div>
        </div>
       
        </>
    )
}
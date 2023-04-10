import SuggestionBox from "../suggestionBox/suggestionBox"
import PromptContainer from "../promptContainer/promptContainer"
import style from "./mainLayout.module.css"
import character from "../../assets/images/suggestAiChar.png"
import Image from "next/image"
import LoadingSuggestionBox from "../suggestionBox/loadingSuggestion"
import MobileSuggestionBox from "../suggestionBox/mobileSuggestionBox"
import { useState } from "react"

export default function Main(){
    const [isLoading, setIsLoading] = useState(false);
    const [promptBody, setPromptBody] = useState("");
    const [buttonSelected, setButtonSelected] = useState("Movie")

    // console.log("btn", buttonSelected)
    console.log("process.env.OPENAI_API_KEY", process.env.OPEN_API_KEY)

    async function promptHandler(){
        console.log("prompt handler called", promptBody);
        const resp = await getResponseFromOpenAI();
        console.log("resp", resp) 
    }
    const getResponseFromOpenAI = async () => {
      
        console.log("Getting response from OpenAI...");
        setIsLoading(true);
        const response = await fetch("/api/suggestion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: promptBody, format: buttonSelected }),
        });
    
        const data = await response.json();
        setIsLoading(false);
        console.log("data", data.text);
       
      };
    return(
        <>
        <div className={style.body}>
        <div className={style.upperContainer}>
        <PromptContainer 
        promptBody={promptBody}
        setPromptBody={setPromptBody}
        onSubmit = {promptHandler}
        buttonSelected={buttonSelected}
        setButtonSelected={setButtonSelected}
        />
        <Image src={character} height={379} width={306}/>
        
        </div>
        <div>
            {isLoading? <><LoadingSuggestionBox /></>: <>
            <SuggestionBox />
            <MobileSuggestionBox />
            </>}
          
        </div>
        {/* <div>
            <MobileSuggestionBox />
        </div> */}
        </div>
       
        </>
    )
}
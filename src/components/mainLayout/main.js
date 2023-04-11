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
    const [suggImage, setSuggImage] = useState("")
    const [suggHeading, setSuggHeading] = useState("")
    const [suggBio, setSuggBio] = useState("")
    const [suggLink, setSuggLink] = useState("")
    const [calledApi, setCalledApi] = useState(false)
    const [suggResponse, setSuggResponse] = useState()



    // console.log("btn", buttonSelected)

    async function promptHandler(){
      setCalledApi(true)
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
        console.log("split", data.text.split("^^"))
        const promptArray = data.text.split("^^")
        setSuggResponse(promptArray)
        setSuggImage(promptArray[1])
        setSuggHeading(promptArray[2])
        setSuggBio(promptArray[3])
        setSuggLink(promptArray[4])
       
      };

      console.log("sugg img", suggImage)
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
          {calledApi? <>
            {isLoading? <><LoadingSuggestionBox /></>: <>
            {suggResponse?.length? <>
              <SuggestionBox suggImage={suggImage} suggHeading={suggHeading} suggBio={suggBio} suggLink={suggLink} />
            <MobileSuggestionBox suggImage={suggImage} suggHeading={suggHeading} suggBio={suggBio} suggLink={suggLink}/> </>: null}
           
            </>}
          </>: null}
            
          
        </div>
        {/* <div>
            <MobileSuggestionBox />
        </div> */}
        </div>
       
        </>
    )
}
import SuggestionBox from "../suggestionBox/suggestionBox"
import PromptContainer from "../promptContainer/promptContainer"
import style from "./mainLayout.module.css"
import character from "../../assets/images/suggestAiChar.png"
import Image from "next/image"
import LoadingSuggestionBox from "../suggestionBox/loadingSuggestion"
import MobileSuggestionBox from "../suggestionBox/mobileSuggestionBox"
import { useState } from "react"
// import { Head } from 'next/head';

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
        console.log("data.text type", typeof(data.text));

        console.log("split", data.text.split('"'))
        const promptArray = data.text.split('"');
        console.log("prompt array", promptArray)
        setSuggResponse(promptArray)
        setSuggImage(promptArray[1])
        console.log("sugg resp[0]", promptArray[3])
        setSuggHeading(promptArray[3])
        setSuggBio(promptArray[5])
        setSuggLink(promptArray[7])
       
      };

      console.log("sugg resp", suggResponse)
    
      console.log("sugg img out", suggImage)


    return(
        <>
           {/* <Head>
  <title>Suggest AI app</title>
  <link rel="icon" href="/favicon.ico" />
  </Head> */}
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
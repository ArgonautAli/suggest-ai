import style from "./promptContainer.module.css"
import ButtonComp from "../button/buttonComp"

export default function PromptContainer({promptBody, setPromptBody, onSubmit, buttonSelected, setButtonSelected}){
    function promptCaller(e){
        if(e.keyCode === 13){
            onSubmit();
            setPromptBody("")
        }
    }
    return(<>
    <div className={style.body}>
        <div className={style.text}>I want a</div>
        <div className={style.btnContainer}>
            <ButtonComp text="Movie" color="#fff" background="#1A98FF" buttonSelected={buttonSelected} setButtonSelected={setButtonSelected
            }/>
            <ButtonComp text="Book" color="#1A98FF" background="#fff" buttonSelected={buttonSelected} setButtonSelected={setButtonSelected
            }/>
            <ButtonComp text="Series" color="#fff" background="#79E1CF" buttonSelected={buttonSelected} setButtonSelected={setButtonSelected
            }/>

        </div>
        <div className={style.text}>that feels like</div>
        <div className="w-full flex justify-center">
            <input className={style.inputBar} placeholder="wholesome, happy ending and women in armour" value={promptBody} onChange={(e)=>setPromptBody(e.target.value)} onKeyDown={(e)=>promptCaller(e)}/>
        </div>

    </div>
    
    </>)
}
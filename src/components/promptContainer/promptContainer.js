import style from "./promptContainer.module.css"
import ButtonComp from "../button/buttonComp"

export default function PromptContainer(){
    return(<>
    <div className={style.body}>
        <div className={style.text}>I want a</div>
        <div className={style.btnContainer}>
            <ButtonComp text="Movie" color="#fff" background="#1A98FF"/>
            <ButtonComp text="Book" color="#1A98FF" background="#fff" />
            <ButtonComp text="Series" color="#fff" background="#79E1CF"/>

        </div>
        <div className={style.text}>that feels like</div>
        <div className="w-full flex justify-center">
            <input className={style.inputBar} placeholder="wholesome, happy ending and women in armour" />
        </div>

    </div>
    
    </>)
}